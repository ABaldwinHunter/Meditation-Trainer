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
2. A count up begins to measure the length of the exhale.

This will continue until the user has completed a specified number of breath cycles.
After the meditation ends we will display some statistics to the user about how they did.

## Releases

### Release 0: Setup a route to a static page

Setup a route like `/meditate` that serves the page where we will display the JavaScript interface.

### Release 1: Build the basic JavaScript interface

With the route you’ve defined, build the basic interface and interaction for meditation.
You might look into the [Mousetrap](http://craig.is/killing/mice) library for making keybindings nice and easy.

The first time you press space you will want to initialize a model object to track the state of the game.
Subsequent keypresses should update the state of the model. Updates to the DOM should reflect the state of
the model so that your code follows the MVC pattern. Here the keypress handler acts as your controller.

In order to display the count up, and to store the lengths of time look into JavaSccript’s built-in
`new Date()` and `setInterval`.

You can hard code the number of breath cycles until a game ends for now, but use a “constant” (JavaScript doesn’t have real constants).

### Release 2: Add client side stats to your interface

Let’s track four stats on the client side that we will display while the user meditates:

1. Longest inhale duration
2. Average inhale duration
3. Longest exhale duration
4. Average exhale duration

These stats should update each time the user hits space.

### Release 3: Add an intro screen and let the user set the length of a session

Let’s add another route and another view. This view would just introduce the user to our app. It would also include a form where
they can fill in a value for how many breath cycles they want to meditate for. When they submit the form, we send them to the
meditation interface and pass the value they entered to JavaScript. Take a look at [this StackOverflow](http://stackoverflow.com/questions/6751871/better-way-to-use-ruby-sinatra-to-pass-data-to-highcharts)
to get an idea of how to communicate between Sinatra and JavaScript.

### Release 4: Interface with the backend through AJAX

Let’s add some more stats to our display:

1. All-time longest inhale
2. All-time average inhale
3. All-time longest exhale
4. All-time average exhale

We want these values to update each time the user presses space. However, these stats require backend database persistence.

Design a database schema that can track these stats. It might look pretty simple, since we don’t have any users (unless you want
to add that feature).

When you have your database setup, add a route that will receive data from your JS interface about the user’s last breath, and returns
JSON containing the updated All-time stats. Each time the user presses space, your JS interface should send an AJAX request to the
server with information about the last breath the user took. The server should update the All-time stats as appropriate, and then
send the updated All-time stats to the JS interface to display to the user.
