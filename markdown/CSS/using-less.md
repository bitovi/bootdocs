\@page using-less Using Less
@parent css 11
Bootstrap's CSS is built on Less, a preprocessor with additional functionality like variables, mixins, and functions for compiling CSS. Those looking to use the source Less files instead of our compiled CSS files can make use of the numerous variables and mixins we use throughout the framework.

Grid variables and mixins are covered within the [Grid system section](/grid.html).


## Compiling Bootstrap
Bootstrap can be used in at least two ways: with the compiled CSS or with the source Less files. To compile the Less files, consult the Getting Started section for how to setup your development environment to run the necessary commands.

Third party compilation tools may work with Bootstrap, but they are not supported by our core team.

## Variables
Variables are used throughout the entire project as a way to centralize and share commonly used values like colors, spacing, or font stacks. For a complete breakdown, please see [the Customizer](http://getbootstrap.com/customize/#less-variables-section).

### Colors
Easily make use of two color schemes: grayscale and semantic. Grayscale colors provide quick access to commonly used shades of black while semantic include various colors assigned to meaningful contextual values.

@demo demos/less-colors-bw/demo.html

```
\@gray-darker:  lighten(#000, 13.5%); // #222
\@gray-dark:    lighten(#000, 20%);   // #333
\@gray:         lighten(#000, 33.5%); // #555
\@gray-light:   lighten(#000, 46.7%); // #777
\@gray-lighter: lighten(#000, 93.5%); // #eee

```
@demo demos/less-colors-color/demo.html

```
\@brand-primary: darken(#428bca, 6.5%); // #337ab7
\@brand-success: #5cb85c;
\@brand-info:    #5bc0de;
\@brand-warning: #f0ad4e;
\@brand-danger:  #d9534f;

```

Use any of these color variables as they are or reassign them to more meaningful variables for your project.

```
// Use as-is
.masthead {
  background-color: \@brand-primary;
}

// Reassigned variables in Less
\@alert-message-background: \@brand-info;
.alert {
  background-color: \@alert-message-background;
}

```

### Scaffolding
A handful of variables for quickly customizing key elements of your site's skeleton.

```
// Scaffolding
\@body-bg:    #fff;
\@text-color: @black-50;

```

### Links
Easily style your links with the right color with only one value.

```
// Variables
\@link-color:       @brand-primary;
\@link-hover-color: darken(@link-color, 15%);

// Usage
a {
  color: \@link-color;
  text-decoration: none;

  &:hover {
    color: \@link-hover-color;
    text-decoration: underline;
  }
}
```
Note that the `@link-hover-color` uses a function, another awesome tool from Less, to automagically create the right hover color. You can use `darken`, `lighten`, `saturate`, and `desaturate`.

### Typography
Easily set your typeface, text size, leading, and more with a few quick variables. Bootstrap makes use of these as well to provide easy typographic mixins.

```
\@font-family-sans-serif:  "Helvetica Neue", Helvetica, Arial, sans-serif;
\@font-family-serif:       Georgia, "Times New Roman", Times, serif;
\@font-family-monospace:   Menlo, Monaco, Consolas, "Courier New", monospace;
\@font-family-base:        @font-family-sans-serif;

\@font-size-base:          14px;
\@font-size-large:         ceil((@font-size-base * 1.25)); // ~18px
\@font-size-small:         ceil((@font-size-base * 0.85)); // ~12px

\@font-size-h1:            floor((@font-size-base * 2.6)); // ~36px
\@font-size-h2:            floor((@font-size-base * 2.15)); // ~30px
\@font-size-h3:            ceil((@font-size-base * 1.7)); // ~24px
\@font-size-h4:            ceil((@font-size-base * 1.25)); // ~18px
\@font-size-h5:            @font-size-base;
\@font-size-h6:            ceil((@font-size-base * 0.85)); // ~12px

\@line-height-base:        1.428571429; // 20/14
\@line-height-computed:    floor((@font-size-base * @line-height-base)); // ~20px

\@headings-font-family:    inherit;
\@headings-font-weight:    500;
\@headings-line-height:    1.1;
\@headings-color:          inherit;

```

### Icons
Two quick variables for customizing the location and filename of your icons.

```
\@icon-font-path:          "../fonts/";
\@icon-font-name:          "glyphicons-halflings-regular";
```

### Components
Components throughout Bootstrap make use of some default variables for setting common values. Here are the most commonly used.

```
\@padding-base-vertical:          6px;
\@padding-base-horizontal:        12px;

\@padding-large-vertical:         10px;
\@padding-large-horizontal:       16px;

\@padding-small-vertical:         5px;
\@padding-small-horizontal:       10px;

\@padding-xs-vertical:            1px;
\@padding-xs-horizontal:          5px;

\@line-height-large:              1.33;
\@line-height-small:              1.5;

\@border-radius-base:             4px;
\@border-radius-large:            6px;
\@border-radius-small:            3px;

\@component-active-color:         #fff;
\@component-active-bg:            @brand-primary;

\@caret-width-base:               4px;
\@caret-width-large:              5px;
```

### Vendor Mixins
Vendor mixins are mixins to help support multiple browsers by including all relevant vendor prefixes in your compiled CSS.

### Box Sizing
Reset your components' box model with a single mixin. For context, see this helpful article from Mozilla.

The mixin is deprecated as of v3.2.0, with the introduction of Autoprefixer. To preserve backwards-compatibility, Bootstrap will continue to use the mixin internally until Bootstrap v4.

```
.box-sizing(\@box-model) {
  -webkit-box-sizing: \@box-model; // Safari <= 5
     -moz-box-sizing: \@box-model; // Firefox <= 19
          box-sizing: \@box-model;
}
```

### Rounded Corners
Today all modern browsers support the non-prefixed `border-radius` property. As such, there is no `.border-radius()` mixin, but Bootstrap does include shortcuts for quickly rounding two corners on a particular side of an object.

```
.border-top-radius(\@radius) {
  border-top-right-radius: \@radius;
   border-top-left-radius: \@radius;
}
.border-right-radius(\@radius) {
  border-bottom-right-radius: \@radius;
     border-top-right-radius: \@radius;
}
.border-bottom-radius(\@radius) {
  border-bottom-right-radius: \@radius;
   border-bottom-left-radius: \@radius;
}
.border-left-radius(\@radius) {
  border-bottom-left-radius: \@radius;
     border-top-left-radius: \@radius;
}

```

### Box (Drop) shadows
If your target audience is using the latest and greatest browsers and devices, be sure to just use the `box-shadow` property on its own. If you need support for older Android (pre-v4) and iOS devices (pre-iOS 5), use the deprecated mixin to pick up the required `-webkit` prefix.

The mixin is deprecated as of v3.1.0, since Bootstrap doesn't officially support the outdated platforms that don't support the standard property. To preserve backwards-compatibility, Bootstrap will continue to use the mixin internally until Bootstrap v4.

Be sure to use `rgba()` colors in your box shadows so they blend as seamlessly as possible with backgrounds.

```
.box-shadow(\@shadow: 0 1px 3px rgba(0,0,0,.25)) {
  -webkit-box-shadow: \@shadow; // iOS <4.3 & Android <4.1
          box-shadow: \@shadow;
}

```

### Transitions
Multiple mixins for flexibility. Set all transition information with one, or specify a separate delay and duration as needed.

The mixins are deprecated as of v3.2.0, with the introduction of Autoprefixer. To preserve backwards-compatibility, Bootstrap will continue to use the mixins internally until Bootstrap v4.

```
.transition(\@transition) {
  -webkit-transition: \@transition;
          transition: \@transition;
}
.transition-property(\@transition-property) {
  -webkit-transition-property: \@transition-property;
          transition-property: \@transition-property;
}
.transition-delay(\@transition-delay) {
  -webkit-transition-delay: \@transition-delay;
          transition-delay: \@transition-delay;
}
.transition-duration(\@transition-duration) {
  -webkit-transition-duration: \@transition-duration;
          transition-duration: \@transition-duration;
}
.transition-timing-function(\@timing-function) {
  -webkit-transition-timing-function: \@timing-function;
          transition-timing-function: \@timing-function;
}
.transition-transform(\@transition) {
  -webkit-transition: -webkit-transform \@transition;
     -moz-transition: -moz-transform \@transition;
       -o-transition: -o-transform \@transition;
          transition: transform \@transition;
}

```

### Transformations
Rotate, scale, translate (move), or skew any object.

The mixins are deprecated as of v3.2.0, with the introduction of Autoprefixer. To preserve backwards-compatibility, Bootstrap will continue to use the mixins internally until Bootstrap v4.

```
.rotate(\@degrees) {
  -webkit-transform: rotate(\@degrees);
      -ms-transform: rotate(\@degrees); // IE9 only
          transform: rotate(\@degrees);
}
.scale(\@ratio; \@ratio-y...) {
  -webkit-transform: scale(\@ratio, \@ratio-y);
      -ms-transform: scale(\@ratio, \@ratio-y); // IE9 only
          transform: scale(\@ratio, \@ratio-y);
}
.translate(\@x; \@y) {
  -webkit-transform: translate(\@x, \@y);
      -ms-transform: translate(\@x, \@y); // IE9 only
          transform: translate(\@x, \@y);
}
.skew(\@x; \@y) {
  -webkit-transform: skew(\@x, \@y);
      -ms-transform: skewX(\@x) skewY(\@y); // See https://github.com/twbs/bootstrap/issues/4885; IE9+
          transform: skew(\@x, \@y);
}
.translate3d(\@x; \@y; \@z) {
  -webkit-transform: translate3d(\@x, \@y, \@z);
          transform: translate3d(\@x, \@y, \@z);
}

.rotateX(\@degrees) {
  -webkit-transform: rotateX(\@degrees);
      -ms-transform: rotateX(\@degrees); // IE9 only
          transform: rotateX(\@degrees);
}
.rotateY(\@degrees) {
  -webkit-transform: rotateY(\@degrees);
      -ms-transform: rotateY(\@degrees); // IE9 only
          transform: rotateY(\@degrees);
}
.perspective(\@perspective) {
  -webkit-perspective: \@perspective;
     -moz-perspective: \@perspective;
          perspective: \@perspective;
}
.perspective-origin(\@perspective) {
  -webkit-perspective-origin: \@perspective;
     -moz-perspective-origin: \@perspective;
          perspective-origin: \@perspective;
}
.transform-origin(\@origin) {
  -webkit-transform-origin: \@origin;
     -moz-transform-origin: \@origin;
      -ms-transform-origin: \@origin; // IE9 only
          transform-origin: \@origin;
}

```

### Animations
A single mixin for using all of CSS3's animation properties in one declaration and other mixins for individual properties.

The mixins are deprecated as of v3.2.0, with the introduction of Autoprefixer. To preserve backwards-compatibility, Bootstrap will continue to use the mixins internally until Bootstrap v4.

```
.animation(\@animation) {
  -webkit-animation: \@animation;
          animation: \@animation;
}
.animation-name(\@name) {
  -webkit-animation-name: \@name;
          animation-name: \@name;
}
.animation-duration(\@duration) {
  -webkit-animation-duration: \@duration;
          animation-duration: \@duration;
}
.animation-timing-function(\@timing-function) {
  -webkit-animation-timing-function: \@timing-function;
          animation-timing-function: \@timing-function;
}
.animation-delay(\@delay) {
  -webkit-animation-delay: \@delay;
          animation-delay: \@delay;
}
.animation-iteration-count(\@iteration-count) {
  -webkit-animation-iteration-count: \@iteration-count;
          animation-iteration-count: \@iteration-count;
}
.animation-direction(\@direction) {
  -webkit-animation-direction: \@direction;
          animation-direction: \@direction;
}

```
### Opacity
Set the opacity for all browsers and provide a `filter` fallback for IE8.

```
.opacity(\@opacity) {
  opacity: \@opacity;
  // IE8 filter
  @opacity-ie: (\@opacity * 100);
  filter: ~"alpha(opacity=\@{opacity-ie})";
}
```

### Placeholder Text
Provide context for form controls within each field.

```
.placeholder(\@color: \@input-color-placeholder) {
  &::-moz-placeholder           { color: \@color; } // Firefox
  &:-ms-input-placeholder       { color: \@color; } // Internet Explorer 10+
  &::-webkit-input-placeholder  { color: \@color; } // Safari and Chrome
}
```

### Columns
Generate columns via CSS within a single element.

```
.content-columns(\@width; \@count; \@gap) {
  -webkit-column-width: \@width;
     -moz-column-width: \@width;
          column-width: \@width;
  -webkit-column-count: \@count;
     -moz-column-count: \@count;
          column-count: \@count;
  -webkit-column-gap: \@gap;
     -moz-column-gap: \@gap;
          column-gap: \@gap;
}
```

### Gradients
Easily turn any two colors into a background gradient. Get more advanced and set a direction, use three colors, or use a radial gradient. With a single mixin you get all the prefixed syntaxes you'll need.

```
#gradient > .vertical(#333; #000);
#gradient > .horizontal(#333; #000);
#gradient > .radial(#333; #000);

```
You can also specify the angle of a standard two-color, linear gradient:

```
#gradient > .directional(#333; #000; 45deg);
```

If you need a barber-stripe style gradient, that's easy, too. Just specify a single color and we'll overlay a translucent white stripe.

```
#gradient > .striped(#333; 45deg);
```
Up the ante and use three colors instead. Set the first color, the second color, the second color's color stop (a percentage value like 25%), and the third color with these mixins:

```
#gradient > .vertical-three-colors(#777; #333; 25%; #000);
#gradient > .horizontal-three-colors(#777; #333; 25%; #000);
```
Heads up! Should you ever need to remove a gradient, be sure to remove any IE-specific filter you may have added. You can do that by using the `.reset-filter()` mixin alongside `background-image: none;`.

## Utility Mixins
Utility mixins are mixins that combine otherwise unrelated CSS properties to achieve a specific goal or task.

### Clearfix
Forget adding `class="clearfix"` to any element and instead add the `.clearfix()` mixin where appropriate. Uses the micro clearfix from [Nicolas Gallagher](https://twitter.com/necolas).

```
// Mixin
.clearfix() {
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
}

// Usage
.container {
  .clearfix();
}
```

### Horizontal Centering
Quickly center any element within its parent. Requires width or max-width to be set.

```
// Mixin
.center-block() {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

// Usage
.container {
  width: 940px;
  .center-block();
}
```

### Sizing Helpers
Specify the dimensions of an object more easily.

```
// Mixins
.size(\@width; \@height) {
  width: \@width;
  height: \@height;
}
.square(\@size) {
  .size(\@size; \@size);
}

// Usage
.image { .size(400px; 300px); }
.avatar { .square(48px); }
```

### Resizable Textareas
Easily configure the resize options for any textarea, or any other element. Defaults to normal browser behavior `(both)`.

```
.resizable(\@direction: both) {
  // Options: horizontal, vertical, both
  resize: \@direction;
  // Safari fix
  overflow: auto;
}
```

### Truncating Text
Easily truncate text with an ellipsis with a single mixin. Requires element to be block or inline-block level.

```
// Mixin
.text-overflow() {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// Usage
.branch-name {
  display: inline-block;
  max-width: 200px;
  .text-overflow();
}

```


### Retina images
Specify two image paths and the \@1x image dimensions, and Bootstrap will provide an \@2x media query. **If you have many images to serve, consider writing your retina image CSS manually in a single media query.**

```
.img-retina(\@file-1x; \@file-2x; \@width-1x; \@height-1x) {
  background-image: url("\@{file-1x}");

  \@media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (   min--moz-device-pixel-ratio: 2),
  only screen and (     -o-min-device-pixel-ratio: 2/1),
  only screen and (        min-device-pixel-ratio: 2),
  only screen and (                min-resolution: 192dpi),
  only screen and (                min-resolution: 2dppx) {
    background-image: url("\@{file-2x}");
    background-size: \@width-1x \@height-1x;
  }
}

// Usage
.jumbotron {
  .img-retina("/img/bg-1x.png", "/img/bg-2x.png", 100px, 100px);
}
```
