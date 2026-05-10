# 3. Reusable Input Components

In professional React codebases, you will rarely write native HTML `<input>` tags directly in your forms.

Instead, you will create a reusable `<Input />` component that standardizes:
1. Label formatting
2. Error styling (e.g., turning the border red)
3. Error messages

However, to make this `<Input />` component truly reusable, it **must** support `ref` forwarding.

---

## Form Validation

A very common User Experience (UX) pattern is **Focus Management**. 

When a user submits a form, if they made a mistake (like forgetting their password), you should automatically `.focus()` the specific input field that caused the error. This helps users navigate complex forms without needing to use their mouse.

To achieve this, the parent form component must have `ref` access to every custom `<Input />` component it renders.

```jsx
// 1. We create Refs in the parent
const emailRef = useRef(null);

// 2. We pass the ref to the CUSTOM component
<Input ref={emailRef} label="Email Address" error="Invalid format" />

// 3. We can focus it upon validation failure
if (!emailIsValid) {
  emailRef.current.focus();
}
```

By using `forwardRef` in your component library, you ensure that developers utilizing your components have full access to native DOM APIs when they need them.
