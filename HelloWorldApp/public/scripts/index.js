console.log("loaded the index.js script again.");

//Example of JSX
//  jsxSample -> plain HTML can't be rendered diretly into the Browser DOM
//  transpiledJsx -> same JSX as jsxSample but transpiled with babel with React presets
//
// Comment the jsxSample to see things break
// Uncomment the transpiledJsx below to see this work

let jsxSample = <p>This is the first JSX!!</p>;

// BABEL - babeljs.io/repl
//

// let transpiledJsx = React.createElement(
//   "div",
//   null,
//   React.createElement("h1", null, "Some heading!")
// );

// Modern/recommended way to render the React element tree
// 1. Create an App Root with createRoot(rootHTMLelement)
// 2. Ask the React DOM to render the JSX
const modernAppRoot = ReactDOM.createRoot(document.querySelector("#app"));

//Rendering to the browser
//modernAppRoot.render(jsxSample);        //Won't work as-is
modernAppRoot.render(transpiledJsx); //JSX transpiled into React calls
