"use strict";

//application specific information
//Store - title, subtitle and empty list of books.
var app = {
  title: "Simple Book Listing Application",
  subtitle: "Books are your teachers",
  books: []
};

//store the styles locally
var appStyles = {
  app: {
    backgroundColor: "#ececec",
    paddingBottom: "30px"
  },
  headerWrapper: {
    backgroundColor: "#34A4C8",
    padding: "20px"
  },
  h1: {
    textAlign: "center",
    color: "#304151"
  },
  h2: {
    textAlign: "center",
    color: "#304151"
  },
  counter: {
    textAlign: "center",
    fontSize: "20px",
    fontStyle: "italic",
    color: "#F3644E "
  },
  booklist: {
    textAlign: "center",
    listStyleType: "none"
  },
  book: {
    fontSize: "1.5rem",
    color: "black"
  },
  form: {
    textAlign: "center"
  }
};

//Function to handle the form submission events
var onFormSubmit = function onFormSubmit(e) {
  //1. Every time the form is submitted, browser refreshes the page
  //   Click on the button to see the page link change
  //   and the page refreshed.
  //
  //2. This is the default browser behavaior which can be prevented
  //
  //3. How and where to get the input value entered?
  //   Check the console.log
  //   e.target.elements.input.value

  e.preventDefault(); //don't let the browser refresh the page

  var bookTitle = e.target.elements.booktitle.value;
  //See if bookTitle is non-null (empty or not specified)
  if (bookTitle) {
    app.books.push(bookTitle);
    e.target.elements.booktitle.value = ""; //clear the book title field

    //Template data has changed, re-render the app
    renderApp();
  } else {
    console.warn("No book title was specified. Ignoring....");
  }
};

var appRoot = ReactDOM.createRoot(document.querySelector("#app"));

var renderApp = function renderApp() {
  var jsx = React.createElement(
    "div",
    { style: appStyles.app },
    React.createElement(
      "div",
      { style: appStyles.headerWrapper },
      React.createElement(
        "h1",
        { style: appStyles.h1 },
        app.title
      ),
      React.createElement(
        "h2",
        { style: appStyles.h2 },
        app.subtitle
      )
    ),
    app.books.length === 0 && React.createElement(
      "p",
      { style: appStyles.counter },
      "Currently there are no books in the list. Enter a few to get started!"
    ),
    React.createElement(
      "ul",
      { style: appStyles.booklist },
      app.books.map(function (book) {
        return React.createElement(
          "li",
          { key: app.books.indexOf(book), style: appStyles.book },
          book
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit, style: appStyles.form },
      React.createElement("input", { type: "text", name: "booktitle", placeholder: "Book title" }),
      React.createElement(
        "button",
        { type: "submit", disabled: app.books.length >= 10 },
        "Enter it!"
      )
    )
  );

  appRoot.render(jsx);
};

//Intial App render
renderApp();
