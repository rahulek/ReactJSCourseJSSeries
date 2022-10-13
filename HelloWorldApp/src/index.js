console.log("loaded the index.js script again!!.");

let jsxSample = (
  <div>
    <h1>This is the JSX.</h1>
  </div>
);

const modernAppRoot = ReactDOM.createRoot(document.querySelector("#app"));
modernAppRoot.render(jsxSample); //JSX transpiled into React calls
