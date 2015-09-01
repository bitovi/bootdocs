@page javascript-tabs Togglable tabs
@parent javascript 6

## Example tabs
Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus. Nested tabs are not supported.

@demo demos/js-tabs/demo.html

### Extends tabbed navigation
This plugin extends the [tabbed navigation component](http://getbootstrap.com/components/#nav-tabs) to add tabbable areas.

## Usage
Enable tabbable tabs via JavaScript (each tab needs to be activated individually):

```
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
```
You can activate individual tabs in several ways:

```
$('#myTabs a[href="#profile"]').tab('show') // Select tab by name
$('#myTabs a:first').tab('show') // Select first tab
$('#myTabs a:last').tab('show') // Select last tab
$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
```
### Markup
You can activate a tab or pill navigation without writing any JavaScript by simply specifying `data-toggle="tab"` or `data-toggle="pill"` on an element. Adding the nav and nav-tabs classes to the tab `ul` will apply the Bootstrap [tab styling](http://getbootstrap.com/components/#nav-tabs), while adding the `nav` and `nav-pills` classes will apply pill styling.


```
<div>

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="home">...</div>
    <div role="tabpanel" class="tab-pane" id="profile">...</div>
    <div role="tabpanel" class="tab-pane" id="messages">...</div>
    <div role="tabpanel" class="tab-pane" id="settings">...</div>
  </div>

</div>
```
## Fade effect
To make tabs fade in, add `.fade` to each `.tab-pane`. The first tab pane must also have `.in` to properly fade in initial content.

```
<div class="tab-content">
  <div role="tabpanel" class="tab-pane fade in active" id="home">...</div>
  <div role="tabpanel" class="tab-pane fade" id="profile">...</div>
  <div role="tabpanel" class="tab-pane fade" id="messages">...</div>
  <div role="tabpanel" class="tab-pane fade" id="settings">...</div>
</div>

```

## Methods
`$().tab`

Activates a tab element and content container. Tab should have either a data-target or an href targeting a container node in the DOM. In the above examples, the tabs are the `<a>`s with `data-toggle="tab"` attributes.

`.tab('show')`

Selects the given tab and shows its associated content. Any other tab that was previously selected becomes unselected and its associated content is hidden.

```
$('#someTab').tab('show')
```

## Events
When showing a new tab, the events fire in the following order:

1. `hide.bs.tab` (on the current active tab)
2. `show.bs.tab` (on the to-be-shown tab)
3. `hidden.bs.tab` (on the previous active tab, the same one as for the hide.bs.tab event)
4. `shown.bs.tab` (on the newly-active just-shown tab, the same one as for the show.bs.tab event)

If no tab was already active, then the `hide.bs.tab` and `hidden.bs.tab` events will not be fired.

<table class="table table-bordered table-striped bs-events-table">
      <thead>
       <tr>
         <th>Event Type</th>
         <th>Description</th>
       </tr>
      </thead>
      <tbody>
       <tr>
         <td>show.bs.tab</td>
         <td>This event fires on tab show, but before the new tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>
      </tr>
      <tr>
         <td>shown.bs.tab</td>
         <td>This event fires on tab show after a tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>
       </tr>
       <tr>
         <td>hide.bs.tab</td>
         <td>This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the current active tab and the new soon-to-be-active tab, respectively.</td>
       </tr>
       <tr>
         <td>hidden.bs.tab</td>
         <td>This event fires after a new tab is shown (and thus the previous active tab is hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the previous active tab and the new active tab, respectively.</td>
       </tr>
      </tbody>
    </table>

```
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
```
