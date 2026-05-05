# 3. The File Input

In HTML, an `<input type="file">` lets the user choose one or more files from their device.

In React, this input is different from other form elements.

Most form elements can be either **controlled** or **uncontrolled**, for example:

```jsx
<input type="text" />
<textarea />
<select />
<input type="checkbox" />
<input type="radio" />
```

These elements can use React state, or they can let the DOM manage their value.

However, a file input is special:

```jsx
<input type="file" />
```

A file input is **always uncontrolled** in React.

## Why?

Because the selected file can only be chosen by the user through the browser’s file picker.

JavaScript is not allowed to set the file value directly for security reasons. A website should not be able to secretly choose a private file from your computer and upload it.

So this is not how file inputs work:

```jsx
<input type="file" value="some-file.txt" />
```

React cannot control the value of a file input with `value`.

Instead, you read the selected file after the user chooses it.

You can do that with the `onChange` event:

```jsx
function App() {
  function handleFileChange(event) {
    const file = event.target.files[0];

    console.log(file);
  }

  return <input type="file" onChange={handleFileChange} />;
}

export default App;
```

Or you can use `useRef`:

```jsx
import React, { useRef } from "react";

function App() {
  const fileInputRef = useRef(null);

  function handleClick() {
    const file = fileInputRef.current.files[0];

    console.log(file);
  }

  return (
    <div>
      <input type="file" ref={fileInputRef} />

      <button onClick={handleClick}>
        Read File
      </button>
    </div>
  );
}

export default App;
```

The key idea:

**Text inputs, textareas, selects, checkboxes, and radio buttons can be controlled or uncontrolled.**

**File inputs are always uncontrolled because only the user can choose the file.**
