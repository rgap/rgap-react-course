# 5. Form Submission

To handle the submission of a form in React, you should attach an `onSubmit` event handler directly to the `<form>` element, **not** an `onClick` handler on the submit button.

Why?
1. It handles users pressing the **"Enter" key** automatically while focused on an input.
2. It's the semantically correct way HTML forms are designed to work.

### e.preventDefault()
Inside your submit handler, the very first thing you must almost always do is call `e.preventDefault()`. If you don't do this, the browser will execute its default behavior, which is to refresh the page and send a standard HTTP request, instantly wiping out your React application's state!
