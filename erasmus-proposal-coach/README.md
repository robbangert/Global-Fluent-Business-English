# Erasmus+ Proposal Coach

A standalone browser-based MVP for the app described in `/Users/robbangert/Desktop/Europa/2026/Erasmus App.docx`.

## What it does

- Focuses on `KA152 Youth Exchange` applications.
- Includes example presets for `KA152`, `KA153`, and `KA210`.
- Includes example presets for `KA152`, `KA153`, `KA210`, and `KA220`.
- Guides the user through a structured Erasmus+ questionnaire.
- Supports a one-hour sprint workflow for fast first drafts.
- Stores multiple named projects locally in the browser.
- Includes a local institution-workspace layer with role context, application status, and coach review tracking.
- Lets the user manage partner organisations individually, including delete actions.
- Generates editable draft text for the main application sections.
- Can call the OpenAI `Responses API` from the browser to write the draft text when the user provides an API key.
- Scores proposal strength across relevance, design, partnership, and impact.
- Runs a quality checklist and a consistency checker.
- Includes a finance helper with budget categories, total snapshot, and budget narrative drafting.
- Builds a simple activity programme and reusable planning templates.
- Exports the result as a Word-friendly `.doc` file or printable PDF.

## How to open it

Open `/Users/robbangert/Desktop/Europa/2026/erasmus-proposal-coach/index.html` in a browser.

## Notes

- The app stores the working draft and saved projects in browser `localStorage`.
- The current business-mode features are local only: workspace identity, application workflow, and coach notes are saved in this browser and are not yet cloud-shared.
- This app is intentionally local and self-contained. Without an API key it uses built-in drafting logic; with an API key it can call OpenAI directly from the browser.
- The API key is not stored by the app.
- The example projects are fictional but realistic drafting samples, created to help structure applications quickly.
- The generated text is meant to be reviewed and edited by the applicant before submission.
