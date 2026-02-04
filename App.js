
                     //  <<<<<<--------- LECTURE 1----------->>>>>>


// when nested element is created this is how it is created again parent is a object
// for example ->  <div id="parent">
//                      <div id="child">
//                         <h1>I'am in h1 tag</h1>
//                         <h2>I'm in h2 tag</h2>
//                      </div>
//                      </div>


                   // As we can see creating nested element make thing complex
                   //   when we create like this that's why we -----JSX------study in next lecture

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div" , 
    {id: parent} , 
    React.createElement("div" , {id:child}, [
    React.createElement("h1" , {} , "I'm an h1 tag"),  // if we want add sibling we create array of that 
    React.createElement("h2" ,{} ,"I'm in h2 tag"
    )]
    ));



// creating H1 tag using react and heading variable contain a object (javascript object) , react h1 element
// {} -> contain attributes
const heading = React.createElement("h1", 
        {id: "heading"}, "Hello World from React!");

// creating root where all DOM perform using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

//render element into root
root.render(heading);


                  //  <<<<<----------------- LECTURE 2 --------------------->>>>

