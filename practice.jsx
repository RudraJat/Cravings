/**
 * <div>
 *  <div>
 *    <h2>Hello World!</h2>
 *    <h3>Hello World!</h3>
 *  </div>
 * </div>
 */


const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [
            React.createElement("h2",{id:"heading"},"Hello World!"),
            React.createElement("h3",{id:"sibling"},"this is sibling")
        ]
    )
);


//FUNCTIONAL COMPONENT
const Heading = ()=>{
    return <h1>Namaste react functional component</h1>
};

// const heading = React.createElement("h1", {id: "heading"}, "Welcome to React");

const root = ReactDOM.createRoot(document.getElementById("root"));

//FOR RENDERING FUNCTIONAL COMPONENT
root.render(<Heading />);
root.render(parent);
