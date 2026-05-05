# 4. Multiple Inputs with a Single State Object

When dealing with complex forms containing many fields, it is common to use a single `useState` object to hold all the form data.

To make this work efficiently, we rely on three JavaScript features:
1. **The `name` attribute:** Every input is given a `name` that exactly matches the property key in the state object.
2. **The Spread Operator (`...`)**: Used to copy the existing state so we don't accidentally delete other fields when updating one field.
3. **Computed Property Names (`[name]: value`)**: ES6 syntax that allows us to dynamically set an object key using a variable.

With this pattern, a single `handleChange` function can power an entire form, no matter how many text inputs you add!
