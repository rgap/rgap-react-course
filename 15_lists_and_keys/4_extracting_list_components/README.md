# 4. Extracting List Components

As your lists grow more complex, you'll often want to extract the list items into separate components.

A common mistake is putting the `key` attribute on the root element *inside* the extracted component. **The `key` should be placed on the custom component itself within the `.map()` block.**

Rule of thumb: Elements inside the `map()` call need keys!
