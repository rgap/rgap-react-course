# 3. Multiple Inputs with Multiple States

If you have a form with a few inputs, the simplest approach is to create a separate `useState` variable for each input.

This is very readable and easy to understand. You bind `firstName` to the first input, `lastName` to the second, and `age` to the third.

However, as your form grows larger (e.g., 10+ fields), managing 10 different `useState` declarations and 10 different `onChange` handlers can become tedious and clutter your code.
