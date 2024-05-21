import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="title">Hello Kellen</h1>; // React Element

const Header = () => {
  return (
    <div>
      <h1>Hello Alex</h1>
      {heading}
      <h1>Lets Build Some Awesome Stuff...</h1>
    </div>
  );mn
};
var str = "In Love With Coding and Development";
const Footer = function () {
  return (
    <>
      <h1>Building Awesome Stuff</h1>
      {Header()}
      <h1>{str}</h1>
      <heading />
    </>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(heading); // Render React Element
root.render(<Footer />); // Render React Component

/*
 * Babel uses React.createElement behind the scenes.It Comes along with the Parcel.
 * JSX Developed by fb developers
 * Importance of JSX:
 * JSX is very secure. It does sanitization of Code.
 * Component Composition -> Composing/Passing Component inside a component.
 *Developer Experience(Developer Friendly)
 *Readability
 *Less Code
 *Mainatainability
 * Node Modules Contains and maintains the version of the transitive Dependencies.
  -> Component
   * Functional :: NEW way of writing Component
      * Its Nothing but a JS function that returns a some piece of JSX or reactElement.
   * Class :: OLD way of Writing Component
   * React.createElement -> Js Object -> ReactDOM convert to HTML Code -> and puts it upon on the DOM
 */
