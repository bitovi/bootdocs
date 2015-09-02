@page javascript-alerts Alerts
@parent javascript 9


## Example Alerts
Add dismiss functionality to all alert messages with this plugin.

When using a `.close` button, it must be the first child of the `.alert-dismissible` and no text content may come before it in the markup.

@demo demos/js-alerts/demo.html

## Usage
Just add `data-dismiss="alert"` to your close button to automatically give an alert close functionality. Closing an alert removes it from the DOM.

```
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
```

To have your alerts use animation when closing, make sure they have the `.fade` and `.in` classes already applied to them.

## Methods
`$().alert()`

Makes an alert listen for click events on descendant elements which have the `data-dismiss="alert"` attribute. (Not necessary when using the data-api's auto-initialization.)

`$().alert('close')`

Closes an alert by removing it from the DOM. If the `.fade` and `.in` classes are present on the element, the alert will fade out before it is removed.

## Events
Bootstrap's alert plugin exposes a few events for hooking into alert functionality.

<table class="table table-bordered table-striped bs-events-table">
<thead>
  <tr>
    <th>Event Type</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>close.bs.alert</td>
    <td>This event fires immediately when the <code>close</code> instance method is called.</td>
  </tr>
  <tr>
    <td>closed.bs.alert</td>
    <td>This event is fired when the alert has been closed (will wait for CSS transitions to complete).</td>
  </tr>
</tbody>
</table>

```
$('#myAlert').on('closed.bs.alert', function () {
  // do something…
})
```
