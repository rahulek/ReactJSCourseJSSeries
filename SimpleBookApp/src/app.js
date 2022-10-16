//application specific information
//Store - title, subtitle and empty list of books.
let app = {
  title: "Simple Book Listing Application",
  subtitle: "Books are your teachers.",
  books: [],
};

//Function to handle the form submission events
const onFormSubmit = (e) => {
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

  const bookTitle = e.target.elements.booktitle.value;
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

const appRoot = ReactDOM.createRoot(document.querySelector("#app"));

const renderApp = () => {
  const jsx = (
    <div>
      <h1>{app.title}</h1>
      <h2>{app.subtitle}</h2>
      <p>There are {app.books.length} books in the list so far.</p>

      {/* Render the book list */}
      <ul>
        {app.books.map((book) => (
          <li key={app.books.indexOf(book)}>{book}</li>
        ))}
      </ul>

      {/* form to allow new book title entry */}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="booktitle" placeholder="Book title" />
        <button type="submit">Enter it!</button>
      </form>
    </div>
  );

  appRoot.render(jsx);
};

//Intial App render
renderApp();
