"use strict";

//application specific information
//Store - title, subtitle and empty list of books.
var app = {
  title: "Simple Book Listing Application",
  subtitle: "Books are your teachers.",
  books: []
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
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    React.createElement(
      "h2",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      "There are ",
      app.books.length,
      " books in the list so far."
    ),
    React.createElement(
      "ul",
      null,
      app.books.map(function (book) {
        return React.createElement(
          "li",
          { key: app.books.indexOf(book) },
          book
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "booktitle", placeholder: "Book title" }),
      React.createElement(
        "button",
        { type: "submit" },
        "Enter it!"
      )
    )
  );

  appRoot.render(jsx);
};

//Intial App render
renderApp();
