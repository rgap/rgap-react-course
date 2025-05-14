## Render Tree

The Render Tree is a data structure used by the browser to determine how elements should be rendered on the screen. It combines information from both the DOM and the CSSOM to create a visual representation of what will be displayed.

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

### DOM Tree

```
|- Document
   |- html
   |- body
      |- #root [background-color: #f0f0f0]
         |- div
            |- h1 [color: blue, font-size: 24px]
               |- (text: "Count: 0")
            |- button [padding: 10px, background-color: green, color: white, border-radius: 5px]
               |- (text: "Increment")
         |- div
            |- p
               |- (text: "This is a simple counter.")
```

## Render Tree

```
+-----------------------------+
|           <body>             |
+------------------------------+
         |
 +------------------------------+
|        <div id="root">         |
+-------------------------------+
|  [background-color: #f0f0f0]   |
 +------------------------------+
         |
 +-------------------+                  +----------------------+
|      <div>         |                  |       <div>           |
+--------------------+                  +-----------------------+
         |                                      |
 +----------------------------+            +------------------------------+
|           <h1>              |            |            <p>                |
+-----------------------------+            +-------------------------------+
|  [color: blue,                             |  (text: "This is a simple     |
|   font-size: 24px]                         |   counter.")                 |
 +----------------------------+            +-------------------------------+
|  (text: "Count: 0")                       |
         |                                  
 +----------------------------+            
|         <button>            |            
+-----------------------------+            
| [padding: 10px,                           
|  background-color: green,                 
|  color: white,                            
|  border-radius: 5px]                      
 +----------------------------+
|  (text: "Increment")                      
 +----------------------------+

```
