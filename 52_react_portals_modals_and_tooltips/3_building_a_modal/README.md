# 3. Building a Reusable Modal

In the previous lesson, we learned the syntax for `createPortal`.

However, you should not be writing `createPortal` inside your specific Dashboard Widgets. That violates the DRY (Don't Repeat Yourself) principle.

Instead, we extract the portal logic into a highly reusable `<Modal>` component.

---

## The Abstracted Component

Our `<Modal>` component takes care of the DOM manipulation, the dark backdrop, and the close button.

It accepts standard React props to configure its behavior:
- `isOpen`: A boolean to determine if it should render.
- `onClose`: A callback function to close the modal when the "X" is clicked.
- `title`: The header text.
- `children`: The inner content!

```jsx
// Modal.jsx
export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="backdrop">
      <div className="content">
        <div className="header">
          <h3>{title}</h3>
          <button onClick={onClose}>X</button>
        </div>
        
        {/* Render whatever was passed between the <Modal> tags! */}
        <div className="body">{children}</div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
```

Now, any component in your application, no matter how deeply nested it is, can spawn a perfect, screen-covering Modal simply by using the `<Modal>` tag!
