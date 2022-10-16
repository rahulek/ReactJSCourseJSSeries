"use strict";

//React App Rendering process
//   1. This is behind-the-scene process of how the React renders the app.
//   2. The Data that changes due to event processing by default does not get
//      bound to the JSX templates and not rendered again
//   3. Therefore, to make sure that the changed data gets bound and rendered,
//      a new function renderApp() is written.
//   4. The renderApp() function *MUST* be called manually every the data changes
//   5. The function binds the changed data to the JSX template
//   6. It then re-renders the app using React DOM's render function.

//Data that changes with every button click
var clickCounter = 0;

//Click handler that executes every time the button is clicked
var clickHandler = function clickHandler() {
  //Increment the counter
  clickCounter++;
  //Because the data changed, render the app again
  renderApp();
};

//Our JSX template
//Note: this template uses "clickCounter" data that changes
//and the change must get reflected every time the data changes
var jsxTemplate = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Button is clicked ",
    clickCounter,
    " times."
  ),
  React.createElement(
    "button",
    { onClick: clickHandler },
    "Click me!!"
  )
);

//A new function that binds the data manually to the template
//and renders the whole JSX template to the browser
var renderApp = function renderApp() {
  var jsxTemplate = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Button is clicked ",
      clickCounter,
      " times."
    ),
    React.createElement(
      "button",
      { onClick: clickHandler },
      "Click me!!"
    )
  );

  appRoot.render(jsxTemplate); //JSX transpiled into React calls
};

//Get the app root where to render our DOM
var appRoot = ReactDOM.createRoot(document.querySelector("#app"));

//Initial app rendering
renderApp();
