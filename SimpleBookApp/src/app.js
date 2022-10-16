//application specific information
//Store - title, subtitle and empty list of books.
let app = {
  title: "Simple Book Listing Application",
  subtitle: "Books are your teachers",
  books: [],
};

//store the styles locally
const appStyles = {
  app: {
    backgroundColor: "#ececec",
    paddingBottom: "30px",
  },
  headerWrapper: {
    backgroundColor: "#34A4C8",
    padding: "20px",
  },
  h1: {
    textAlign: "center",
    color: "#304151",
  },
  h2: {
    textAlign: "center",
    color: "#304151",
  },
  counter: {
    textAlign: "center",
    fontSize: "20px",
    fontStyle: "italic",
    color: "#F3644E ",
  },
  booklist: {
    textAlign: "center",
    listStyleType: "none",
  },
  book: {
    fontSize: "1.5rem",
    color: "black",
  },
  form: {
    textAlign: "center",
  },
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
    <div style={appStyles.app}>
      <div style={appStyles.headerWrapper}>
        <h1 style={appStyles.h1}>{app.title}</h1>
        <h2 style={appStyles.h2}>{app.subtitle}</h2>
      </div>

      {/* Render the <p> element only if there are no books */}
      {app.books.length === 0 && (
        <p style={appStyles.counter}>
          Currently there are no books in the list. Enter a few to get started!
        </p>
      )}
      {/* Render the book list */}
      <ul style={appStyles.booklist}>
        {app.books.map((book) => (
          <li key={app.books.indexOf(book)} style={appStyles.book}>
            {book}
          </li>
        ))}
      </ul>
      {/* form to allow new book title entry */}
      {/* handle the disabling of the "Enter it" button */}

      <form onSubmit={onFormSubmit} style={appStyles.form}>
        <input type="text" name="booktitle" placeholder="Book title" />
        <button type="submit" disabled={app.books.length >= 10}>
          Enter it!
        </button>
      </form>
    </div>
  );

  appRoot.render(jsx);
};

//Intial App render
renderApp();
