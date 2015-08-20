@page accessibility Accessibility Guidelines
@parent design 0

Designing and developing your application to reach AA+ standards is good for **all** users, not just disabled users. Thinking about less-than-perfect contexts in which a user may try to access your application will make things more clear and direct throughout. This page will get you on the right track for ensuring everyone can have the best experience possible accessing and interacting with your app.

## Accessible Design Overview
Step one to an easily accessible application is designing with accessibility in mind from the start. This includes foundational details like:
- Using a font size at least 12px large.
- Selecting color combinations that meet AA standards for luminosity of at least a 4.5 contrast ratio.
- Using more than one indicator when text is a link. 
- Ensuring any interactive target (ex. buttons, tabs) is of sufficient size. Making targets roughly 40 screen-pixels large is a good rule-of-thumb for mobile devices, and also helps with the interactivity of any element on any device.


## HTML Markup
One of the most direct ways to make your application accessible is to write proper, semantic code. Screen readers and other accessibility tools depend on markup tags to convey what kind of information or interaction the user has encountered.

In addition to simply using the proper markup, a few other attributes on these tags will make your application even better, and are highly encouraged:
- Declaring an `alt` description within images, unless they are purely decorative.
```
<img src="path/to/image" alt="description of the image" />
```
- Adding a `summary` to tables.
```
<table summary="What kind of information is inside this table"></table>
```
- Combining the use of `id` on form inputs with a `for` attribute on the respective label to link them together.
```
<label for="name">Name</label>
<input type="text" id="name" placeholder="Name">
```

## Keyboard Accessibility
Not all users have the ability to use a mouse. To allow them to still use your application, all actions that are activated with a mouse click should also be fully accessible when only using a keyboard. Forms should keep a logical tab order, and the submit button should activate with the Return key.

Another important thing to keep in mind is including visual queues on your interface for what is currently focused or selected.


## Voice Accessibility
Blind or sight-impaired users will be listening to (rather than looking at) your application. When semantic markup is insufficient, [WAI-ARIA](http://en.wikipedia.org/wiki/WAI-ARIA) attributes should be used to provide clarity.

```
<nav class="navbar navbar-default" role="navigation" aria-label="Site Navigation"></nav>

<button class="btn btn-link" data-toggle="collapse" data-target="#multi-search"
    aria-controls="multi-search" aria-expanded="true">Advanced Search</button>
```

## Additional Resources
This guide is a high-level overview of accessibility best practices. More information about accessibile web practices can be found at W3C's [Web Accessibility Initiative](https://www.w3.org/WAI/intro/accessibility.php).
