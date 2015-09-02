@page javascript-collapse Collapse
@parent javascript 11

Flexible plugin that utilizes a handful of classes for easy toggle behavior.

### Plugin dependency
Collapse requires the [transitions plugin](/javascript-transitions.html) to be included in your version of Bootstrap.

## Example
Click the buttons below to show and hide another element via class changes:

* `.collapse` hides content
* `.collapsing` is applied during transitions
* `.collapse.in` shows content

You can use a link with the `href` attribute, or a button with the `data-target` attribute. In both cases, the `data-toggle="collapse"` is required.

@demo demos/js-collapse-example/demo.html

## Accordion example
Extend the default collapse behavior to create an accordion with the panel component.

@demo demos/js-collapse-accordion/demo.html

It's also possible to swap out `.panel-bodys` with `.list-groups`.

@demo demos/js-collapse-panel/demo.html

### Make expand/collapse controls accessible
Be sure to add `aria-expanded` to the control element. This attribute explicitly defines the current state of the collapsible element to screen readers and similar assistive technologies. If the collapsible element is closed by default, it should have a value of `aria-expanded="false"`. If you've set the collapsible element to be open by default using the in class, set `aria-expanded="true"` on the control instead. The plugin will automatically toggle this attribute based on whether or not the collapsible element has been opened or closed.

Additionally, if your control element is targetting a single collapsible element – i.e. the `data-target` attribute is pointing to an `id` selector – you may add an additional `aria-controls` attribute to the control element, containing the `id` of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself.

## Usage
The collapse plugin utilizes a few classes to handle the heavy lifting:

* `.collapse` hides the content
* `.collapse.in` shows the content
* `.collapsing` is added when the transition starts, and removed when it finishes

These classes can be found in `component-animations.less`.

## Via data attributes
Just add `data-toggle="collapse"` and a `data-target` to the element to automatically assign control of a collapsible element. The `data-target` attribute accepts a CSS selector to apply the collapse to. Be sure to add the class `collapse` to the collapsible element. If you'd like it to default open, add the additional class `in`.

To add accordion-like group management to a collapsible control, add the data attribute `data-parent="#selector"`. Refer to the demo to see this in action.

## Via JavaScript
Enable manually with:

```
$('.collapse').collapse()
```

## Options
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-parent=""`.

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
         <td>parent</td>
         <td>selector</td>
         <td>false</td>
         <td>If a selector is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the <code>panel</code> class)</td>
       </tr>
       <tr>
         <td>toggle</td>
         <td>boolean</td>
         <td>true</td>
         <td>Toggles the collapsible element on invocation</td>
       </tr>
      </tbody>
    </table>

## Methods
`.collapse(options)`

Activates your content as a collapsible element. Accepts an optional options object.

```
$('#myCollapsible').collapse({
  toggle: false
})
```

`.collapse('toggle')`

Toggles a collapsible element to shown or hidden.

`.collapse('show')`

Shows a collapsible element.

`.collapse('hide')`

Hides a collapsible element.

## Events
Bootstrap's collapse class exposes a few events for hooking into collapse functionality.

<table class="table table-bordered table-striped bs-events-table">
      <thead>
       <tr>
         <th>Event Type</th>
         <th>Description</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>show.bs.collapse</td>
         <td>This event fires immediately when the <code>show</code> instance method is called.</td>
       </tr>
       <tr>
         <td>shown.bs.collapse</td>
         <td>This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).</td>
       </tr>
       <tr>
         <td>hide.bs.collapse</td>
         <td>
          This event is fired immediately when the <code>hide</code> method has been called.
         </td>
       </tr>
       <tr>
         <td>hidden.bs.collapse</td>
         <td>This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).</td>
       </tr>
      </tbody>
    </table>

```
  $('#myCollapsible').on('hidden.bs.collapse', function () {
    // do something…
  })
```
