## DOM

The Document Object Model (DOM) is a programming interface that represents the structure of a document as a tree of objects. It allows developers to interact with and manipulate the content and structure of web pages dynamically.

The DOM is a crucial concept in web development, enabling the creation of interactive and dynamic user interfaces.

## DOM Structure

The DOM is structured as a **hierarchical tree** consisting of various types of nodes:

- **Element Nodes:** These represent HTML elements in the document. Each element corresponds to a node in the tree. For example, <div>, <h1>, and <button> are all element nodes.

- **Text Nodes:** These nodes contain the text within elements. For instance, the text "Count: 0" inside the <h1> element is represented as a text node.

- **Attribute Nodes:** These nodes represent the attributes of elements, such as id and class. They provide additional information about the elements.

## DOM Tree

The DOM tree can be visualized with the Developer Tools -> Inspect -> Elements Tab

Here are some visual representations of the DOM tree.

## HTML Representation

This representation shows the DOM in its native HTML format. It is the raw HTML code, including all elements, attributes, and comments as they would be written in an HTML file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Counter Example</title>
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

## Tree DOM Representation

This representation displays the DOM as a hierarchical tree structure where each element is shown as a node with its respective children.

```
Document
  ├── html
  │     ├── head
  │     └── body
  │           └── div#root
  │                 ├── div
  │                 │     ├── h1 (text: "Count: 0")
  │                 │     └── button (text: "Increment")
  │                 └── div
  │                       ├── p (text: "This is a simple counter.")
  │                       └── p (text: "This paragraph is hidden.", style: display: none)

```

## Indented List Representation

```
html [lang="en"]
        head
                meta [charset="UTF-8"]
                meta [name="viewport", content="width=device-width, initial-scale=1.0"]
                title (Counter Example)
        body
                div#root
                        div
                                h1 (text: "Count: 0")
                                button (text: "Increment")
                                <!-- Initial count -->
                                <!-- Button to increment count -->
                        div
                                p (text: "This is a simple counter.")
                                p (text: "This paragraph is hidden.", style: display: none)
                                <!-- Additional content -->
```

## Indented List Representation (Simplified)

```
html
        head
                meta
                meta
                title
        body
                div
                        div
                                h1
                                button
                        div
                                p
                                p
```

## Box Model DOM Representation

```
 +-----------------+
|     <html>       |
+------------------+
         |
 +---------------+
 |    <head>     |
 +---------------+
         |
 +---------------+
 |    <body>     |
 +---------------+
         |
 +----------------------+
 |     <div id="root">  |
 +----------------------+
         |
 +---------------+               +---------------------+
 |     <div>     |               |         <div>       |
 +---------------+               +---------------------+
         |                           |
 +---------------+                 +-----------------+
 |    <h1>       |                 |       <p>       |
 +---------------+                 +-----------------+
 |  (text: "Count: 0") |         | (text: "This is a simple counter.") |
 +---------------+                 +-----------------+
         |                           |
 +---------------+                 +-----------------+
 |   <button>    |                 |       <p>       |
 +---------------+                 +-----------------+
 | (text: "Increment") |           | (text: "This paragraph is hidden.") |
 +---------------+                 +-----------------+
                                   |  (style: display: none)  |
                                   +-------------------------+
```
