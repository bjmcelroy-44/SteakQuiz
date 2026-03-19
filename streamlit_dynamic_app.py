from __future__ import annotations

from pathlib import Path
import re

import streamlit as st
import streamlit.components.v1 as components


APP_DIR = Path(__file__).parent
INDEX_PATH = APP_DIR / "dynamic_quiz.html"
CSS_PATH = APP_DIR / "styles.css"
JS_PATH = APP_DIR / "dynamic_quiz.js"
STREAMLIT_SHELL_CSS = """
<style>
html, body, .stApp, [data-testid="stAppViewContainer"], [data-testid="stMain"] {
    background: #f5f5f7;
}

[data-testid="stHeader"],
[data-testid="stToolbar"],
[data-testid="stDecoration"],
[data-testid="stStatusWidget"],
#MainMenu,
footer {
    display: none !important;
}

[data-testid="stAppViewContainer"] > .main {
    padding-top: 0;
}

.block-container {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    max-width: none !important;
}

iframe[title="streamlit-component"] {
    border: 0;
    background: transparent;
}
</style>
"""


def build_embedded_app() -> str:
    html = INDEX_PATH.read_text(encoding="utf-8")
    css = CSS_PATH.read_text(encoding="utf-8")
    js = JS_PATH.read_text(encoding="utf-8")

    html = re.sub(
        r'<link[^>]*href="styles\.css"[^>]*>',
        f"<style>{css}</style>",
        html,
        count=1,
    )
    html = re.sub(
        r'<script[^>]*src="dynamic_quiz\.js"[^>]*></script>',
        f"<script>{js}</script>",
        html,
        count=1,
    )

    return html


st.set_page_config(page_title="Beef Cut Fit Analyzer Dynamic", layout="wide")

st.markdown(STREAMLIT_SHELL_CSS, unsafe_allow_html=True)

components.html(build_embedded_app(), height=3200, scrolling=True)
