# 1. Basic Controlled Input

In standard HTML, form elements like `<input>` usually manage their own value internally in the DOM.

For example, when a user types inside an input, the browser keeps track of that text by itself.

In React, we often want the component to control the input value instead. This is called a **Controlled Component**.

A **controlled component** is a form element whose value is controlled by React state.

That means the React state becomes the **single source of truth**.

```jsx
const [name, setName] = useState("");
```

Here, `name` stores the current value of the input.

To create a controlled input, we usually need two things:

1. The `value` attribute
   This connects the input value to a React state variable.

```jsx
value={name}
```

2. The `onChange` event handler
   This updates the state every time the user types.

```jsx
onChange={(event) => setName(event.target.value)}
```

So the full input looks like this:

```jsx
<input
  type="text"
  value={name}
  onChange={(event) => setName(event.target.value)}
/>
```

Now React controls what appears inside the input.

The flow is:

```txt
User types
   ↓
onChange runs
   ↓
React state updates
   ↓
Input shows the new state value
```

Because the input value is stored in React state, we can easily use it anywhere in the component.

For example, we can display it immediately:

```jsx
<p>Hello, {name}</p>
```

So, a controlled input is useful when you want React to track, display, validate, reset, or submit form data in a predictable way.
