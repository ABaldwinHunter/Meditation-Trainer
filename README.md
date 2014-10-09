# Meditation Trainer

## Learning Competencies

* Build a JavaScript interface independent of a backend.
* Use JavaScript’s built-in timing functionality: `setInterval`, `new Date()`
* Use the Mousetrap.js library to bind keyboard events.
* Integrate a JavaScript interface with a backend using AJAX.

## Summary

Let’s build an application that helps us take longer and deeper breathes. We can begin by building a JavaScript interface that
doesn’t persist data. Then we can build a backend and hook up our interface to it.

When the user first loads the page we will prompt them: “Begin to breathe deeply. When you feel ready to begin, press Space at
the end of an exhale.”

When they press space the following should happen:

1. The prompt changes to “Inhale”.
2. A count up begins to measure the length of the inhale.

When they press space again the following should happen:

1. The prompt changes to “Exhale”.
2. A count up beings to measure the length of the exhale.

This will continue until the user has completed a specified number of breath cycles.

## Releases

### Release 0: Setup a route to a static page

Setup a route like `/meditate` that serves the page where we will display the JavaScript interface.

### Release 1: Build the basic JavaScript interface

With the route you’ve defined, build the basic interface and interaction for meditation.
You might look into the [Mousetrap](craig.is/killing/mice) library for making keybindings nice and easy.

The first time you press space you will want to initialize a model object to track the state of the game.
Subsequent keypresses should update the state of the model. Updates to the DOM should reflect the state of
the model so that your code follows the MVC pattern. Here the keypress handler acts as your controller.

In order to display the count up, and to store the lengths of time look into JavaSccript’s built-in
`new Date()` and `setInterval`.
