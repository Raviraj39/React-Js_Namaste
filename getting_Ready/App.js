import React from "react";
import { createRoot } from "react-dom/client";

//React Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, React!"
);

// JSX => react element =>createElement() => HTML element (rendered in the browser)

// const jsxheading = <h1 id="heading">Hello, React with JSX!</h1>;

const Title = () => (
  <h1 id="heading">Hello, React with JSX!</h1>
);
// React functional Component
const MyComponent = () => (
  <div>
   <Title />
   <h1>Hello, React functional component!  </h1>;
   </div>
);

//component composition
// using a component inside another component
const MyComponent2 = () => (
  <div>
    {Title()}
   <Title />
   <Title></Title>
   <h1>Hello, React functional component!  </h1>;
   </div>
);
//{Title()}
//  <Title />
//  <Title></Title>
// this all are same 


const root = createRoot(document.getElementById("root"));
root.render(<MyComponent2 />);
