// Detailed, section-by-section summary of a blog article, built only from the article's own words so
// every point says exactly what the article says. Grogy uses it whenever the hosted model can't write
// the summary.
//
// The articles are written as headings ("December - March", "1. Make your own study guide"), topic
// lines (a bullet followed by a paragraph that explains it), plain bullet lists, facts
// ("Selective (25% - 50% Acceptance Rate): SAT 1350+") and paragraphs, ending with a "To wrap up"
// conclusion. The summary keeps that shape:
//   **Main idea:** <the article's conclusion, or the statements in its description>
//   **<Heading>**
//   • **<Topic>:** <the sentence that best explains it>
//   • <key sentence or list item>

const stopWords = new Set(('a an and are as at be but by can do for from has have how i if in into is it its just me my of on ' +
  'or our so than that the their them then there these they this to too up us was we were what when which while who will with ' +
  'you your about after all also any because been before being both did does each few get got had he her here him his more most ' +
  'much must no nor not now off once only other out over own same she should some such through under until very where why would ' +
  'make made like really one two three lot lots things thing way ways going im ive dont may might let lets say').split(' '));
const emphasis = /\b(?:important|importantly|always|never|must|key|remember|avoid|don[’']t|do not|should|recommend|prioritize|best|make sure)\b/i;
const listMarker = /^(?:[-•*–—]|\d+[.)])\s*/;
const numberMarker = /^\d+[.)]\s*/;
const closing = /^(?:to wrap (?:this |it )?up|in conclusion|to conclude|in summary|to sum up)\b[,:]?\s*/i;
// Sentences that only set up an example or a question, cite a source or sign off add nothing to a summary.
const filler = /^(?:you (?:may|might) (?:ask|wonder|notice)|wondering\b|let[’']?s say|let me|for instance|for example|here is|here are|visualize|disclaimer\b)|\b(?:in (?:the following|this) article|this article will)\b|\b(?:citation|doi\.org|https?:|wish you (?:the )?best|good luck|thanks? (?:you )?for reading)\b/i;
const abbreviation = /(?:\b(?:e\.g|i\.e|etc|vs|dr|mr|mrs|ms|st)|\b[A-Z])\.$/i;

function words(text) {
  return (text.toLowerCase().match(/[a-z][a-z'’]+/g) ?? [])
    .map(word => word.replace(/[’']/g, ''))
    .filter(word => word.length > 2 && !stopWords.has(word));
}

function shorten(text, limit) {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:(\s]+$/, '') + '…';
}

// Keeps a point short: drops asides in brackets and lead-ins like "Most importantly,", then cuts it
// at a word boundary.
function brief(text, limit) {
  const trimmed = text.replace(/\s*\([^()]*\)/g, '')
    .replace(/^(?:most importantly|in this case|of course|here|personally|optional|also),?:?\s+/i, '')
    .replace(/\s+([.,!?;:])/g, '$1').replace(/\s+/g, ' ').trim();
  return shorten(capitalize(trimmed || text), limit);
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

// Splits a paragraph into sentences without breaking on "e.g." or inside a quote that ends in "?".
function sentences(paragraph) {
  const pieces = paragraph.split(/(?<=[.!?][”"’')]*)\s+(?=[A-Z“"(\d])/);
  const result = [];
  for (const piece of pieces) {
    const previous = result.at(-1);
    if (previous && (abbreviation.test(previous) || /[“"][^”"]*$/.test(previous))) result[result.length - 1] += ' ' + piece;
    else result.push(piece);
  }
  return result.map(sentence => sentence.trim()).filter(Boolean);
}

function usable(sentence) {
  return sentence.length >= 25 && !sentence.endsWith('?') && !/^[a-z”"’)]/.test(sentence) && !filler.test(sentence);
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// A short line with no list marker that reads like a title: "December - March", "April:",
// "Writing or Typing? Backed by Research Findings."
function looksLikeHeading(line) {
  if (line.length > 50 || /:\s+\S/.test(line)) return false;
  const bare = line.replace(/:$/, '');
  if (!/[.!?]$/.test(bare)) return true;
  const all = bare.split(/\s+/);
  return all.length <= 9 && all.filter(word => /^[A-Z0-9]/.test(word)).length / all.length >= 0.6;
}

// Turns the article text into a list of typed blocks, skipping the title area and dividers.
function readBlocks(title, text) {
  let lines = text.split('\n')
    .map(line => line.replace(/(?:\s*[-–—_=~]){4,}\s*/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(line => line && !/^[-–—_=~*•.\s]+$/.test(line) && !/^\(?citation\b/i.test(line));
  // Everything up to the byline is the title area.
  const byline = lines.slice(0, 6).findIndex(line => /^written by\b/i.test(line));
  if (byline >= 0) lines = lines.slice(byline + 1);
  const titleText = normalize(title);
  lines = lines.filter(line => !(normalize(line).length >= 8 && titleText.includes(normalize(line))));

  const blocks = lines.map(raw => {
    const list = listMarker.test(raw);
    const line = raw.replace(listMarker, '').trim();
    if (/^important:?$/i.test(line)) return { kind: 'stress' };
    if (/:\s+\S/.test(line) && /\d/.test(line) && line.length <= 90 && !/[.!?]$/.test(line)) return { kind: 'fact', text: line };
    if (!list && looksLikeHeading(line)) return { kind: 'heading', text: line.replace(/:$/, '') };
    // A long line ending in ":" only introduces what follows ("Here is what I would do:").
    if (!list && line.endsWith(':')) return { kind: 'skip' };
    return { kind: list ? 'item' : 'para', text: line, numbered: numberMarker.test(raw) };
  }).filter(block => block.kind !== 'skip' && (block.kind === 'stress' || block.text.length >= 3));

  // A list line followed by a paragraph is a topic that the paragraph explains. A numbered one that
  // reads like a title ("1. Make your own study guide / revision notes") is a heading.
  blocks.forEach((block, index) => {
    const next = blocks[index + 1];
    if (block.kind !== 'item' || next?.kind !== 'para' || next.text.length < 60 || closing.test(next.text)) return;
    block.kind = block.numbered && block.text.length <= 60 && !/[.!]$/.test(block.text) ? 'heading' : 'topic';
  });
  return blocks;
}

// Groups the blocks into sections. Each section holds its topics (with their explanations), list
// items, facts and paragraph sentences, in reading order.
function readSections(blocks) {
  const sections = [];
  let section = null;
  let topic = null;
  let stressed = false;
  let order = 0;
  const open = heading => {
    // A heading right under another empty heading joins it ("September - December · Before starting").
    if (section && heading && !section.entries.length && section.heading) {
      section.heading += ' · ' + heading;
    } else {
      section = { heading, entries: [] };
      sections.push(section);
    }
    topic = null;
    stressed = false;
  };
  open('');
  let conclusion = '';
  for (const block of blocks) {
    if (block.kind === 'stress') {
      stressed = true;
      continue;
    }
    if (block.kind === 'heading') {
      open(block.text);
      continue;
    }
    if (block.kind === 'para' && closing.test(block.text)) {
      conclusion = block.text;
      break;
    }
    if (block.kind === 'topic') {
      topic = { kind: 'topic', text: block.text, detail: [], order: order++ };
      section.entries.push(topic);
      continue;
    }
    if (block.kind === 'para') {
      // Only the paragraph right under a topic explains it; later ones belong to the section.
      const target = topic && !topic.detail.length ? topic.detail : section.entries;
      sentences(block.text).forEach((sentence, position) => {
        if (usable(sentence)) target.push({ kind: 'sentence', text: sentence, first: position === 0, stressed, order: order++ });
      });
      if (topic?.detail.length) topic = null;
      continue;
    }
    // A list item or fact ends the topic above it.
    topic = null;
    if (block.kind === 'fact' || usable(block.text) || block.text.length >= 12) {
      const kept = block.kind === 'item' ? sentences(block.text).filter(sentence => !filler.test(sentence) && !/\?[”"’)]*$/.test(sentence))[0] ?? '' : '';
      section.entries.push({ kind: block.kind, text: capitalize(kept || block.text), stressed, order: order++ });
    }
  }
  return { sections: sections.filter(item => item.entries.length), conclusion };
}

// The statements in the post's own description, without its hook questions and calls to read on.
function fromDescription(overview) {
  const statements = sentences((overview ?? '').replace(/\s+/g, ' '))
    .filter(sentence => usable(sentence) && !/\b(?:this article|read on|find out)\b/i.test(sentence) && !/!$/.test(sentence));
  const text = statements.join(' ');
  return text.length >= 40 ? text : '';
}

// The article's own conclusion, without "To wrap up," and its sign-off.
function fromConclusion(paragraph) {
  const kept = sentences(paragraph.replace(closing, ''))
    .filter(sentence => sentence.length >= 25 && !filler.test(sentence) && !/^of course\b|mentioned above/i.test(sentence));
  if (!kept.length) return '';
  return capitalize(kept[0]);
}

// Returns the summary text, or '' if the article has too little text.
export function articleSummary(title, text, overview = '') {
  const { sections, conclusion } = readSections(readBlocks(title, text));
  const entries = sections.flatMap(section => section.entries);
  const everything = entries.flatMap(entry => [entry, ...(entry.detail ?? [])]);
  if (everything.length < 2) return '';

  // Words the article keeps coming back to mark its main ideas.
  const frequency = new Map();
  for (const { text: sentence } of everything) {
    for (const word of new Set(words(sentence))) frequency.set(word, (frequency.get(word) ?? 0) + 1);
  }
  const score = entry => {
    const terms = [...new Set(words(entry.text))];
    const weight = terms.reduce((sum, word) => sum + (frequency.get(word) ?? 0), 0) / Math.sqrt(Math.max(terms.length, 1));
    return weight - (/^(?:however|but|and|so)\b/i.test(entry.text) ? 4 : 0) + (entry.stressed ? 3 : 0) + (emphasis.test(entry.text) ? 2 : 0) + (entry.first ? 2 : 0);
  };
  const best = (list, count) => [...list].sort((a, b) => score(b) - score(a)).slice(0, count).sort((a, b) => a.order - b.order);

  const titled = sections.some(section => section.heading);
  const lines = [];
  const idea = conclusion ? fromConclusion(conclusion) : '';
  const mainIdea = idea || fromDescription(overview);
  if (mainIdea) lines.push('**Main idea:** ' + brief(mainIdea, 200));

  for (const section of sections) {
    const topics = section.entries.filter(entry => entry.kind === 'topic');
    const facts = section.entries.filter(entry => entry.kind === 'fact');
    const items = section.entries.filter(entry => entry.kind === 'item');
    const prose = section.entries.filter(entry => entry.kind === 'sentence');
    // Topics and list items carry a titled section, so its paragraphs add one sentence; otherwise two.
    // An article without headings is one section, so it keeps three.
    const proseCount = !section.heading && !titled ? 3 : topics.length || items.length ? 1 : 2;
    const picked = [...topics, ...facts, ...best(items, 3), ...best(prose, proseCount)]
      .sort((a, b) => a.order - b.order);
    if (!picked.length) continue;
    lines.push('', '**' + shorten(section.heading || (titled ? 'Overview' : 'Key points'), 120) + '**');
    for (const entry of picked) {
      if (entry.kind === 'topic') {
        // A long topic line already says enough on its own.
        const label = brief(entry.text, 120).replace(/[.:]$/, '');
        const [explanation] = label.length < 80 ? best(entry.detail, 1) : [];
        lines.push('• **' + label + (explanation ? ':** ' + brief(explanation.text, 140) : '**'));
      } else {
        lines.push('• ' + (entry.kind === 'fact' ? shorten(entry.text, 120) : brief(entry.text, 150)));
      }
    }
  }
  return lines.join('\n').trim();
}
