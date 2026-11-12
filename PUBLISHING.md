# Publishing on Fivey

Make updates in the GitHub repository while signed in as an owner or collaborator. Commit them to `main`. GitHub Pages will publish the changes.

## Upload a study guide

1. On the repository's **Code** tab, select **Add file → Upload files**, choose your PDF, and commit the upload. Use a simple file name such as `ap-biology-unit-1.pdf`.
2. Open [library.json](library.json), click the pencil icon, and find the course. Add an entry between the square brackets after `"guides"`.

```json
{ "title": "AP Biology Unit 1 Review", "url": "./ap-biology-unit-1.pdf" }
```

Separate multiple entries with commas. You can also use a full HTTPS link to a guide hosted elsewhere if readers have access.

## Post an article

1. Edit [library.json](library.json) and find the course.
2. Add a title and one quoted string per paragraph between the square brackets after `"articles"`. Separate paragraphs and multiple articles with commas.

```json
{
  "title": "How I Studied for AP Biology",
  "paragraphs": [
    "Write your opening paragraph here.",
    "Describe the routines and practice that helped you."
  ]
}
```

3. Commit the edit. After Pages publishes it, open the course and click the article title to read it.

The course keys are `biology`, `chemistry`, `physics-1`, `psychology`, `calculus-ab`, `macroeconomics`, and `environmental-science`. If your text contains a double quote, escape it as `\"`. Guides and articles committed to this public repository can be read by anyone.
