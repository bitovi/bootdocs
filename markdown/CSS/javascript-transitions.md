@page javascript-transitions Transitions
@parent javascript 2

## About Transitions
For simple transition effects, include `transition.js` once alongside the other JS files. If you're using the compiled (or minified) `bootstrap.js`, there is no need to include this—it's already there.

## What's Inside
Transition.js is a basic helper for `transitionEnd` events as well as a CSS transition emulator. It's used by the other plugins to check for CSS transition support and to catch hanging transitions.

## Disabling transitions
Transitions can be globally disabled using the following JavaScript snippet, which must come after `transition.js` (or `bootstrap.js` or `bootstrap.min.js`, as the case may be) has loaded:

```
$.support.transition = false
```
