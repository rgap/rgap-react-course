# 1. Rendering Arrays

In React, you can render lists of elements by iterating over arrays using the standard JavaScript `map()` method.

When you render a list like this, you will see a warning in the console:
`Warning: Each child in a list should have a unique "key" prop.`

This is because React needs a way to identify which items have changed, are added, or are removed. We will solve this in the next example.
