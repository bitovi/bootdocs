@page file-structure File Structure
@parent design 1

The following file structure shows the main directories where styles are located.

```
bootdocs
    docs
        design                  // Markdown files used on the design section of the style guide
        css                     // Markdown files used on the css section of the style guide
        components              // Markdown files used on the components section of the style guide

    less
        boostrap-custom         // Custom styles that overwrite bootstrap
        demos                   // Demos created manually to illustrate styles and interactions for the style guide
        variables
    node_modules
        bootstrap
    styleguide                  // Output directory of the style guide
```

New styles should be written following these rules:

- **If it is a custom rule or a rule that overwrites bootstrap,** styles should be placed in the bootstrap-custom directory.
- **If it is a specific rule that only applies to a component,** styles should be placed in the .less file for that component
