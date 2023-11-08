import React from "react";
import ReactDOM  from "react-dom/client";

// if we want to pass more than one children then we have to pass it like an array
const parent = React.createElement(
    "div", 
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},[
        React.createElement("h1",{},"This is Namaste React 🚀"), 
        React.createElement("h2",{},"I am H2 tag")
    ])
);


// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello World Using React!"
// );

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);