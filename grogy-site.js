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
const stops = new Set('a an and ap are as can do does did for from get how i in is it me my much many of on or so that the their there this to use want was what when where why which who will with you your'.split(' '));
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
let sitePagesPromise;
let postsPromise;
const notePromises = new Map();
const noteFiles = {
  biology: './biology-cheatsheet-notes.html?v=4',
  chemistry: './chemistry-cheatsheet-notes.html?v=3',
  'physics-1': './physics-1-review-notes.html?v=2',
  'calculus-ab': './calculus-ab-review-notes.html?v=1',
  macroeconomics: './macroeconomics-review-notes.html?v=1'
};
const formatted = 'FIVEY:FORMATTED:1\n';
const sourceWords = new Set('article articles blog cite could define developer does explain find fivey give help kayden meaning notes please quote quick reference review say simple source sources study tell topic unit using'.split(' '));
const inflected = word => word.length > 4
  ? word.replace(/(?:ies|s)$/, ending => ending === 'ies' ? 'y' : '').replace(/^bonding$/, 'bond')
  : word;
const terms = value => words(value).filter(word => !sourceWords.has(word)).map(inflected);
const cleanText = text => text.trim().replace(/\s+/g, ' ');
const sentenceSplitter = typeof Intl.Segmenter === 'function' ? new Intl.Segmenter('en', { granularity: 'sentence' }) : null;

function sentences(text) {
  const clean = cleanText(text);
  return sentenceSplitter ? Array.from(sentenceSplitter.segment(clean), part => part.segment.trim()) :
    clean.split(/(?<=[.!?])\s+(?=[A-Z])/);
}

function shorten(text, max = 205) {
  if (text.length <= max) return text;
  const end = text.lastIndexOf(' ', max - 1);
  return text.slice(0, end > max / 2 ? end : max - 1).trimEnd() + '…';
}

export function briefExcerpt(text) {
  return shorten(sentences(text ?? '')[0] ?? '');
}

async function readPage(file, format = 'text') {
  const response = await fetch(new URL(file, import.meta.url), { signal: AbortSignal.timeout(4500) });
  if (!response.ok) throw new Error('Source unavailable');
  return format === 'json' ? response.json() : response.text();
}

function publishedParagraphs(body) {
  if (!body.startsWith(formatted)) return body.split(/\n+/);
  const template = document.createElement('template');
  template.innerHTML = body.slice(formatted.length);
  for (const element of template.content.querySelectorAll('script,style,template,iframe,object')) element.remove();
  const blocks = Array.from(template.content.querySelectorAll('p,div,li'), element => element.textContent);
  return blocks.length ? blocks : [template.content.textContent];
}

function rank(documents, question) {
  const sequence = terms(question);
  const query = new Set(sequence);
  if (!query.size) return [];
  const phrase = sequence.join(' ');
  const results = [];
  for (const doc of documents) {
    const heading = terms(doc.title).join(' ');
    const titleWords = new Set(heading.split(' '));
    const rowWords = new Set(terms(doc.label ?? ''));
    const rowHits = [...query].filter(word => rowWords.has(word)).length;
    const titleHits = [...query].filter(word => titleWords.has(word)).length;
    const titlePhrase = query.size > 1 && (' ' + heading + ' ').includes(' ' + phrase + ' ');
    for (const passage of doc.paragraphs) {
      for (const sentence of sentences(passage)) {
        if (sentence.length < 18) continue;
        const passageText = terms(sentence).join(' ');
        const sentenceWords = new Set(passageText.split(' '));
        const phraseHit = query.size > 1 && (' ' + passageText + ' ').includes(' ' + phrase + ' ');
        const hits = [...query].filter(word => sentenceWords.has(word)).length;
        const coverage = [...query].filter(word => titleWords.has(word) || sentenceWords.has(word)).length;
        if (coverage < Math.min(query.size, Math.max(2, Math.ceil(query.size * .4)))) continue;
        if (!hits && !titlePhrase) continue;
        if (!phraseHit && !titlePhrase && hits < 2 && query.size > 1 && titleHits === 0) continue;
        const score = coverage / query.size * 8 + hits * 3 + titleHits * 1.5 + rowHits * 5 + (phraseHit ? 7 : 0) + (titlePhrase ? 5 : 0);
        results.push({ title: doc.title, href: doc.href, excerpt: shorten(sentence), score });
      }
    }
  }
  const seen = new Set();
  return results.sort((a, b) => b.score - a.score).filter(result => {
    if (seen.has(result.excerpt) || result.score < (results[0]?.score ?? 0) * .78) return false;
    seen.add(result.excerpt);
    return true;
  }).slice(0, 2);
}

function readSections(file, ids) {
  return readPage(file).then(html => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return ids.flatMap(id => {
      const heading = doc.getElementById(id);
      const area = heading?.closest('section');
      if (!area) return [];
      return [{ title: heading.textContent, href: new URL(file + '#' + id, import.meta.url).href,
        paragraphs: Array.from(area.querySelectorAll('p,li'), item => cleanText(item.textContent)) }];
    });
  }).catch(() => []);
}

function loadNotes(course) {
  if (!notePromises.has(course)) {
    notePromises.set(course, readPage(noteFiles[course]).then(html => {
      const template = document.createElement('template');
      template.innerHTML = html;
      return Array.from(template.content.querySelectorAll('article[data-unit]')).flatMap(unit => {
        const label = unit.querySelector('h3')?.textContent;
        if (!label || !/^\d+$/.test(unit.dataset.unit)) return [];
        const href = new URL(courseUrl(course, 'cheatsheet') + '&unit=' + unit.dataset.unit, import.meta.url).href;
        return Array.from(unit.querySelectorAll('section.biology-topic')).flatMap(topic => {
          const heading = topic.querySelector('h4')?.textContent ?? label;
          const title = courseNames[course] + ' · ' + heading;
          return Array.from(topic.querySelectorAll('p,li,td')).flatMap(item => {
            if (item.matches('td') && item.querySelector('p,li')) return [];
            const text = cleanText(item.textContent);
            if (!text) return [];
            const label = item.closest('tr')?.querySelector('th[scope="row"]')?.textContent;
            return [{ title, href, label, paragraphs: [text] }];
          });
        });
      });
    }).catch(() => { notePromises.delete(course); return []; }));
  }
  return notePromises.get(course);
}

async function exactPracticeSource(question, courses) {
  const normalized = normalize(question).replace(/^(?:(?:what is|whats) the answer to|solve|explain|answer)\s+/, '');
  if (normalized.length < 30) return [];
  const { units, unitPool } = await import('./practice-units.js?v=10');
  for (const course of courses) {
    for (const [index, unit] of (units[course] ?? []).entries()) {
      const item = unitPool(course, index + 1).find(item => {
        const prompt = normalize(item.prompt);
        return prompt.length >= 30 && normalized.includes(prompt);
      });
      if (item) {
        const href = new URL('./practice.html?' + new URLSearchParams({ course, mode: 'unit', unit: index + 1 }), import.meta.url).href;
        return [{ title: courseNames[course] + ' · ' + unit + ' practice', href,
          excerpt: briefExcerpt(item.explanation) || shorten(item.choices[item.answer]) }];
      }
    }
  }
  return [];
}

export async function findSources(question, client, pageCourse) {
  const named = matchCourse(question);
  const focused = named.length === 1 ? named[0] : null;
  const sourceRequest = /\b(?:blog|article|developer|kayden|fivey)\b/i.test(question);
  const blogRequest = /\bblog\b/i.test(question);
  const priority = pageCourse && Object.hasOwn(noteFiles, pageCourse) ? [pageCourse] : [];
  const notes = focused ? Object.hasOwn(noteFiles, focused) ? [focused] : [] :
    [...priority, ...Object.keys(noteFiles).filter(course => !priority.includes(course))];
  if (!sourceRequest) {
    const localNotes = await Promise.all(notes.map(loadNotes));
    const hits = rank(localNotes.flat(), question);
    if (hits.length) return hits;
  }

  libraryPromise ??= readPage('./library.json', 'json').catch(() => { libraryPromise = undefined; return {}; });
  sitePagesPromise ??= Promise.all([
    readSections('./about.html', ['why-i-built', 'study-strategy']),
    readSections('./index.html', ['intro-title', 'what-youll-find', 'how-to-use'])
  ]).then(groups => groups.flat());
  postsPromise ??= client.rpc('fivey_blog_posts', { p_id: null }).abortSignal(AbortSignal.timeout(4500))
    .then(({ data, error }) => {
      if (error) throw error;
      return (Array.isArray(data) ? data : []).filter(post =>
        /^[a-f\d]{8}(?:-[a-f\d]{4}){3}-[a-f\d]{12}$/i.test(post.id) && typeof post.title === 'string'
      ).map(post => ({
        title: post.title,
        href: new URL('./blog-article.html?' + new URLSearchParams({ post: post.id }), import.meta.url).href,
        paragraphs: [post.summary, ...publishedParagraphs(typeof post.body === 'string' ? post.body : '')]
          .filter(paragraph => typeof paragraph === 'string' && paragraph.trim())
      }));
    }).catch(() => { postsPromise = undefined; return []; });
  const [library, posts, pages] = await Promise.all([libraryPromise, postsPromise, sitePagesPromise]);
  const articles = Object.entries(library).flatMap(([id, course]) => (course.articles ?? []).map((post, index) => ({
    title: post.title,
    href: new URL(courseUrl(id, 'article') + '#article-' + (index + 1), import.meta.url).href,
    paragraphs: post.paragraphs ?? []
  })));
  if (/^\s*(?:what is|what's|tell me about) fivey[?.!\s]*$/i.test(question)) {
    const intro = pages.find(page => page.href.endsWith('#what-youll-find'));
    if (intro?.paragraphs[0]) return [{ ...intro, excerpt: briefExcerpt(intro.paragraphs[0]) }];
  }
  const hits = rank(blogRequest ? posts : [...articles, ...posts, ...pages], question);
  if (hits.length || sourceRequest) return hits;

  const courses = focused ? [focused] : [...new Set([pageCourse, ...Object.keys(courseNames)].filter(Boolean))];
  return exactPracticeSource(question, courses);
}
