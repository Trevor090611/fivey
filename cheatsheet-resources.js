const cheatsheetResources = {
  biology: {
    title: 'AP Biology Quick Review Notes',
    googleDoc: 'https://docs.google.com/document/d/1Tp8IBgVbi3AhbmUELR_DdobcrVE8dvTAh6vboGG8kgI/edit',
    pdf: './ap-biology-quick-review-notes.pdf?v=20261126',
    notes: { url: './biology-cheatsheet-notes.html?v=points1', panelCount: 9, initialUnit: '2' },
  },
  chemistry: {
    title: 'AP Chemistry Quick Review Notes',
    googleDoc: 'https://docs.google.com/document/d/1TBlPWxo_Y1UuYptR49cmcw51Zc6GKzLsiz73FbK7-_8/edit',
    pdf: './ap-chemistry-quick-review-notes.pdf?v=20261126',
    notes: { url: './chemistry-cheatsheet-notes.html?v=points1', panelCount: 10, initialUnit: '1' },
  },
  'environmental-science': {
    title: 'AP Environmental Science Quick Review Notes',
    googleDoc: 'https://docs.google.com/document/d/145KoUfKnLiq64howx1bwwH8FxWWY5tLIw5WuW2wlRTo/edit',
    pdf: './ap-environmental-science-quick-review-notes.pdf?v=20261126',
    notes: { url: './environmental-science-review-notes.html?v=2', panelCount: 10, initialUnit: '1' },
  },
  'physics-1': {
    title: 'AP Physics 1 Quick Review Notes',
    googleDoc: 'https://docs.google.com/document/d/1FG6O0JxAbwTueB9qZFJj_pAaLEzo9_jP2Qz4zGJohZw/edit',
    pdf: './ap-physics-1-quick-review-notes.pdf?v=20261126',
    notes: { url: './physics-1-review-notes.html?v=points1', panelCount: 9, initialUnit: '1' },
  },
  psychology: { title: 'AP Psychology Quick Review Notes' },
  'calculus-ab': {
    title: 'AP Calculus AB Quick Review Notes',
    googleDoc: 'https://docs.google.com/document/d/1erBfj6a92MiwVltYr2Huy-SMoxNHBCngqQK9SY_lSaI/edit',
    pdf: './ap-calculus-ab-quick-review-notes.pdf?v=20261126',
    notes: { url: './calculus-ab-review-notes.html?v=points1', panelCount: 10, initialUnit: '1' },
  },
  macroeconomics: {
    title: 'AP Macroeconomics Quick Review Notes',
    googleDoc: 'https://docs.google.com/document/d/1s_6rpJ89y9kgQZvJJtrtjLabE6cOz2VoO1EerdI8kAg/edit',
    pdf: './ap-macroeconomics-quick-review-notes.pdf?v=20261126',
    notes: { url: './macroeconomics-review-notes.html?v=points1', panelCount: 7, initialUnit: '1' },
  },
};

function getCheatsheetResource(course) {
  return Object.hasOwn(cheatsheetResources, course) ? cheatsheetResources[course] : null;
}
