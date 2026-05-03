# 1. Basic Event Handling

Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

1. React events are named using **camelCase**, rather than lowercase. (e.g., `onClick` instead of `onclick`).
2. With JSX you pass a **function as the event handler**, rather than a string.

**Crucial detail:** You must pass the function *reference* (e.g., `onClick={handleClick}`), not invoke the function directly (e.g., `onClick={handleClick()}`). If you add parenthesis, the function will execute immediately when the component renders, rather than waiting for the user's click!
