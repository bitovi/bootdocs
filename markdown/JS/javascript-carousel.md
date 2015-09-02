@page javascript-carousel Carousel
@parent javascript 12

A slideshow component for cycling through elements, like a carousel. **Nested carousels are not supported**.

## Examples

@demo demos/js-carousel-example/demo.html

### Accessibility issue
The carousel component is generally not compliant with accessibility standards. If you need to be compliant, please consider other options for presenting your content.

### Transition animations not supported in Internet Explorer 8 & 9
Bootstrap exclusively uses CSS3 for its animations, but Internet Explorer 8 & 9 don't support the necessary CSS properties. Thus, there are no slide transition animations when using these browsers. We have intentionally decided not to include jQuery-based fallbacks for the transitions.

### Initial active element required
The  `.active` class needs to be added to one of the slides. Otherwise, the carousel will not be visible.

## Optional captions
Add captions to your slides easily with the `.carousel-caption` element within any `.item`. Place just about any optional HTML within there and it will be automatically aligned and formatted.

@demo demos/js-carousel-captions/demo.html

## Usage

## Multiple carousels
Carousels require the use of an `id` on the outermost container (the `.carousel`) for carousel controls to function properly. When adding multiple carousels, or when changing a carousel's `id`, be sure to update the relevant controls.

## Via data attributes
Use data attributes to easily control the position of the carousel. `data-slide` accepts the keywords `prev` or `next`, which alters the slide position relative to its current position. Alternatively, use `data-slide-to` to pass a raw slide index to the carousel `data-slide-to="2"`, which shifts the slide position to a particular index beginning with `0`.

The `data-ride="carousel"` attribute is used to mark a carousel as animating starting at page load. **It cannot be used in combination with (redundant and unnecessary) explicit JavaScript initialization of the same carousel.**

## Via JavaScript
Call carousel manually with:

```
$('.carousel').carousel()
```
## Options
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-interval=""`.

<table class="table table-bordered table-striped js-options-table">
      <thead>
       <tr>
         <th>Name</th>
         <th>type</th>
         <th>default</th>
         <th>description</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>interval</td>
         <td>number</td>
         <td>5000</td>
         <td>The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.</td>
       </tr>
       <tr>
         <td>pause</td>
         <td>string</td>
         <td>"hover"</td>
         <td>Pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave.</td>
       </tr>
       <tr>
         <td>wrap</td>
         <td>boolean</td>
         <td>true</td>
         <td>Whether the carousel should cycle continuously or have hard stops.</td>
       </tr>
       <tr>
         <td>keyboard</td>
         <td>boolean</td>
         <td>true</td>
         <td>Whether the carousel should react to keyboard events.</td>
       </tr>
      </tbody>
    </table>

## Methods
`.carousel(options)`

Initializes the carousel with an optional options `object` and starts cycling through items.

```
$('.carousel').carousel({
  interval: 2000
})
```

`.carousel('cycle')`

Cycles through the carousel items from left to right.

`.carousel('pause')`

Stops the carousel from cycling through items.

`.carousel(number)`

Cycles the carousel to a particular frame (0 based, similar to an array).

`.carousel('prev')`

Cycles to the previous item.

`.carousel('next')`

Cycles to the next item.

## Events
Bootstrap's carousel class exposes two events for hooking into carousel functionality.

Both events have the following additional properties:

* `direction:` The direction in which the carousel is sliding (either `"left"` or `"right"`).
* `relatedTarget:` The DOM element that is being slid into place as the active item.

All carousel events are fired at the carousel itself (i.e. at the `<div class="carousel">`).

<table class="table table-bordered table-striped bs-events-table">
      <thead>
       <tr>
         <th>Event Type</th>
         <th>Description</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>slide.bs.carousel</td>
         <td>This event fires immediately when the <code>slide</code> instance method is invoked.</td>
       </tr>
       <tr>
         <td>slid.bs.carousel</td>
         <td>This event is fired when the carousel has completed its slide transition.</td>
       </tr>
      </tbody>
    </table>

```
$('#myCarousel').on('slide.bs.carousel', function () {
  // do something…
})
```
