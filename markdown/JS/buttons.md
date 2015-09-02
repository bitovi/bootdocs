@page javascript-buttons Buttons
@parent javascript 10

Do more with buttons. Control button states or create groups of buttons for more components like toolbars.

### Cross-browser compatibility
[Firefox persists form control states (disabledness and checkedness)](https://github.com/twbs/bootstrap/issues/793) across page loads. A workaround for this is to use `autocomplete="off"`. [See Mozilla bug #654072](https://bugzilla.mozilla.org/show_bug.cgi?id=654072).

## Stateful
Add `data-loading-text="Loading..."` to use a loading state on a button.

**This feature is deprecated since v3.3.5 and will be removed in v4.**

### Use whichever state you like!
For the sake of this demonstration, we are using `data-loading-text` and `$().button('loading')`, but that's not the only state you can use. See more on this below in the `$().button(string)` documentation.

@demo demos/js-buttons-stateful/demo.html

## Single toggle
Add `data-toggle="button"` to activate toggling on a single button.

### Pre-toggled buttons need .active and aria-pressed="true"
For pre-toggled buttons, you must add the `.active` class and the  `aria-pressed="true"` attribute to the button yourself.

@demo demos/js-buttons-toggle/demo.html

## Checkbox / Radio
Add `data-toggle="buttons"` to a `.btn-group` containing checkbox or radio inputs to enable toggling in their respective styles.

### Preselected options need .active
For preselected options, you must add the `.active` class to the input's label yourself.

### Visual checked state only updated on click
If the checked state of a checkbox button is updated without firing a click event on the button (e.g. via `<input type="reset">` or via setting the checked property of the input), you will need to toggle the `.active` class on the input's label yourself.

@demo demos/js-buttons-checkbox/demo.html

@demo demos/js-buttons-radio/demo.html

## Methods
`$().button('toggle')`

Toggles push state. Gives the button the appearance that it has been activated.

`$().button('reset')`

Resets button state - swaps text to original text. This method is asynchronous and returns before the resetting has actually completed.

`$().button(string)`

Swaps text to any data defined text state.

```
<button type="button" id="myStateButton" data-complete-text="finished!" class="btn btn-primary" autocomplete="off">
  ...
</button>

<script>
  $('#myStateButton').on('click', function () {
    $(this).button('complete') // button text will be "finished!"
  })
</script>
```
