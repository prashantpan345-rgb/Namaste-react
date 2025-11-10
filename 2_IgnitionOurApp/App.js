// if I want to create a div with two headings inside it using react
// Create nested React Elements
const container = React.createElement(
  "div",                              // type of element
  {                                   // props (attributes)
    id: "container",
    style: { background: "red" }
  },
  [heading1, heading2]                // children (can be array or single element)
);


// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);