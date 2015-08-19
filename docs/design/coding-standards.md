@page coding-standards Coding Standards
@parent design 2

## General Standards

<table>
    <tr>
        <th width="50%">Dont's</th>
        <th>Do's</th>
    </tr>
    <tr>
        <td>Don't use <strong>tabs</strong> for indentation.</td>
        <td>Do use four (4) <strong>spaces</strong> for indentation.</td>
    </tr>
    <tr>
        <td>Don't use <strong>under_scores</strong><sode> or **camelCase** to name classes or IDs.</td>
        <td>Do use <strong>dashes</strong> to separate words.</td>
    </tr>
    <tr>
        <td>
            Don't use Class and ID names to reflect the underlying markup structure.
            <strong>.container-span</strong> and <strong>.small-header-div</strong> are bad names.
        </td>
        <td>
            Do think about CSS in terms of objects and use simple nouns as names.
            <strong>.global-alert</strong> and <strong>.badge</strong> are good names.
        </td>
    </tr>
    <tr>
        <td>
            Don't use ID's and too specific selectors to style. Only use these when absolutely
            necessary (ex. form controls or page anchors).
        </td>
        <td>
            Do use classes to facilitate reusability and reduce CSS selector specificity conflicts.
        </td>
    </tr>
    <tr>
        <td>Don't commit files with blocks of unused, commented-out code.</td>
        <td>Do use Git to get the file's history.</td>
    </tr>
</table>

### Example

```
button,
.nemo-button {
    background: #999 url('/images/bg.svg');
    border: 0;
    border-radius: .5rem;
    color: #fff;
    cursor: pointer;
    font: 200 1.6rem 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    letter-spacing: .1rem;
    margin: 0;
    padding: .5rem;
    text-decoration: none;
    transition: all .4s;
}
```

## Performance & Maintainability

- Must not use  **!important**  to override selector specificity. Instead, adjust the selectors accordingly, or refactor the styles.
- Minimize selectors. Don't use  ```div.main-nav ul li.item a``` where  ```.main-nav``` a would suffice.
- Do not use hacks or fallbacks for browsers we don't support:
    - No star hacks
    - No underscore hacks
    - No fallback needed for rgba() colors
    - We are using [Autoprefixer](https://github.com/postcss/autoprefixer) to automatically add vendor prefixes as needed, so only use non-prefixed, W3C-proposed properties


## Syntax


<table>
    <tr>
        <th width="50%">Best Practices</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>Write multiple selectors on separate lines.</td>
        <td>
 <pre>
.btn,
.btn-link {
}</pre>
        </td>
    </tr>
    </tr>
        <td>Include one space between the selector and the opening brace.</td>
        <td>
<pre>
.selector {
}</pre>
        </td>
    <tr>
    </tr>
        <td>Use shorthand for hex values when possible.</td>
        <td><strong>#fff</strong> vs #ffffff</td>
    <tr>
    </tr>
        <td>Write hex values in lowercase.</td>
        <td><strong>#3d3d3d</strong> vs  #3D3D3D</td>
    <tr>
    </tr>
        <td>Enclose URLs in single quotes. Generally single quotes are preferred over double quotes, since they're easier to type.</td>
        <td><strong>url ('/image.png')</strong> vs url ("/image.png")</td>
    <tr>
    </tr>
        <td>Don't use units for zero (0) values, except for angles (deg) and time (s or ms). </td>
        <td><strong>margin-right: 0;</strong> vs margin-right: 0px;</td>
    <tr>
    </tr>
        <td>Don't write leading or trailing zeroes for decimal values.</td>
        <td>
            <strong>.5rem</strong> vs 0.5rem <br>
            or <strong>1.5px</strong> vs 1.500px
        </td>
    <tr>
    </tr>
        <td>Write properties in alphabetical order, for consistency and ease of scanning. Also make sure to have a semicolon after every style rule.</td>
        <td>
 <pre>
border: 1 px solid #333;
padding-right: 5px;
z-index: 100;</pre>
        </td>
    <tr>
    </tr>
        <td>Use shorthand properties whenever possible.</td>
        <td><strong>border</strong> vs border-style, border-color, and border-width</td>
    <tr>
    </tr>
        <td>Use shorthand values whenever possible.</td>
        <td><strong>2px 0 0</strong> instead of 2px 0 0 0</td>
    <tr>
    </tr>
        <td>Include one space after each comma in a list of values.</td>
        <td><strong>rgba(0, 0, 255, .75)</strong>  instead of rgba(0,0,255,.75))</td>
    <tr>
</table>


## Accesibility

For guidance on accesibility follow the recomendations consigned under [Accesibility Guidelines](/accessibility.html).

