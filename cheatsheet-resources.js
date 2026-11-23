const cheatsheetResources = {
  biology: {
    title: 'AP Biology Cheatsheet',
    googleDoc: 'https://docs.google.com/document/d/14w1dgW13poVhaWKMHBkG7wpN9p16jnjn0Yo1EokiG-A/edit?usp=sharing',
    pdf: './ap-biology-cheatsheet.pdf',
  },
};

function getCheatsheetResource(course) {
  return Object.hasOwn(cheatsheetResources, course) ? cheatsheetResources[course] : null;
}
