# 2. `forwardRef`

To allow a parent component to pass a `ref` down to a custom child component, the child must explicitly declare that it accepts refs using the `React.forwardRef()` Higher Order Component (HOC).

---

## The Syntax

Normally, a React component only accepts one argument: `props`.

```jsx
function SearchBar(props) { ... }
```

When you wrap a component in `forwardRef`, React injects a **second argument** into the function: the `ref` itself.

```jsx
import { forwardRef } from "react";

// Wrap the function!
const SearchBar = forwardRef((props, ref) => {
  
  return (
    <div className="search-container">
      <img src="icon.png" />
      {/* Attach the forwarded ref to the native element! */}
      <input ref={ref} placeholder={props.placeholder} />
    </div>
  );

});
```

### The Flow
1. Parent creates a ref: `const myRef = useRef(null)`.
2. Parent passes the ref: `<SearchBar ref={myRef} />`.
3. React sees `forwardRef` and extracts the `ref` prop.
4. React calls the `SearchBar` function, passing `props` as the first argument, and the extracted `myRef` as the second argument.
5. The child attaches `myRef` to its internal `<input>`.
6. The Parent can now call `myRef.current.focus()`.

By doing this, the child component says: "I consent to letting my parent manipulate my internal `<input>` tag."
