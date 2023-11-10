import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

// JSX -> javascript syntax which is easier to create react elements, it is not HTML in JS , it is html like syntax or XML like
// const jsxHeading = (
//   <h1 id="heading" tabIndex="5">
//     Namaste React using JSX!
//   </h1>
// );

// Component -> class based component, Functional based component
// Functional based component -> a javscript function which returns some pieces of jsx or react element is called functional based component
// const headingComponent = () => {
//   return (
//     <h1 id="heading" tabIndex="5">
//       Namaste React from Vivek1!
//     </h1>
//   );
// }

const TitleComponent = () => (
  <h1 id="head" tabIndex="5">
    Namaste React from TitleComponent!
  </h1>
);

const elem = <span>React Element</span>
// react element
const title = (
  <h1 id="head" tabIndex="5">
  {elem}
    Namaste React from title react element!
  </h1>
);

// another way for functional component
// component composition
// const HeadingComponent2 = () => (
//   <div id="container">
//     <TitleComponent />
//     <h1 id="heading" tabIndex="5">
//       Namaste React from Vivek!
//     </h1>
//   </div>
// );

const HeadingReturn = () => {
  return (
    <div id="container">
      <TitleComponent />
      {TitleComponent()}
      <TitleComponent></TitleComponent>
      <h1 id="heading" tabIndex="5">Namaste React from Vivek!</h1>
      {title}
    </div>
  );
}

// console.log(heading);
// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);
// root.render(headingComponent());
// root.render(<HeadingComponent2 />);
root.render(HeadingReturn());
