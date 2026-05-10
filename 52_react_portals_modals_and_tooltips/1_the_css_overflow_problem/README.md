# 1. The CSS Overflow Problem

When building complex applications, you will inevitably need to create "Overlay" UI elements. These are elements that should sit "on top" of everything else on the screen.

Examples include:
- Modals (Popups)
- Tooltips
- Dropdown Menus
- Toast Notifications

---

## The React Hierarchy Problem

In React, the standard way to build a UI is through composition. If a `Dashboard` component has a `Widget`, and the `Widget` has a `Modal`, the JSX looks like this:

```jsx
<Dashboard>
  <Widget>
    <Modal />
  </Widget>
</Dashboard>
```

This naturally results in the DOM looking like this:
```html
<div class="dashboard">
  <div class="widget">
    <div class="modal"></div>
  </div>
</div>
```

---

## The CSS Trap

If we want the `<div class="modal">` to cover the entire screen with a dark, semi-transparent background, we would apply `position: fixed` and `width: 100vw`.

**However**, CSS contains a massive gotcha.

If *any* parent element (like the `dashboard` or the `widget`) contains the rule `overflow: hidden`, or applies certain `transform` rules, the `position: fixed` child is no longer positioned relative to the browser viewport! It becomes trapped inside its parent container.

In the example app, try opening the modal. You will see that instead of covering the screen, the dark backdrop gets brutally chopped off by the edge of the `.main-content` box.

How do we solve this? We need a way to keep the `Modal` inside the `Widget` in the *React Tree*, but move it outside the `Widget` in the *HTML DOM Tree*.
