//The counter that gets incremented and decremented
let counterValue = 0;

//+ button event handler
const incrementHandler = () => {
  counterValue++;
  //Re-render the app with modified data
  renderApp();
};

//- button event handler
const decrementHandler = () => {
  counterValue--;
  //Re-render the app with modified data
  renderApp();
};

//Get the application's Root DIV
const appRoot = ReactDOM.createRoot(document.querySelector("#app"));

//Function that re-renders the app to the browser via React DOM calls.
const renderApp = () => {
  let jsx = (
    <div>
      <h1>Counter Example: Click + and - buttons.</h1>
      <button onClick={decrementHandler}>-</button>
      <span style={{ margin: 10 }}>
        <bold>{counterValue}</bold>
      </span>
      <button onClick={incrementHandler}>+</button>
    </div>
  );

  appRoot.render(jsx);
};

//Initial app render
renderApp();
