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
  console.log(e); //log the event
};

const jsx = (
  <div>
    <h1>{app.title}</h1>
    <h2>{app.subtitle}</h2>
    <p>There are {app.books.length} books in the list so far.</p>

    {/* form to allow new book title entry */}
    <form onSubmit={onFormSubmit}>
      <input type="text" name="booktitle" placeholder="Book title" />
      <button type="submit">Enter it!</button>
    </form>
  </div>
);

const appRoot = ReactDOM.createRoot(document.querySelector("#app"));
appRoot.render(jsx);
