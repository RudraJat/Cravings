import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", { id: "heading", key: "1" }, "Hello World!"),
    React.createElement("h3", { id: "sibling", key: "2" }, "this is sibling"),
  ])
);

// const heading = React.createElement("h1", {id: "heading"}, "Welcome to React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
