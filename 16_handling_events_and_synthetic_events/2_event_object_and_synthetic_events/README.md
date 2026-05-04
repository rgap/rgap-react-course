# 2. The Event Object and Synthetic Events

When an event happens in React, such as a click, typing in an input, submitting a form, or hovering over an element, React automatically sends an **event object** to the event handler function.

The **event object** contains information about what happened.

For example:

```jsx
function App() {
  function handleClick(event) {
    console.log(event);
    console.log(event.target);
  }

  return <button onClick={handleClick}>Click me</button>;
}

export default App;
```

In this example, `event` is the **event object** React gives to `handleClick`.

It contains useful information such as:

```jsx
event.target
```

The element that caused the event.

```jsx
event.type
```

The type of event, such as `"click"`.

```jsx
event.preventDefault()
```

A method used to stop the browser’s default behavior.

For example, in a form:

```jsx
function App() {
  function handleSubmit(event) {
    event.preventDefault();

    console.log("Form submitted without refreshing the page");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
```

By default, submitting a form refreshes the page. `event.preventDefault()` prevents that default behavior.



## What is a SyntheticEvent?

The event object in React is actually not the same as the event listener `event` object in regular JavaScript.

In regular browser JavaScript, events come from the browser directly. These are called **native DOM events**, for example a `click` event created when the user clicks a button, an `input` event created when the user types in a text field, or a `submit` event created when the user submits a form.

For example, in plain JavaScript:

```js
const button = document.querySelector("button");

button.addEventListener("click", function (event) {
  console.log(event);
});
```

In this case, `event` is a **native DOM event** because it comes directly from the browser’s DOM event system.

However, React does not usually give your handler the raw browser event directly. Instead, React gives you a **React event object**, also called a **SyntheticEvent**. React’s documentation says event handlers receive a React event object, sometimes known as a synthetic event, which follows the same standard as DOM events while fixing browser inconsistencies. ([React][1])

So this:

```jsx
function handleClick(event) {
  console.log(event);
}
```

is usually receiving a **SyntheticEvent**, not a raw native browser event.

A **SyntheticEvent** is React’s wrapper around the real browser event.

Think of it like this:

```txt
Browser Native Event
        ↓
React wraps it
        ↓
SyntheticEvent
        ↓
Your event handler receives it
```

The advantage is that React gives you a consistent event object across browsers.

So you can write:

```jsx
event.target
event.preventDefault()
event.stopPropagation()
```

without worrying too much about browser differences.

React also lets you access the original browser event through:

```jsx
event.nativeEvent
```

Example:

```jsx
function App() {
  function handleClick(event) {
    console.log("React SyntheticEvent:", event);
    console.log("Original browser event:", event.nativeEvent);
  }

  return <button onClick={handleClick}>Click me</button>;
}

export default App;
```

## Simple difference

| Concept             | Meaning                                                                  |
| ------------------- | ------------------------------------------------------------------------ |
| Event object        | The object passed to your event handler with information about the event |
| Native event        | The original browser event created by the DOM                            |
| SyntheticEvent      | React’s wrapper around the native event                                  |
| `event.nativeEvent` | Access to the original browser event                                     |

So, in React, when people say:

```jsx
function handleClick(e) {
  console.log(e);
}
```

`e` is the **event object**, and more specifically, it is usually a **React SyntheticEvent**.

Tiny React goblin note 🧪: `e` is just a variable name. You could call it `event`, `banana`, or `clickInfo`, but `e` and `event` are the common names.

[1]: https://react.dev/reference/react-dom/components/common?utm_source=chatgpt.com "Common components (e.g. <div>)"
