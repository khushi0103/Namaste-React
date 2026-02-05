
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
// create h1 element using core react
// from now we will never use React.createElement in future
const heading = React.createElement("h1", 
        {id: "heading"}, "Hello World from React!");

// creating root where all DOM perform using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

//render element into root
root.render(heading);


                  //  <<<<<----------------- LECTURE 2 --------------------->>>>


// JSX -->  create h1 tag using jsx . It is not HTML inside JS it is html like syntx or XML like syntax.
// this is not proper js browser not able to understand this but how then it work bcz of parcel
 //this JSX transpiled before it reaches the JS Engine, it is done by Babel ( package) cones under parcel

 //React Element
const jsxHeading = (
    <h1 id = "heading">                 
    Namaste React using JSX</h1> 
); 

    // React Component------>there are two types of component - Class Based Component - OLD , Functional Component - NEW (today use this)

   



    // Functional Component give name as a capital otherwise it give error 
    // A FUNCTION WHICH RETURN REACT ELEMENT(JSX element) IS CALLED FUNCTIONAL COMPONENT

    // to add another component in one component 
    // here we use arrrow function

    const title = (
        <h1 className="head">
            Namaste
        </h1>
    )

    const Title = () => (
        <h1 className = "head" tabIndex= "5">
            Namaste react
        </h1>
    );

    
      
    const HeadingComponent = () => (
        <div id = "container">
          // to put another component inside this component
          // Title at the end ek function h js ka aur hm any javascript code ko {} curly bracket mai likh skte h 
          {Title()}
          <Title />  
          <Title></Title>
          // to put react element inside component bcz at the end title is javascript variable that contain object 
          {title}  
          <h1> Namaste React Functional Component</h1> 
      </div>
    )

    const root1 = ReactDOM.createRoot(document.getElementById("root"));

    // To render functional component use
    root.render(<HeadingComponent />)

