//1. JSX needs to have only one root element.
// Without it, JSX transpilation would fail

const jsx = (
  <div>
    <h1>Exploring the JSX Syntax</h1>
    <h2>Without the div wrapper, this h2 would cause an error</h2>
  </div>
);

//2. JSX Expressions
//  Store 2 headings in 2 separate variables and render them
let heading1 = "Now exploring the JSX Expressions";
let heading2 = "JSX Expressions are placed inside the curly braces";
let jsx2 = (
  <div>
    <h1>{heading1}</h1>
    <h2>{heading2}</h2>
    <p>{heading2 + "and used along with other JS syntax"}</p>
    <p>{heading1 + `: length of this heading is ${heading1.length}`}</p>
  </div>
);

//3. Store the data inside the object
//   Render the object directly causes an error
//   But properties of the object can be used inside the JSX.
let myHeadings = {
  heading1: "Heading1 in the object",
  heading2: "Heading2 in the object",
};
let jsx3 = (
  <div>
    <h1>{myHeadings.heading1}</h1>
    <h2>{myHeadings.heading2}</h2>
  </div>
);

const modernAppRoot = ReactDOM.createRoot(document.querySelector("#app"));
//modernAppRoot.render(jsx); //JSX transpiled into React calls
//modernAppRoot.render(jsx2); //JSX transpiled into React calls
modernAppRoot.render(jsx3); //JSX transpiled into React calls
