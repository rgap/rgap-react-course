# 3. `<ScrollRestoration />` with Long Pages

The real-world value of `<ScrollRestoration />` becomes clearest in the **list → detail → back** navigation pattern.

This is one of the most common UX flows in web applications:
1. User sees a long list of posts, products, or results.
2. They scroll down to find an item they like.
3. They click to open the detail page.
4. They finish reading and hit **Back**.
5. They expect to land exactly where they left off in the list.

---

## The Experience Without `<ScrollRestoration />`

The user scrolls to item #25 in the list, clicks it, reads the detail page, hits Back. They land at the **top** of the list and have to scroll all the way back to item #25 again. Extremely frustrating!

## The Experience With `<ScrollRestoration />`

- **Clicking a link** → new page renders at the top ✅  
- **Hitting Back** → scroll position restored to the exact pixel they were at ✅

---

## This App

The demo generates 30 fake articles with full body text. The recommended interaction is:

1. Go to **All Articles**.
2. Scroll down to find an article (e.g., #20 or #25).
3. Click it — the detail page opens at the top.
4. Hit the browser Back button.
5. Observe that you land exactly where you were in the list — not at the top!

This behavior is powered entirely by `<ScrollRestoration />` with zero custom code.
