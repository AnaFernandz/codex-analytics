# GenAI QA Testing Guide

A static, responsive website containing the complete GenAI QA handbook, a searchable table of contents, practical evaluation guidance, and a worked RAG example.

## Preview locally

Open `index.html` in a browser. The page has no build step, external libraries, or server requirement.

## Publish with GitHub Pages

1. Put the contents of this folder at the root of a GitHub repository, or publish this folder as the repository's Pages source.
2. Push the files to GitHub.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select the branch you pushed (commonly `main`) and the `/ (root)` folder, then save.
5. Wait for the Pages deployment to finish and open the URL shown in the Pages settings.

GitHub Pages serves the static `index.html`; no Node.js runtime is required for hosting. `app.js` adds the searchable navigation, and `styles.css` contains responsive styling.

## Files

- `index.html` — complete guide page and worked internal-policy-assistant example.
- `styles.css` — responsive layout, accessible focus states, tables, and print styles.
- `app.js` — table-of-contents generation and section search.
- `GenAI_QA_Testing_Guide.js` — Node.js module containing the guide as Markdown; run it with `node GenAI_QA_Testing_Guide.js` to print the text.

The guide references NIST, OWASP, and ISO materials in its final section. Review applicable requirements and update references before using the guide as an organizational policy.
