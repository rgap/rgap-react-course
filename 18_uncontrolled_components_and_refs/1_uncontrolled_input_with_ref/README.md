# 1. Uncontrolled Components with `useRef`

In the previous module, we learned about **Controlled Components**, where React state is the single source of truth (`value` + `onChange`).

Alternatively, you can use **Uncontrolled Components**. In an uncontrolled component, the browser's DOM handles the form data naturally, just like traditional HTML. React doesn't automatically track what the user is typing.

But if React doesn't track what the user is typing, how do we get the text out of the input when the user clicks a button?

To safely read the value of an uncontrolled component in React, we use a **Ref** via the `useRef` hook.

A Ref acts as a direct bridge or pipeline to the actual HTML element.

To create an uncontrolled input, we usually follow three steps:

1. Create a ref object
   This creates a small container to hold the DOM element.

```jsx
const inputRef = useRef(null);
```

2. Connect the ref to the input
   We use the special `ref` attribute so React knows which element to put in the container.

```jsx
<input ref={inputRef} type="text" />
```

3. Read the value directly from the DOM
   When needed (like on a button click), we can look inside the container (`current`) and grab the DOM element's value.

```jsx
function handleClick() {
  alert(inputRef.current.value);
}
```

The flow is:

```txt
User types
   ↓
Browser updates the input element directly (React does nothing)
   ↓
Button clicked
   ↓
React looks at inputRef.current (the DOM element)
   ↓
React reads inputRef.current.value
```

Because the input value is managed by the browser's DOM rather than React state, the component does **not** re-render every time the user types! This is why it's called an "uncontrolled" component.


## Controlled vs Uncontrolled

Now that you know both ways to handle forms, which one should you use?

### Use Controlled Components (Recommended)

You should use **Controlled Components** 95% of the time. 

* They allow instant validation (e.g., disabling a submit button if the email is invalid).
* They allow conditional rendering based on input (e.g., showing a live character count).
* They allow enforcing input formats (e.g., forcing uppercase letters as the user types).

### Use Uncontrolled Components

You should use **Uncontrolled Components** when:

* You are interacting with `<input type="file">`.
* You are integrating React with a non-React library (like a legacy jQuery plugin or a vanilla JS map rendering library) that expects to manipulate the DOM directly.
* You have a massive form where updating state and re-rendering the component on *every single keystroke* causes performance issues.
