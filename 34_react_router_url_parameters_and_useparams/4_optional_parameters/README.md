# 4. Optional Parameters

Sometimes a URL parameter isn't strictly required.

For example, imagine a documentation website that translates its pages.
- `/docs/es/getting-started` (Spanish)
- `/docs/fr/getting-started` (French)
- `/docs/getting-started` (Defaults to English)

We *could* write two separate routes for this:

```jsx
{/* One route for missing language */}
<Route path="/docs/:pageId" element={<Docs />} />

{/* Another route for included language */}
<Route path="/docs/:lang/:pageId" element={<Docs />} />
```

This works, but it's redundant. React Router v6 provides a much cleaner solution: **Optional Parameters**.

---

## The Syntax

To make a URL parameter optional, add a question mark `?` to the end of the parameter name in the `path`.

```jsx
<Route path="/docs/:lang?/:pageId" element={<Docs />} />
```

Now, this single route will successfully match both `/docs/getting-started` AND `/docs/es/getting-started`.

---

## Handling Undefined

If the user navigates to the URL *without* the optional parameter, `useParams()` will still return an object, but the missing key will be `undefined`.

```jsx
function Docs() {
  const { lang, pageId } = useParams();

  // If user is at "/docs/getting-started"
  console.log(lang);   // undefined
  console.log(pageId); // "getting-started"

  // Standard practice: provide a fallback default
  const activeLanguage = lang || "en";

  return <h1>Reading {pageId} in {activeLanguage}</h1>;
}
```

By providing a JavaScript fallback (`|| "en"`), your component gracefully handles the optional parameter without crashing or displaying weird empty spaces in the UI.
