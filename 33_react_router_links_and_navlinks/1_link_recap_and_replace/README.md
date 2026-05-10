# 1. Link Recap and Replace

As we learned in Module 31, the `<Link>` component is the React Router equivalent of an HTML `<a>` tag.

```jsx
<Link to="/about">About Us</Link>
```

It intercepts the click event, prevents the page from reloading, and tells React Router to swap out the components.

Under the hood, it does this by using the browser's **History API**.

---

## The History Stack

Every time you navigate to a new page, your browser adds a new entry to the "history stack". 

```txt
1. google.com
2. mywebsite.com/
3. mywebsite.com/step1
4. mywebsite.com/step2
```

When you click the browser's "Back" arrow, the browser simply pops the top item off the stack, taking you from `step2` back to `step1`.

---

## The `replace` Prop

Sometimes, you do **not** want to add a new entry to the stack. You want to **replace** the current entry.

```jsx
<Link to="/success" replace>Go to Success</Link>
```

Why would you do this? 

Imagine a checkout flow:
1. User goes to `/checkout`
2. User submits their payment.
3. The app redirects them to `/success`.

If you use a normal link, the history stack looks like this:
`... /checkout -> /success`

If the user is on the `/success` page and clicks their browser's "Back" arrow, **they will go back to `/checkout`!** This could cause them to accidentally submit their payment twice, or show them a confusing expired session error.

### How `replace` fixes this

If the redirect from `/checkout` to `/success` uses `replace`, the `/success` page **overwrites** `/checkout` in the history stack.

Now, if the user clicks the "Back" arrow, they will skip the checkout page entirely and go back to wherever they were *before* the checkout page (e.g., the Shopping Cart).
