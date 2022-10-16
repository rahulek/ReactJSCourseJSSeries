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
  console.log(e); //log the event
};

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

var appRoot = ReactDOM.createRoot(document.querySelector("#app"));
appRoot.render(jsx);
