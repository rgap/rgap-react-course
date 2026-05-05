# 2. `defaultValue` and `defaultChecked`

In a React **Controlled Component**, the input value is controlled by React state.

For example, the initial value usually comes from `useState()`:

```jsx
const [name, setName] = useState("John");
```

Then the input receives that state through the `value` prop:

```jsx
<input value={name} onChange={(event) => setName(event.target.value)} />
```

Here, React is in charge of the input value.

---

However, in an **Uncontrolled Component**, React does **not** control the value after the input appears on the screen.

Instead, the DOM keeps track of the current value internally, just like regular HTML.

Because of that, you should **not** use `value` without `onChange`:

```jsx
<input value="John" />
```

React will treat this as a controlled input, but since there is no `onChange` handler to update the value, the input becomes **read-only**. React will also show a warning.

To give an uncontrolled input an initial value, use `defaultValue` instead:

```jsx
<input defaultValue="John" />
```

`defaultValue` tells React:

> Set this value only when the input is first created. After that, let the DOM handle the changes.

So the user can still type and edit the input normally.

---

For checkboxes and radio buttons, the idea is similar.

Instead of using `checked` without `onChange`, use `defaultChecked`:

```jsx
<input type="checkbox" defaultChecked={true} />
```

`defaultChecked` tells React:

> Make this checkbox checked at the beginning, but after that, let the user control it.

So, in uncontrolled components:

```jsx
<input defaultValue="John" />
<input type="checkbox" defaultChecked={true} />
<input type="radio" defaultChecked={true} />
```

Use:

* `defaultValue` for text-like inputs, textareas, and selects.
* `defaultChecked` for checkboxes and radio buttons.

The key idea is simple:

**`value` and `checked` are for controlled components.**
**`defaultValue` and `defaultChecked` are for uncontrolled components.**
