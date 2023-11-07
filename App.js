/*
`   how to create nested elements ?
    <div id="parent">
        <div id="child">
            <h1>I'm H1 tag</h1>
        </div>
    </div>
*/

// const parent = React.createElement(
//     "div", 
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("h1",{},"I'm H1 tag")
//     )
// );

/*
`   how to create nested elements along with siblngs?
    <div id="parent">
        <div id="child">
            <h1>I'm H1 tag</h1>
            <h2>I'm H@ tag</h2>
        </div>
    </div>
*/
// if we want to pass more than one children then we have to pass it like an array
const parent = React.createElement(
    "div", 
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},[
        React.createElement("h1",{},"I'm H1 tag"), 
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