## HTML Document?

An HTML document is a structured representation of content on the web. It serves as the foundation for web pages, allowing browsers to render and display content.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Metadata, links, scripts -->
  </head>
  <body>
    <!-- Visible content -->
  </body>
</html>
```

## Simple HTML Document

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

## Root HTML Document from React

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
    <script src="bundle.js"></script>
    <!-- Link to JavaScript bundle -->
  </body>
</html>
```
