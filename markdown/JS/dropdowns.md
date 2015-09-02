@page javascript-dropdowns Dropdowns
@parent javascript 4

## Examples
Add dropdown menus to nearly anything with this simple plugin, including the navbar, tabs, and pills.

### Within a navbar

@demo demos/js-dropdown-navbar/demo.html

### Within pills

@demo demos/js-dropdown-pills/demo.html

## Usage
Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the `.open `class on the parent list item.

On mobile devices, opening a dropdown adds a `.dropdown-backdrop` as a tap area for closing dropdown menus when tapping outside the menu, a requirement for proper iOS support. This means that switching from an open dropdown menu to a different dropdown menu requires an extra tap on mobile.

Note: The `data-toggle="dropdown"` attribute is relied on for closing dropdown menus at an application level, so it's a good idea to always use it.

### Via data attributes
Add `data-toggle="dropdown"` to a link or button to toggle a dropdown.

```
<div class="dropdown">
  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown trigger
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dLabel">
    ...
  </ul>
</div>
```
To keep URLs intact with link buttons, use the `data-target` attribute instead of `href="#"`.

```
<div class="dropdown">
  <a id="dLabel" data-target="#" href="http://example.com" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
    Dropdown trigger
    <span class="caret"></span>
  </a>

  <ul class="dropdown-menu" aria-labelledby="dLabel">
    ...
  </ul>
</div>
```


### Via JavaScript
Call the dropdowns via JavaScript:

```
$('.dropdown-toggle').dropdown()
```

#### `data-toggle="dropdown"` still required
Regardless of whether you call your dropdown via JavaScript or instead use the data-api, `data-toggle="dropdown"` is always required to be present on the dropdown's trigger element.

### Options
none

### Methods
`$().dropdown('toggle')`
Toggles the dropdown menu of a given navbar or tabbed navigation.

### Events
All dropdown events are fired at the `.dropdown-menu`'s parent element.

All dropdown events have a `relatedTarget` property, whose value is the toggling anchor element.

<table class="table table-bordered table-striped bs-events-table">
<thead>
  <tr>
    <th>Event Type</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>show.bs.dropdown</td>
    <td>This event fires immediately when the show instance method is called.</td>
  </tr>
  <tr>
    <td>shown.bs.dropdown</td>
    <td>This event is fired when the dropdown has been made visible to the user (will wait for CSS transitions, to complete).</td>
  </tr>
  <tr>
    <td>hide.bs.dropdown</td>
    <td>This event is fired immediately when the hide instance method has been called.</td>
  </tr>
  <tr>
    <td>hidden.bs.dropdown</td>
    <td>This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete).</td>
  </tr>
</tbody>
</table>

```
$('#myDropdown').on('show.bs.dropdown', function () {
  // do something…
})
```
