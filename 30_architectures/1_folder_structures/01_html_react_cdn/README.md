# 01 — React in Plain HTML (CDN Setup)

## 🧠 Theory

This is the most basic and entry-level way to run React. Instead of using **npm**, build tools, or a bundler, you include React directly from a CDN (Content Delivery Network). Ideal for quick demos and first-time exploration.

### 📜 Other Common Names

- No-build setup
- CDN-only React
- Vanilla React
- Playground setup

### 📌 Description

You load `react` and `react-dom` with plain `<script>` tags and write JSX inside a
`<script type="text/babel">` block. Babel (also pulled from a CDN) transpiles JSX right in the browser.

### ✅ When to Use

- Learning React and want to experiment.
- Prototyping an idea without any tooling.
- Teaching React basics in workshops.
- Building lightweight demos on CodePen, JSFiddle, etc.

### ⚠️ Limitations

- **Not** intended for production.
- No module system or bundler.
- JSX compiled in-browser → slower runtime performance.

---

## 🕰️ Historical Context

- **2013** – React’s first public release shipped as two UMD files (`react.js`, `react-dom.js`). Early tutorials simply linked these scripts in an HTML page.
- **2014** – Babel’s browser-ready build (“babel-standalone”) popularized inline JSX via `<script type="text/babel">`. This combo powered countless CodePen and JSBin examples.
- **2016** – _Create React App_ introduced zero-config builds with ES modules and bundling, making CDN setups mostly a teaching / prototyping pattern.

---

## 📁 Folder Structure

```
01_react_in_plain_html/
├── README.md            # This file
└── example/
    └── index.html       # React via CDN demo
```

---

## 🔗 CDN Links Used

```html
<!-- React and ReactDOM -->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- Babel compiler for JSX in the browser -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

---

## ▶️ Run It

Open `example/index.html` in any modern browser—no `npm` or dev server required.

---

## 📚 References

- [React – CDN Links](https://react.dev/learn/add-react-to-an-existing-project#using-react-via-a-cdn)
- [Babel Standalone](https://babeljs.io/docs/babel-standalone)
