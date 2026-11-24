const cheatsheetResources = {
  biology: {
    title: 'AP Biology Quick Review Notes',
    googleDoc: 'https://docs.google.com/document/d/14w1dgW13poVhaWKMHBkG7wpN9p16jnjn0Yo1EokiG-A/edit?usp=sharing',
    pdf: './ap-biology-cheatsheet.pdf',
    notes: { url: './biology-cheatsheet-notes.html?v=3', panelCount: 9, initialUnit: '2' },
  },
  chemistry: {
    title: 'AP Chemistry Quick Review Notes',
    googleDoc: 'https://docs.google.com/document/d/1bwzhE7XlEAXK11_nU6kJwHHd5xDCE4n_RnEuCuGD0-4/edit?usp=sharing',
    pdf: './ap-chemistry-cheatsheet.pdf',
    notes: { url: './chemistry-cheatsheet-notes.html?v=2', panelCount: 10, initialUnit: '1' },
  },
  'environmental-science': { title: 'AP Environmental Science Quick Review Notes' },
  'physics-1': { title: 'AP Physics 1 Quick Review Notes' },
  psychology: { title: 'AP Psychology Quick Review Notes' },
  'calculus-ab': { title: 'AP Calculus AB Quick Review Notes' },
  macroeconomics: { title: 'AP Macroeconomics Quick Review Notes' },
};

function getCheatsheetResource(course) {
  return Object.hasOwn(cheatsheetResources, course) ? cheatsheetResources[course] : null;
}
