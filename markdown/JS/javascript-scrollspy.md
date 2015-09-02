@page javascript-scrollspy Scrollspy
@parent javascript 5

## Example in navbar
The ScrollSpy plugin is for automatically updating nav targets based on scroll position. Scroll the area below the navbar and watch the active class change. The dropdown sub items will be highlighted as well.

### Within a navbar

@demo demos/js-scrollspy/demo.html


## Usage

#### Requires Bootstrap nav
Scrollspy currently requires the use of a Bootstrap nav component for proper highlighting of active links.

#### Resolvable ID targets required
Navbar links must have resolvable id targets. For example, a `<a href="#home">home</a>` must correspond to something in the DOM like `<div id="home"></div>`.

#### Non-:visible target elements ignored
Target elements that are not `:visible` according to jQuery will be ignored and their corresponding nav items will never be highlighted.

## Requires relative positioning
No matter the implementation method, scrollspy requires the use of position: relative; on the element you're spying on. In most cases this is the `<body>`. When scrollspying on elements other than the `<body>`, be sure to have a height set and `overflow-y: scroll`; applied.

## Via data attributes
To easily add scrollspy behavior to your topbar navigation, add `data-spy="scroll"` to the element you want to spy on (most typically this would be the `<body>`). Then add the `data-target` attribute with the ID or class of the parent element of any Bootstrap `.nav` component.

```
body {
  position: relative;
}
```
```
<body data-spy="scroll" data-target="#navbar-example">
  ...
  <div id="navbar-example">
    <ul class="nav nav-tabs" role="tablist">
      ...
    </ul>
  </div>
  ...
</body>
```

## Via JavaScript
After adding `position: relative;` in your CSS, call the scrollspy via JavaScript:

```
$('body').scrollspy({ target: '#navbar-example' })
```

## Methods
`.scrollspy('refresh')`

When using scrollspy in conjunction with adding or removing of elements from the DOM, you'll need to call the refresh method like so:

```
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})
```

## Options
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-offset=""`.

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
   <td>offset</td>
   <td>number</td>
   <td>10</td>
   <td>Pixels to offset from top when calculating position of scroll.</td>
 </tr>
</tbody>
</table>

## Events
<table class="table table-bordered table-striped bs-events-table">
<thead>
 <tr>
   <th>Event Type</th>
   <th>Description</th>
 </tr>
</thead>
<tbody>
 <tr>
   <td>activate.bs.scrollspy</td>
   <td>This event fires whenever a new item becomes activated by the scrollspy.</td>
</tr>
</tbody>
</table>

```
$('#myScrollspy').on('activate.bs.scrollspy', function () {
  // do something…
})
```
