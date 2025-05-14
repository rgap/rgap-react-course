## CSSOM

The CSS Object Model (CSSOM) is a programming interface that allows developers to manipulate CSS styles dynamically using JavaScript. It represents CSS stylesheets as objects, providing an interface to access and modify styles applied to HTML elements.

### HTML File

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Counter Example</title>
    <link rel="stylesheet" href="styles.css" />
    <!-- Link to the CSS file -->
  </head>
  <body>
    <div id="root">
      <div>
        <h1>Count: 0</h1>
        <!-- Initial count -->
        <button>Increment</button>
        <!-- Button to increment count -->
      </div>
      <div>
        <p>This is a simple counter.</p>
        <p style="display: none;">This paragraph is hidden.</p>
        <!-- Additional content -->
      </div>
    </div>
  </body>
</html>
```

### CSS File

```css
#root {
  background-color: #f0f0f0;
}

h1 {
  color: blue;
  font-size: 24px;
}

button {
  padding: 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
}
```

## CSSOM Tree

- **User-Agent Styles:** These are the browser's default styles for each element (e.g., display: block for div).

- **Custom Styles:** The styles defined in your CSS file (e.g., #root, h1, button) override or add to the user-agent styles.

- **Inheritance and Cascade:** Elements like h1 and button apply custom styles, while the p element has only user-agent styles because no custom styles were defined for it.

```
CSSOM Tree:
|- Document
   |- html
   |- body
      |- #root [background-color: #f0f0f0]
         |- div
            |- h1 [color: blue, font-size: 24px]
            |- button [padding: 10px, background-color: green, color: white, border: none, border-radius: 5px]
         |- div
            |- p 
            |- p [display: none]
```

## Box Model CSSOM Representation

```
+---------------------+
|      <html>         |
+---------------------+
         |
+---------------------+
|      <body>         |
+---------------------+
         |
+----------------------------------+
|    <div id="root">               |
+----------------------------------+
|  [background-color: #f0f0f0]     |
+----------------------------------+
         |
+--------------------+                   +-----------------------+
|      <div>         |                   |       <div>           |
+--------------------+                   +-----------------------+
         |                                      |
+-----------------------------+            +-------------------------------+
|           <h1>              |            |            <p>                |
+-----------------------------+            +-------------------------------+
|  [color: blue,              |                 |          
|   font-size: 24px]          |            +-------------------------------+ 
+-----------------------------+            |              <p>              | 
         |                                 +-------------------------------+     
+----------------------------+             | [display: none]               | 
|         <button>            |            +-------------------------------+  
+-----------------------------+             
| [padding: 10px,             |             
|  background-color: green,   |             
|  color: white,              |              
|  border: none,              |              
|  border-radius: 5px]        |              
+----------------------------+
```
