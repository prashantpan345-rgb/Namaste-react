// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements
const heading = React.createElement(
  "h1",
  {
    id: "title",
    style: {
<<<<<<< HEAD
      background:"red",
=======
      background:"red",               // This code is similar to { <h1 id="title" style={{background:"red"}}>heading</h1> }
>>>>>>> 80c038f (Ingnition our app)
    },
    className:"title"
  },
  "heading"
);
const heading1 = React.createElement(
  "h1",
  {
<<<<<<< HEAD
    id: "title",
=======
    id: "title",                      // This code is similar to { <h1 id="title">heading1</h1> }
>>>>>>> 80c038f (Ingnition our app)
  },
  "heading1"
);

const container = React.createElement(
  "div",
  {
<<<<<<< HEAD
    id: "container",
=======
    id: "container",            // This code is similar to { <div id="container">...</div> }
>>>>>>> 80c038f (Ingnition our app)
  },
  [heading, heading1]
);

// create root using createRoot
<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById("root"));
=======
const root = ReactDOM.createRoot(document.getElementById("root"));   
>>>>>>> 80c038f (Ingnition our app)
// passing react element inside root
root.render(container);