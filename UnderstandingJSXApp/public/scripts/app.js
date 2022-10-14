"use strict";

var jsx = React.createElement(
  "p",
  null,
  "Understanding JSX app is ready."
);

var modernAppRoot = ReactDOM.createRoot(document.querySelector("#app"));
modernAppRoot.render(jsx); //JSX transpiled into React calls
