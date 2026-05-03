# 3. Passing Arguments to Event Handlers

Inside a loop, it is very common to want to pass an extra parameter to an event handler. For example, if you click a "Delete" button next to a user's name, you need to pass the user's ID to the delete function.

If you write `<button onClick={handleDelete(id)}>` the function will execute immediately during rendering.

To fix this, we wrap the function call inside an anonymous arrow function:
`<button onClick={() => handleDelete(id)}>`

Now, the arrow function is the one being referenced by `onClick`. When the button is actually clicked, the arrow function executes, which in turn calls our `handleDelete` function with the correct `id`.
