const cheatsheetResources = {
  biology: {
    title: 'AP Biology Cheatsheet',
    googleDoc: 'https://docs.google.com/document/d/14w1dgW13poVhaWKMHBkG7wpN9p16jnjn0Yo1EokiG-A/edit?usp=sharing',
    pdf: './ap-biology-cheatsheet.pdf',
    notes: { url: './biology-cheatsheet-notes.html?v=2', panelCount: 9, initialUnit: '2' },
  },
  chemistry: {
    title: 'AP Chemistry Cheatsheet',
    googleDoc: 'https://docs.google.com/document/d/1bwzhE7XlEAXK11_nU6kJwHHd5xDCE4n_RnEuCuGD0-4/edit?usp=sharing',
    pdf: './ap-chemistry-cheatsheet.pdf',
    notes: { url: './chemistry-cheatsheet-notes.html?v=1', panelCount: 10, initialUnit: '1' },
  },
};

function getCheatsheetResource(course) {
  return Object.hasOwn(cheatsheetResources, course) ? cheatsheetResources[course] : null;
}
