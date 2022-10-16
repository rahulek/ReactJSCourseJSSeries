console.log("events.js is loaded...");

//1. JSX Attributes are not necessarily same as in HTML
//    - "id" can be used as-is
//    - "class" produces an error
//    - "class" changed to "className" is correct
//       - Reason is "class" is a JS reserverd keyword
let jsxTemplate = (
  <div>
    <h1>Heading</h1>
    <p id="mult" className="multClass">
      My Paragraph.
    </p>
  </div>
);
console.log(jsxTemplate);

//2. JSX expressions as the element attributes
//   - JS variables can be used to set the element attributes
//   - The example shows the "style" attribute set on h1 and h2 elements
//   - "style" attribute on h1 refers to colorStyle JS Object within the JSX
//   - "style" attribute on h2 refers to the inline JS Object within the JSX
let colorStyle = {
  color: "white",
  backgroundColor: "orange",
};
let jsxTemplate2 = (
  <div>
    <h1 style={colorStyle}>Heading with Color styles</h1>
    <br /> <br />
    <h2 style={{ color: "white", backgroundColor: "green" }}>
      Another way to set the attributes
    </h2>
  </div>
);

//3. Button Click Event handler example
//   - register an event handler using the "onClick" attribute of the button element
//   - everytime the button is clicked, the handler function gets called.
const btnClickHandler = (e) => {
  console.log("Button Clicked: ", e);
};
const jsxTemplate3 = (
  <div>
    <button onClick={btnClickHandler}>Click me!</button>
  </div>
);

const modernAppRoot = ReactDOM.createRoot(document.querySelector("#app"));
modernAppRoot.render(jsxTemplate3); //JSX transpiled into React calls
