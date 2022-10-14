"use strict";

//1. JSX needs to have only one root element.
// Without it, JSX transpilation would fail

var jsx = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Exploring the JSX Syntax"
  ),
  React.createElement(
    "h2",
    null,
    "Without the div wrapper, this h2 would cause an error"
  )
);

//2. JSX Expressions
//  Store 2 headings in 2 separate variables and render them
var heading1 = "Now exploring the JSX Expressions";
var heading2 = "JSX Expressions are placed inside the curly braces";
var jsx2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    heading1
  ),
  React.createElement(
    "h2",
    null,
    heading2
  ),
  React.createElement(
    "p",
    null,
    heading2 + "and used along with other JS syntax"
  ),
  React.createElement(
    "p",
    null,
    heading1 + (": length of this heading is " + heading1.length)
  )
);

//3. Store the data inside the object
//   Render the object directly causes an error
//   But properties of the object can be used inside the JSX.
var myHeadings = {
  heading1: "Heading1 in the object",
  heading2: "Heading2 in the object"
};
var jsx3 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    myHeadings.heading1
  ),
  React.createElement(
    "h2",
    null,
    myHeadings.heading2
  )
);

var modernAppRoot = ReactDOM.createRoot(document.querySelector("#app"));
//modernAppRoot.render(jsx); //JSX transpiled into React calls
//modernAppRoot.render(jsx2); //JSX transpiled into React calls
modernAppRoot.render(jsx3); //JSX transpiled into React calls
