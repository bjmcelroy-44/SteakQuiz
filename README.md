# Beef Cut Fit Analyzer

A browser app that asks 22 rapid preference + culinary questions and returns:

- One clear top cut recommendation
- Fit brief
- Why this works
- Cooking profile
- Level-based alternatives (Levels 1-4)
- Cooking tips and tricks

## Run locally in browser

```bash
cd "/Users/bobbymcelroy/Documents/Steak Personality Test"
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Sandbox mode (safe testing)

Use the sandbox build to test scoring logic changes without impacting the live app page or its stored question history.

- Live app: `http://localhost:8000/index.html`
- Sandbox app: `http://localhost:8000/sandbox.html`
- Compare mode (same answers, dual output): `http://localhost:8000/compare.html`

Sandbox storage keys are isolated from live:

- `beef_cut_fit_sandbox_question_history_v1`
- `beef_cut_fit_sandbox_last_set_v1`

## Run via Streamlit

`streamlit_app.py` now embeds compare mode (`compare.html` + `styles.css` + `proposed_priority_matrix.js` + `compare_app.js`), so your deployed Streamlit app will publish the live-vs-proposed comparison experience.

`streamlit_dynamic_app.py` embeds the adaptive prototype (`dynamic_quiz.html` + `styles.css` + `dynamic_quiz.js`) if you want Streamlit to publish the dynamic questionnaire instead.

```bash
cd "/Users/bobbymcelroy/Documents/Steak Personality Test"
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
streamlit run streamlit_app.py
```

To run the dynamic prototype instead:

```bash
streamlit run streamlit_dynamic_app.py
```

## Streamlit Cloud

Push the repo to GitHub, then create a Streamlit app and choose the entry file that matches the experience you want:

- `streamlit_app.py` - Compare mode deployment
- `streamlit_dynamic_app.py` - Dynamic quiz deployment

If you want the dynamic quiz to be the public app, set the Main file path in Streamlit Cloud to:

```text
streamlit_dynamic_app.py
```

## Core files

- `index.html` - App structure and output sections
- `styles.css` - Visual styling
- `app.js` - Questions, scoring, ranking, and rendering logic
- `sandbox.html` - Isolated sandbox page for logic testing
- `sandbox_app.js` - Isolated app logic clone for sandbox experiments
- `compare.html` - Side-by-side live vs proposed comparison page
- `compare_app.js` - Compare-mode app logic
- `proposed_priority_matrix.js` - Proposed ranking matrix consumed by compare mode
- `streamlit_app.py` - Streamlit wrapper that inlines the browser app assets
- `streamlit_dynamic_app.py` - Streamlit wrapper for the dynamic quiz prototype
