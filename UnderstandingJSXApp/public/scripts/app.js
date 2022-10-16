"use strict";

//The counter that gets incremented and decremented
var counterValue = 0;

//+ button event handler
var incrementHandler = function incrementHandler() {
  counterValue++;
  //Re-render the app with modified data
  renderApp();
};

//- button event handler
var decrementHandler = function decrementHandler() {
  counterValue--;
  //Re-render the app with modified data
  renderApp();
};

//Get the application's Root DIV
var appRoot = ReactDOM.createRoot(document.querySelector("#app"));

//Function that re-renders the app to the browser via React DOM calls.
var renderApp = function renderApp() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Counter Example: Click + and - buttons."
    ),
    React.createElement(
      "button",
      { onClick: decrementHandler },
      "-"
    ),
    React.createElement(
      "span",
      { style: { margin: 10 } },
      React.createElement(
        "bold",
        null,
        counterValue
      )
    ),
    React.createElement(
      "button",
      { onClick: incrementHandler },
      "+"
    )
  );

  appRoot.render(jsx);
};

//Initial app render
renderApp();
