# 2. Textarea and Select

React simplifies form elements to make them behave consistently. 

### Textarea
In standard HTML, the `<textarea>` element defines its text by its children:
```html
<textarea>
  Hello there, this is some text in a text area
</textarea>
```
In React, `<textarea>` uses a `value` attribute, just like a standard `<input>`.

### Select
In standard HTML, you select a dropdown option by adding the `selected` attribute to an `<option>`:
```html
<select>
  <option value="apple">Apple</option>
  <option value="banana" selected>Banana</option>
</select>
```
In React, you pass the `value` attribute to the root `<select>` element itself. This is much more convenient because you only need to manage the state in one place!
