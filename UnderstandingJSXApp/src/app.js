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

//4. Expressions with conditions
//
//   publishedYear field in the object can be optional
//   if its available, it can be used else a default value used

let myBook = {
  title: "The History of Civilisation - 1",
  author: "William Durant",
  publisher: "Simon & Schuster",
  edition: 8,
  publishedYear: 1984,
};

//Book may have publishedYear as an optional field
const getSummary = function (book) {
  let summary = `${book.title} - ${book.author}, published by ${book.publisher}`;

  //Conditional
  if (book.publishedYear) {
    summary += ` in ${book.publishedYear}`;
  } else {
    summary += " Publication Year is not known";
  }

  return summary;
};

let jsx4 = (
  <div>
    <h1>My Book Details</h1>
    <h2>{myBook.title}</h2>
    <p>
      <em>{getSummary(myBook)}</em>
    </p>
  </div>
);

//5. Embedded JSX
//   - The function here now returns a JSX instead of a plain string
//   - When this returned JSX is embedded within the parent JSX,
//     the embedded JSX can result in a successful rendering OR if its
//     of the type "undefined", will not result in any HTML element that
//     gets inserted

let myBook5 = {
  title: "The History of Civilisation - 1",
  author: "William Durant",
  publisher: "Simon & Schuster",
  edition: 8,
  publishedYear: 1984,
};
const getSummaryEmbedded = function (book) {
  let summary = `${book.title} - ${book.author}, published by ${book.publisher}`;

  //Conditional
  if (book.publishedYear) {
    summary += ` in ${book.publishedYear}`;
    return (
      <p>
        <em>{summary}</em>
      </p>
    );
  } else {
    //publsihedYear not available, can't complete the summary
    return undefined;
  }
};

//This is an example of an embedded JSX - see the getSummaryEmbedded() call.
let jsx5 = (
  <div>
    <h1>My Book Details</h1>
    <h2>{myBook.title}</h2>
    {/* Embedded JSX */}
    {/* getSummaryEmbedded() call returns JSX that gets embedded */}
    {getSummaryEmbedded(myBook5)}
  </div>
);

//6: Ternary Operator
//   If the
let myBook6 = {
  title: "The History of Civilisation - 1",
};
let jsx6 = (
  <div>
    {/* Render the book title with JS ternary operator*/}
    {<h1>{myBook6.title ? myBook6.title.toUpperCase() : "Title: Unknown"}</h1>}
  </div>
);

//7: Logical AND operator to conditionally render the JSX
//   Inside the book object, check if the publishedYear > 1920
//   and render the copyright information accordingly
let myBook7 = {
  title: "The History of Civilisation - 1",
  publishedYear: 1934,
};
let jsx7 = (
  <div>
    {/* Render the book title with AND */}
    {<h1>{myBook7.title}</h1>}
    {myBook7.publishedYear && myBook7.publishedYear > 1920 && (
      <h2>Published in: {myBook7.publishedYear}</h2>
    )}
  </div>
);

const modernAppRoot = ReactDOM.createRoot(document.querySelector("#app"));
//modernAppRoot.render(jsx); //JSX transpiled into React calls
//modernAppRoot.render(jsx2); //JSX transpiled into React calls
modernAppRoot.render(jsx7); //JSX transpiled into React calls
