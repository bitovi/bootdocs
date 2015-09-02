@page javascript-tooltips Tooltips
@parent javascript 7

Inspired by the excellent jQuery.tipsy plugin written by Jason Frame; Tooltips are an updated version, which don't rely on images, use CSS3 for animations, and data-attributes for local title storage.

Tooltips with zero-length titles are never displayed.

## Examples
Hover over the links below to see tooltips:

@demo demos/js-tooltips/demo.html

## Static tooltip
Four options are available: top, right, bottom, and left aligned.

@demo demos/js-tooltips-static/demo.html

## Four Directions

@demo demos/js-tooltips-directions/demo.html

### Opt-in functionality
For performance reasons, the Tooltip and Popover data-apis are opt-in, meaning **you must initialize them yourself**.

One way to initialize all tooltips on a page would be to select them by their `data-toggle` attribute:

```
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
```

## Usage
The tooltip plugin generates content and markup on demand, and by default places tooltips after their trigger element.

Trigger the tooltip via JavaScript:

```
$('#example').tooltip(options)
```

## Markup
The required markup for a tooltip is only a `data` attribute and `title` on the HTML element you wish to have a tooltip. The generated markup of a tooltip is rather simple, though it does require a position (by default, set to `top` by the plugin).

```
<!-- HTML to write -->
<a href="#" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a>

<!-- Generated markup by the plugin -->
<div class="tooltip top" role="tooltip">
  <div class="tooltip-arrow"></div>
  <div class="tooltip-inner">
    Some tooltip text!
  </div>
</div>

```

### Multiple-line links
Sometimes you want to add a tooltip to a hyperlink that wraps multiple lines. The default behavior of the tooltip plugin is to center it horizontally and vertically. Add `white-space: nowrap;` to your anchors to avoid this.

### Tooltips in button groups and input groups require special setting
When using tooltips on elements within a `.btn-group` or an `.input-group`, you'll have to specify the option `container: 'body'` (documented below) to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the tooltip is triggered).

### Don't try to show tooltips on hidden elements
Invoking `$(...).tooltip('show')` when the target element is `display: none;` will cause the tooltip to be incorrectly positioned.

### Accessible tooltips for keyboard and assistive technology users
For users navigating with a keyboard, and in particular users of assistive technologies, you should only add tooltips to keyboard-focusable elements such as links, form controls, or any arbitrary element with a `tabindex="0"` attribute.

### Tooltips on disabled elements require wrapper elements
To add a tooltip to a `disabled` or `.disabled` element, put the element inside of a `<div>` and apply the tooltip to that `<div>` instead.

## Options
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-animation=""`.

<table class="table table-bordered table-striped js-options-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>animation</td>
          <td>boolean</td>
          <td>true</td>
          <td>Apply a CSS fade transition to the tooltip</td>
        </tr>
        <tr>
          <td>container</td>
          <td>string | false</td>
          <td>false</td>
          <td>
            <p>Appends the tooltip to a specific element. Example: <code>container: 'body'</code>. This option is particularly useful in that it allows you to position the tooltip in the flow of the document  near the triggering element -&nbsp;which will prevent the tooltip from floating away from the triggering element during a window resize.</p>
          </td>
        </tr>
        <tr>
          <td>delay</td>
          <td>number | object</td>
          <td>0</td>
          <td>
            <p>Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type</p>
            <p>If a number is supplied, delay is applied to both hide/show</p>
            <p>Object structure is: <code>delay: { "show": 500, "hide": 100 }</code></p>
          </td>
        </tr>
        <tr>
          <td>html</td>
          <td>boolean</td>
          <td>false</td>
          <td>Insert HTML into the tooltip. If false, jQuery's <code>text</code> method will be used to insert content into the DOM. Use text if you're worried about XSS attacks.</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>string | function</td>
          <td>'top'</td>
          <td>
            <p>How to position the tooltip - top | bottom | left | right | auto.<br>When "auto" is specified, it will dynamically reorient the tooltip. For example, if placement is "auto left", the tooltip will display to the left when possible, otherwise it will display right.</p>
            <p>When a function is used to determine the placement, it is called with the tooltip DOM node as its first argument and the triggering element DOM node as its second. The <code>this</code> context is set to the tooltip instance.</p>
          </td>
        </tr>
        <tr>
          <td>selector</td>
          <td>string</td>
          <td>false</td>
          <td>If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have tooltips added. See <a href="https://github.com/twbs/bootstrap/issues/4215">this</a> and <a href="http://jsbin.com/zopod/1/edit">an informative example</a>.</td>
        </tr>
        <tr>
          <td>template</td>
          <td>string</td>
          <td><code>'&lt;div class="tooltip" role="tooltip"&gt;&lt;div class="tooltip-arrow"&gt;&lt;/div&gt;&lt;div class="tooltip-inner"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
          <td>
            <p>Base HTML to use when creating the tooltip.</p>
            <p>The tooltip's <code>title</code> will be injected into the <code>.tooltip-inner</code>.</p>
            <p><code>.tooltip-arrow</code> will become the tooltip's arrow.</p>
            <p>The outermost wrapper element should have the <code>.tooltip</code> class.</p>
          </td>
        </tr>
        <tr>
          <td>title</td>
          <td>string | function</td>
          <td>''</td>
          <td>
            <p>Default title value if <code>title</code> attribute isn't present.</p>
            <p>If a function is given, it will be called with its <code>this</code> reference set to the element that the tooltip is attached to.</p>
          </td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>string</td>
          <td>'hover focus'</td>
          <td>How tooltip is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space. <code>manual</code> cannot be combined with any other trigger.</td>
        </tr>
        <tr>
          <td>viewport</td>
          <td>string | object | function</td>
          <td>{ selector: 'body', padding: 0 }</td>
          <td>
            <p>Keeps the tooltip within the bounds of this element. Example: <code>viewport: '#viewport'</code> or <code>{ "selector": "#viewport", "padding": 0 }</code></p>
            <p>If a function is given, it is called with the triggering element DOM node as its only argument. The <code>this</code> context is set to the tooltip instance.</p>
          </td>
        </tr>
      </tbody>
    </table>

## Data attributes for individual tooltips
Options for individual tooltips can alternatively be specified through the use of data attributes, as explained above.  

## Methods
`$().tooltip(options)`
Attaches a tooltip handler to an element collection.

`.tooltip('show')`
Reveals an element's tooltip. Returns to the caller before the tooltip has actually been shown (i.e. before the shown.bs.tooltip event occurs). This is considered a "manual" triggering of the tooltip. Tooltips with zero-length titles are never displayed.

```
.tooltip('show')
```

`.tooltip('hide')`
Hides an element's tooltip. Returns to the caller before the tooltip has actually been hidden (i.e. before the hidden.bs.tooltip event occurs). This is considered a "manual" triggering of the tooltip.

```
$('#element').tooltip('hide')
```

`.tooltip('toggle')`
Toggles an element's tooltip. Returns to the caller before the tooltip has actually been shown or hidden (i.e. before the shown.bs.tooltip or hidden.bs.tooltip event occurs). This is considered a "manual" triggering of the tooltip.

```
$('#element').tooltip('toggle')
```

`.tooltip('destroy')`
Hides and destroys an element's tooltip. Tooltips that use delegation (which are created using the selector option) cannot be individually destroyed on descendant trigger elements.

```
$('#element').tooltip('destroy')
```

## Elements

<table class="table table-bordered table-striped bs-events-table">
      <thead>
        <tr>
          <th>Event Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>show.bs.tooltip</td>
          <td>This event fires immediately when the <code>show</code> instance method is called.</td>
        </tr>
        <tr>
          <td>shown.bs.tooltip</td>
          <td>This event is fired when the tooltip has been made visible to the user (will wait for CSS transitions to complete).</td>
        </tr>
        <tr>
          <td>hide.bs.tooltip</td>
          <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
        </tr>
        <tr>
          <td>hidden.bs.tooltip</td>
          <td>This event is fired when the tooltip has finished being hidden from the user (will wait for CSS transitions to complete).</td>
        </tr>
        <tr>
          <td>inserted.bs.tooltip</td>
          <td>This event is fired after the <code>show.bs.tooltip</code> event when the tooltip template has been added to the DOM.</td>
        </tr>
      </tbody>
    </table>
