# 4. preventDefault and stopPropagation

Because React uses Synthetic Events, you have access to the exact same event methods you are used to in vanilla JavaScript.

### `e.preventDefault()`
Some browser events have default behaviors. The most common is the `<form>` submission event, which by default will refresh the entire page. Calling `e.preventDefault()` stops the default browser behavior, allowing React to handle the logic completely in JavaScript.

### `e.stopPropagation()`
Events in the DOM "bubble" up from the child element that triggered them through all their parent elements. If you have an `onClick` on a parent `<div>` and an `onClick` on a child `<button>`, clicking the button will fire *both* handlers! Calling `e.stopPropagation()` inside the button's handler prevents the event from reaching the parent's handler.
