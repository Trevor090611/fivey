export const courseNames = {
  biology: 'AP Biology',
  chemistry: 'AP Chemistry',
  'environmental-science': 'AP Environmental Science',
  'physics-1': 'AP Physics 1',
  psychology: 'AP Psychology',
  'calculus-ab': 'AP Calculus AB',
  macroeconomics: 'AP Macroeconomics'
};

const coursePatterns = {
  biology: /\b(?:biology|bio)\b/i,
  chemistry: /\b(?:chemistry|chem)\b/i,
  'environmental-science': /\b(?:environmental science|apes)\b/i,
  'physics-1': /\bphysics(?:\s*1)?\b/i,
  psychology: /\b(?:psychology|psych)\b/i,
  'calculus-ab': /\b(?:calculus(?:\s*ab)?|calc(?:\s*ab)?)\b/i,
  macroeconomics: /\b(?:macroeconomics|macro)\b/i
};
const normalize = value => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const hasCourse = course => Object.hasOwn(courseNames, course);
const courseBase = ['AP Subjects', null];
const stops = new Set('a an and ap are as can do does for from get how i in is it me my of on or so that the their there this to use want was what when where which who will with you your'.split(' '));
const words = value => normalize(value).split(' ').filter(word => word.length > 1 && !stops.has(word));
const describe = (href, steps, course) => ({
  href: new URL(href, import.meta.url),
  steps: steps.map(step => step ?? courseNames[course]).join(' → ')
});
const courseUrl = (course, view) => './course.html?' + new URLSearchParams({ course, ...(view ? { view } : {}) });

export function matchCourse(text) {
  const explicit = Object.keys(coursePatterns).filter(course => coursePatterns[course].test(text));
  // “Chemistry of Life” is an AP Biology unit title.
  if (/\bchemistry of life\b/i.test(text) && !/\bap chemistry\b/i.test(text)) {
    return explicit.filter(course => course !== 'chemistry');
  }
  return explicit;
}

export function siteIntent(text) {
  const direct = /\b(?:(?:take|bring|send|direct) me to|(?:navigate|go|jump) to|autopilot)\b|^(?:(?:can|could|would) you |please )?open\b/i.test(text);
  const asksHow = /\b(?:where (?:can|do|is|are)|how (?:do|can|to) (?:i |we )?(?:get to|open|find|reach|navigate|access)|(?:guide|show) me)\b/i.test(text);
  const siteTarget = /\b(?:blog|about us|our experts|settings|account|profile|home(?:page)?|fivey|articles?|courses?|quick review notes|cheatsheets?|study guides?|textbooks?|resources|analytics|progress check(?:s|ing)?|practice questions?|question bank)\b/i.test(text);
  if (direct || (asksHow && siteTarget)) return 'navigate';
  if (/\b(?:quiz me|test me|quiz on|quiz for|practice questions? (?:for|on|from)|question set (?:for|on))\b/i.test(text) ||
      /\b(?:generate|make|create|give|start|take|do|need|want)\b.{0,45}\b(?:quiz|quizzes|practice questions?|question set)\b/i.test(text)) return 'quiz';
  return '';
}

const destinations = [
  [/\b(?:personal blog|blog)\b/i, './blog.html', ["Developer’s Personal Blog in the footer"]],
  [/\b(?:our experts|about us|mission(?: and| &) vision)\b/i, './about-us.html', ['Fivey home', 'About Us']],
  [/\b(?:about the developer|developer bio)\b/i, './about.html', ['About the Developer in the footer']],
  [/\b(?:account|profile)\b/i, './account.html', ['Account menu', 'My Account']],
  [/\bsettings\b/i, './settings.html', ['Account menu', 'Settings']],
  [/\b(?:course library|all courses|ap subjects|explore ap courses)\b/i, './courses.html', ['Fivey home', 'Explore AP courses']],
  [/\b(?:home|homepage)\b/i, './', ['Fivey logo']]
];
const courseDestinations = [
  [/\b(?:quick review notes|cheatsheet|cheat sheet)\b/i, 'cheatsheet', ['View Study Guides', 'Quick Review Notes :>']],
  [/\bdetailed study guides?\b/i, 'detailed', ['View Study Guides', 'Detailed Study Guide']],
  [/\bstudy guides?\b/i, 'guides', ['View Study Guides']],
  [/\b(?:textbooks?|resources)\b/i, 'resources', ['View All Resources']],
  [/\b(?:analytics|progress analytics)\b/i, 'analytics', ['Analytics']],
  [/\b(?:articles?|how (?:you|the developer|kayden) got a 5)\b/i, 'article', ['View Article']]
];

export async function resolveSiteRequest(kind, text, context, followUp = '') {
  const recent = matchCourse(followUp);
  const named = recent.length ? recent : matchCourse(text);
  const course = named.length === 1 ? named[0] : !named.length && context.course;
  if (kind === 'quiz') {
    const { units, unitPool } = await import('./practice-units.js?v=10');
    const unitMatch = Array.from(text.matchAll(/\bunits?\s*#?\s*(\d+)\b/gi)).at(-1);
    const number = unitMatch ? Number(unitMatch[1]) : undefined;
    const clean = normalize(text);
    const matches = Object.entries(units)
      .filter(([id]) => !course || id === course)
      .flatMap(([id, titles]) => titles.flatMap((title, i) => {
        const name = normalize(title);
        return name && (' ' + clean + ' ').includes(' ' + name + ' ') ? [{ course: id, unit: i + 1 }] : [];
      }));
    const inferred = matches.length === 1 ? matches[0] : undefined;
    const id = course || (named.length ? null : inferred?.course);
    if (!id) return { clarify: 'Which AP subject and unit should I open? For example, AP Biology Unit 3.' };
    const unit = number ?? inferred?.unit ?? (context.pageCourse === id ? context.pageUnit : undefined);
    if (!unit || !units[id]?.[unit - 1]) {
      return { course: id, clarify: unit ? courseNames[id] + ' has Units 1–' + units[id].length + '. Which unit should I open?' :
        'Which unit in ' + courseNames[id] + ' should I open?' };
    }
    const title = 'Unit ' + unit + ': ' + units[id][unit - 1];
    const steps = [...courseBase, 'Check my Progress!!'];
    if (units[id].some((_, i) => unitPool(id, i + 1).length)) steps.push('Open');
    return { kind, course: id, hasQuestions: unitPool(id, unit).length > 0,
      ...describe('./practice.html?' + new URLSearchParams({ course: id, mode: 'unit', unit }),
        [...steps, 'Practice By Units', title], id) };
  }

  const standard = destinations.find(([pattern]) => pattern.test(text));
  if (standard) return describe(standard[1], standard[2]);
  const practice = /\b(?:practice|progress checks?|progress checking|question bank)\b/i.test(text);
  const resource = courseDestinations.find(([pattern]) => pattern.test(text));
  if (!course && (resource || practice || named.length > 1)) return { clarify: 'Which AP subject should I open?' };
  const subjectPage = named.length && /\b(?:page|course|(?:open|find|go to|take me to)\s+(?:the\s+)?(?:ap\s+)?(?:biology|bio|chemistry|chem|environmental science|apes|physics|psychology|psych|calculus|calc|macroeconomics|macro))\b/i.test(text);
  if (!hasCourse(course) || (!resource && !practice && !subjectPage)) return null;
  const result = (href, steps) => ({ course, ...describe(href, [...courseBase, ...steps], course) });
  if (practice && /\bunits?\s*#?\s*\d+/i.test(text)) {
    const unit = await resolveSiteRequest('quiz', text, context, followUp);
    return { ...unit, kind: 'navigate' };
  }
  if (practice) return result('./practice.html?' + new URLSearchParams({ course }), ['Check my Progress!!']);
  if (resource?.[1] === 'article' && !['chemistry', 'physics-1', 'calculus-ab'].includes(course)) return describe('./blog.html', ["Developer’s Personal Blog in the footer"]);
  const view = resource?.[1] === 'detailed' ? 'detailed-guide' : resource?.[1];
  if (view === 'detailed-guide' && !['biology','chemistry','macroeconomics'].includes(course)) {
    return result(courseUrl(course, 'guides'), ['View Study Guides']);
  }
  return result(courseUrl(course, view), resource?.[2] ?? []);
}

let libraryPromise;
let developerPromise;
const readJson = async (file, asJson = true) => {
  const response = await fetch(new URL(file, import.meta.url), { signal: AbortSignal.timeout(4500) });
  if (!response.ok) throw new Error('Source unavailable');
  return asJson ? response.json() : response.text();
};
let postsPromise;
const formatted = 'FIVEY:FORMATTED:1\n';
function paragraphs(body) {
  if (!body.startsWith(formatted)) return body.split(/\n+/);
  const doc = new DOMParser().parseFromString(body.slice(formatted.length), 'text/html');
  // Parse inert markup and read text only. Never insert post markup into the chat.
  for (const element of doc.querySelectorAll('script,style,template,iframe,object')) element.remove();
  return doc.body.textContent.split(/\n+/);
}

function rankedPassages(documents, question) {
  const query = new Set(words(question).filter(word => !['blog','article','articles','fivey','developer','kayden'].includes(word)));
  const sourceRequest = /\b(?:blog|article|developer|kayden)\b/i.test(question);
  if (!query.size && !sourceRequest) return [];
  const scored = [];
  for (const doc of documents) {
    const titleWords = new Set(words(doc.title));
    let titleScore = 0;
    for (const word of query) if (titleWords.has(word)) titleScore += 2;
    for (const part of doc.paragraphs) {
      const sentences = part.trim().match(/[^.!?]+[.!?]?(?:\s|$)|[^.!?]+$/g) ?? [part];
      for (let index = 0; index < sentences.length; index++) {
        const excerpt = sentences.slice(Math.max(0, index - 1), index + 2).join('').trim().replace(/\s+/g, ' ');
        if (excerpt.length < 25) continue;
        const excerptWords = new Set(words(excerpt));
        let score = titleScore;
        for (const word of query) if (excerptWords.has(word)) score++;
        if (score >= (sourceRequest ? 1 : 2)) scored.push({ ...doc, excerpt: excerpt.length > 540 ? excerpt.slice(0, 537) + '…' : excerpt, score });
      }
    }
  }
  const seen = new Set();
  return scored.sort((a, b) => b.score - a.score).filter(doc => {
    if (seen.has(doc.href)) return false;
    seen.add(doc.href);
    return true;
  }).slice(0, 2);
}

export async function findSources(question, client) {
  libraryPromise ??= readJson('./library.json').catch(() => { libraryPromise = undefined; return {}; });
  developerPromise ??= readJson('./about.html', false).then(html => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return ['why-i-built', 'study-strategy'].flatMap(id => {
      const heading = doc.getElementById(id);
      if (!heading) return [];
      const area = heading.closest('section');
      return [{ title: heading.textContent, href: new URL('./about.html#' + id, import.meta.url).href,
        paragraphs: Array.from(area.querySelectorAll('p,li'), item => item.textContent) }];
    });
  }).catch(() => { developerPromise = undefined; return []; });
  postsPromise ??= client.rpc('fivey_blog_posts', { p_id: null }).abortSignal(AbortSignal.timeout(4500))
    .then(({ data, error }) => {
      if (error) throw error;
      return (Array.isArray(data) ? data : []).filter(post =>
        /^[a-f\d]{8}(?:-[a-f\d]{4}){3}-[a-f\d]{12}$/i.test(post.id) && typeof post.title === 'string'
      ).map(post => ({
        title: post.title,
        href: new URL('./blog-article.html?' + new URLSearchParams({ post: post.id }), import.meta.url).href,
        paragraphs: [post.summary, ...paragraphs(typeof post.body === 'string' ? post.body : '')].filter(Boolean)
      }));
    }).catch(() => { postsPromise = undefined; return []; });
  const [library, posts, developer] = await Promise.all([libraryPromise, postsPromise, developerPromise]);
  const articles = Object.entries(library).flatMap(([id, course]) => (course.articles ?? []).map((post, index) => ({
    title: post.title,
    href: new URL(courseUrl(id, 'article') + '#article-' + (index + 1), import.meta.url).href,
    paragraphs: post.paragraphs ?? []
  })));
  return rankedPassages([...articles, ...posts, ...developer], question);
}
