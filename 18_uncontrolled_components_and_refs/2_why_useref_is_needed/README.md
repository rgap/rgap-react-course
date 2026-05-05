# 2. Why `useRef` is Needed

In the previous example, we used `useRef` to safely get the value of an uncontrolled input.

A beginner might ask: *"Why can't I just give the input an `id` and use standard vanilla JS like `document.getElementById('my-input').value`?"*

While this **technically works**, it is considered a massive **anti-pattern** in React for several reasons:

1. **Breaks the Virtual DOM**: React relies on a "Virtual DOM" to manage the UI efficiently. By using `document.getElementById()`, you are bypassing React entirely and digging directly into the Real DOM.

2. **Breaks Reusability**: If you render this component twice on the same page, you will now have two elements with the exact same `id`. This breaks your HTML validation and your JavaScript query (it will only ever find the first one!).

3. **Fragility**: If the element isn't currently rendered (e.g., hidden behind an `if` statement), `document.getElementById()` will return `null` and instantly crash your app.

### The React Solution

React knows that sometimes you *must* access the Real DOM. 

This is exactly why `useRef` exists. It allows you to "tag" a specific element and access its exact underlying DOM node safely, without ever needing global IDs or manual DOM queries!
