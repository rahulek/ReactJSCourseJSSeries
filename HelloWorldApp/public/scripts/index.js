"use strict";

console.log("loaded the index.js script again!!.");

var jsxSample = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "This is the JSX."
  )
);

var modernAppRoot = ReactDOM.createRoot(document.querySelector("#app"));
modernAppRoot.render(jsxSample); //JSX transpiled into React calls
