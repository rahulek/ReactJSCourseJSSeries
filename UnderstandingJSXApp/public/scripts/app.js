"use strict";

//1. JSX needs to have only one root element.
// Without it, JSX transpilation would fail

var jsx = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Exploring the JSX Syntax"
  ),
  React.createElement(
    "h2",
    null,
    "Without the div wrapper, this h2 would cause an error"
  )
);

//2. JSX Expressions
//  Store 2 headings in 2 separate variables and render them
var heading1 = "Now exploring the JSX Expressions";
var heading2 = "JSX Expressions are placed inside the curly braces";
var jsx2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    heading1
  ),
  React.createElement(
    "h2",
    null,
    heading2
  ),
  React.createElement(
    "p",
    null,
    heading2 + "and used along with other JS syntax"
  ),
  React.createElement(
    "p",
    null,
    heading1 + (": length of this heading is " + heading1.length)
  )
);

//3. Store the data inside the object
//   Render the object directly causes an error
//   But properties of the object can be used inside the JSX.
var myHeadings = {
  heading1: "Heading1 in the object",
  heading2: "Heading2 in the object"
};
var jsx3 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    myHeadings.heading1
  ),
  React.createElement(
    "h2",
    null,
    myHeadings.heading2
  )
);

//4. Expressions with conditions
//
//   publishedYear field in the object can be optional
//   if its available, it can be used else a default value used

var myBook = {
  title: "The History of Civilisation - 1",
  author: "William Durant",
  publisher: "Simon & Schuster",
  edition: 8,
  publishedYear: 1984
};

//Book may have publishedYear as an optional field
var getSummary = function getSummary(book) {
  var summary = book.title + " - " + book.author + ", published by " + book.publisher;

  //Conditional
  if (book.publishedYear) {
    summary += " in " + book.publishedYear;
  } else {
    summary += " Publication Year is not known";
  }

  return summary;
};

var jsx4 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "My Book Details"
  ),
  React.createElement(
    "h2",
    null,
    myBook.title
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "em",
      null,
      getSummary(myBook)
    )
  )
);

//5. Embedded JSX
//   - The function here now returns a JSX instead of a plain string
//   - When this returned JSX is embedded within the parent JSX,
//     the embedded JSX can result in a successful rendering OR if its
//     of the type "undefined", will not result in any HTML element that
//     gets inserted

var myBook5 = {
  title: "The History of Civilisation - 1",
  author: "William Durant",
  publisher: "Simon & Schuster",
  edition: 8,
  publishedYear: 1984
};
var getSummaryEmbedded = function getSummaryEmbedded(book) {
  var summary = book.title + " - " + book.author + ", published by " + book.publisher;

  //Conditional
  if (book.publishedYear) {
    summary += " in " + book.publishedYear;
    return React.createElement(
      "p",
      null,
      React.createElement(
        "em",
        null,
        summary
      )
    );
  } else {
    //publsihedYear not available, can't complete the summary
    return undefined;
  }
};

//This is an example of an embedded JSX - see the getSummaryEmbedded() call.
var jsx5 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "My Book Details"
  ),
  React.createElement(
    "h2",
    null,
    myBook.title
  ),
  getSummaryEmbedded(myBook5)
);

//6: Ternary Operator
//   If the
var myBook6 = {
  title: "The History of Civilisation - 1"
};
var jsx6 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    myBook6.title ? myBook6.title.toUpperCase() : "Title: Unknown"
  )
);

//7: Logical AND operator to conditionally render the JSX
//   Inside the book object, check if the publishedYear > 1920
//   and render the copyright information accordingly
var myBook7 = {
  title: "The History of Civilisation - 1",
  publishedYear: 1934
};
var jsx7 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    myBook7.title
  ),
  myBook7.publishedYear && myBook7.publishedYear > 1920 && React.createElement(
    "h2",
    null,
    "Published in: ",
    myBook7.publishedYear
  )
);

var modernAppRoot = ReactDOM.createRoot(document.querySelector("#app"));
//modernAppRoot.render(jsx); //JSX transpiled into React calls
//modernAppRoot.render(jsx2); //JSX transpiled into React calls
modernAppRoot.render(jsx7); //JSX transpiled into React calls
