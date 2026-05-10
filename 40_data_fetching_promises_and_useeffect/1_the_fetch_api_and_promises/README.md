# 1. The Fetch API & Promises

Before we dive into React-specific fetching patterns, we must understand the core JavaScript tool we use to request data: **The Fetch API**.

`fetch()` is a built-in browser function that allows you to make network requests (like HTTP GET, POST, PUT, DELETE) to external servers.

---

## The Asynchronous Problem

JavaScript runs on a single thread. This means it can only do one thing at a time.

If your code requests a list of users from a database in Europe, and that request takes 2 seconds to complete, JavaScript cannot just "pause" for 2 seconds and wait. If it did, the entire browser tab would freeze!

To solve this, `fetch()` operates **asynchronously**. It immediately returns a special JavaScript object called a **Promise**.

---

## What is a Promise?

A Promise is like a restaurant buzzer. When you order food, the cashier gives you a buzzer and you sit down. The cashier doesn't freeze; they keep taking other people's orders. When your food is finally ready, your buzzer vibrates to let you know.

A Promise has three states:
1. **Pending** (Waiting for the data)
2. **Fulfilled** (The data arrived successfully)
3. **Rejected** (An error occurred, like losing internet connection)

---

## Handling Promises: `.then()`

To read the data when the Promise is fulfilled, you chain a `.then()` method onto the fetch call.

```javascript
fetch("https://api.example.com/users")
  .then((response) => {
    // This code runs when the server responds!
    return response.json(); 
  })
  .then((data) => {
    // This code runs when the JSON is finished parsing!
    console.log(data);
  });
```
*Note: The first `.then` receives a Response object. You must explicitly call `.json()` to parse the body text into a JavaScript object.*

---

## Handling Promises: `async / await`

Modern JavaScript introduced a cleaner syntax for handling Promises without chaining `.then()`.

If you put the word `await` in front of a Promise, JavaScript will pause *that specific function* until the Promise resolves, but it will keep the rest of the application running smoothly.

```javascript
async function getData() {
  const response = await fetch("https://api.example.com/users");
  const data = await response.json();
  console.log(data);
}
```

*(Note: You can only use the `await` keyword inside a function that is marked `async`!)*
