import React from "react";
import ReactDOM from "react-dom/client";
/**
 * <div>
 *  <div>
 *    <h2>Hello World!</h2>
 *    <h3>Hello World!</h3>
 *  </div>
 * </div>
 */


// const parent=React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         [
//             React.createElement("h2",{id:"heading"},"Hello World!"),
//             React.createElement("h3",{id:"sibling"},"this is sibling")
//         ]
//     )
// );


const Title = () =>(
        <h1>This is COMPONENT COMPOSITION</h1>

);

//FUNCTIONAL COMPONENT
const Heading = ()=>(
    <div>

    {/* COMPONENT COMPOSITION */}
    {/* We can use any of this way to call a function inside a component */}
    <Title/>
    {Title()}
    <Title></Title>

    {/* Like this we can use JS inside of JSX */}
    <h2>{300+200}</h2>

    <h1>Namaste react functional component</h1>
    </div>
);

// const heading = React.createElement("h1", {id: "heading"}, "Welcome to React");

const root = ReactDOM.createRoot(document.getElementById("root"));

//FOR RENDERING FUNCTIONAL COMPONENT
root.render(<Heading />);
// root.render(parent);
