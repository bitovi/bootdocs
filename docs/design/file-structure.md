@page file-structure File Structure
@parent design 1

The following file structure shows the main directories where styles are located.

```
bootdocs
    docs
        design                  // Markdown files used on the design section of the style guide
        css                     // Markdown files used on the css section of the style guide
        guides
            icon-svg            // Icons SVG Library

    src
        components
            base                // Imports and custom styles beyond bootstrap
                boostrap-custom // Custom styles that overwrite bootstrap
                demos           // Demos created manually to illustrate styles and interactions for the style guide
                variables
    node_modules
        bootstrap
    target                      // Output directory of pui.less
```

New styles should be written following these rules:

- **If it overwrites bootstrap,** styles should be placed in the bootstrap-custom directory. Follow the naming convention [bootstrap-file-name]-custom.less.
- **If it is a general rule that is completely independent from bootstrap,** styles should be placed on the base.less file.
- **If it is a specific rule that only applies to a component,** styles should be placed in the .less file for that component
