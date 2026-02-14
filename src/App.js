
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

import React , {lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";  // here we also import like import Header from "./components/Header.js"
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";


// const parent = React.createElement("div" , 
//     {id: parent} , 
//     React.createElement("div" , {id:child}, [
//     React.createElement("h1" , {} , "I'm an h1 tag"),  // if we want add sibling we create array of that 
//     React.createElement("h2" ,{} ,"I'm in h2 tag"
//     )]
//     ));



// creating H1 tag using react and heading variable contain a object (javascript object) , react h1 element
// {} -> contain attributes
// create h1 element using core react
// from now we will never use React.createElement in future
// const heading = React.createElement("h1", 
//         {id: "heading"}, "Hello World from React!");

// // creating root where all DOM perform using ReactDOM
// const root = ReactDOM.createRoot(document.getElementById("root"));

// //render element into root
// root.render(heading);


                  //  <<<<<----------------- LECTURE 2 --------------------->>>>


// JSX -->  create h1 tag using jsx . It is not HTML inside JS it is html like syntx or XML like syntax.
// this is not proper js browser not able to understand this but how then it work bcz of parcel
 //this JSX transpiled before it reaches the JS Engine, it is done by Babel ( package) cones under parcel

 //React Element
// const jsxHeading = (
//     <h1 id = "heading">                 
//     Namaste React using JSX</h1> 
// ); 

    // React Component------>there are two types of component - Class Based Component - OLD , Functional Component - NEW (today use this)

   



    // Functional Component give name as a capital otherwise it give error 
    // A FUNCTION WHICH RETURN REACT ELEMENT(JSX element) IS CALLED FUNCTIONAL COMPONENT

    // to add another component in one component 
    // here we use arrrow function

    // const title = (
    //     <h1 className="head">
    //         Namaste
    //     </h1>
    // )

    // const Title = () => (
    //     <h1 className = "head" tabIndex= "5">
    //         Namaste react
    //     </h1>
    // );

    
      
    // const HeadingComponent = () => (
    //     <div id = "container">
    //       // to put another component inside this component
    //       // Title at the end ek function h js ka aur hm any javascript code ko {} curly bracket mai likh skte h 
    //       {Title()}
    //       <Title />  
    //       <Title></Title>
    //       // to put react element inside component bcz at the end title is javascript variable that contain object 
    //       {title}  
    //       <h1> Namaste React Functional Component</h1> 
    //   </div>
    // )

    // const root1 = ReactDOM.createRoot(document.getElementById("root"));

    // // To render functional component use
    // root.render(<HeadingComponent />)


               // <--------------------   LECTURE 3   ------------------------------->
               

    

// const Header = () => {
//     return (
//         <div className = "header">
//             <div className = "logo-container">
//                 <img className = "logo" src = "https://static.vecteezy.com/system/resources/previews/021/953/308/non_2x/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"/>
//             </div>
//             <div className = "nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Contact Us</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>

//        </div>
          
//     );
// };

// here props is an object
// const RestaurantCard = (props) => {
//     // destructuring of the object--->
//     const { resData} = props;

//     // destructuring the resData---->
//     const {image , name, cuisine , rating , deliveryTime , priceForTwo} = resData;

//     return (
//         <div className= "res-card" style = {{ backgroundColor: "#f0f0f0"}}>
//             <img 
//              className = "res-logo"
//              alt="res-logo"
//              src = {image}/>
//             <h3>{name}</h3>
//             <h4>{cuisine.join(",")}</h4>
//             <h4>{rating}</h4>
//             <h4>{deliveryTime} minutes</h4>
//             <h4>{priceForTwo} FOR TWO</h4>
//         </div>
//     );
// };

// const resList = [{
    
//     "id": 201,
//     "name": "Meghana Foods",
//     "cuisine": ["Biryani", "South Indian"],
//     "rating": 4.5,
//     "deliveryTime": "30-35 ",
//     "priceForTwo": 400,
//     "offer": "50% OFF",
//     "image": "https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg?fit=around|750:500&crop=750:500;*,*"
  
// },
// {
//     "id": 202,
//     "name": "Burger King",
//     "cuisine": ["Burger", "Fast Food"],
//     "rating": 4.2,
//     "deliveryTime": "25-30 mins",
//     "priceForTwo": 350,
//     "offer": "Buy 1 Get 1",
//     "image": "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png"
//   },
//   {
//     "id": 203,
//     "name": "Domino's Pizza",
//     "cuisine": ["Pizza", "Italian"],
//     "rating": 4.1,
//     "deliveryTime": "20-25 mins",
//     "priceForTwo": 450,
//     "offer": "₹150 OFF",
//     "image": "https://www.dominos.co.in/blog/wp-content/uploads/2019/12/third.jpg"
//   },
//   {
//     "id": 204,
//     "name": "Haldiram's",
//     "cuisine": ["North Indian", "Snacks"],
//     "rating": 4.4,
//     "deliveryTime": "35-40 mins",
//     "priceForTwo": 300,
//     "offer": "Flat ₹75 OFF",
//     "image": "https://media.istockphoto.com/id/507796111/photo/pakistani-mithai-4.jpg?s=612x612&w=0&k=20&c=9YtvQ9huwpI_zkCH1xEzD12YbiJfiCw-L0aoaPup8Hg="
//   },
//   {
//     "id": 205,
//     "name": "Natural Ice Cream",
//     "cuisine": ["Desserts", "Ice Cream"],
//     "rating": 4.6,
//     "deliveryTime": "30-35 mins",
//     "priceForTwo": 250,
//     "offer": "20% OFF",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQys0Knf35oHlHqfaq3JmwMmeRxurGgLkwe5zeLwG2Ygw&s"
//   },
// {
//     "id": 206,
//     "name": "KFC",
//     "cuisine": ["Fried Chicken", "Fast Food"],
//     "rating": 4.0,
//     "deliveryTime": "25-30 mins",
//     "priceForTwo": 400,
//     "offer": "40% OFF up to ₹120",
//     "image": "https://i.ytimg.com/vi/3CVDrAkhDmI/maxresdefault.jpg"
//   },
//   {
//     "id": 207,
//     "name": "Subway",
//     "cuisine": ["Healthy", "Sandwich"],
//     "rating": 4.3,
//     "deliveryTime": "30-35 mins",
//     "priceForTwo": 350,
//     "offer": "Flat ₹100 OFF",
//     "image": "https://media.gettyimages.com/id/1942282324/photo/crystal-river-florida-image-gallery-includes-subway-restaurant-interior-and-exterior-images.jpg?s=612x612&w=gi&k=20&c=InmRLpo-1CrhfsfkvBTOiv78OCaX9EN4OCPwpxZKKhA="
//   },
//   {
//     "id": 208,
//     "name": "Barbeque Nation",
//     "cuisine": ["BBQ", "North Indian"],
//     "rating": 4.4,
//     "deliveryTime": "40-45 mins",
//     "priceForTwo": 600,
//     "offer": "20% OFF",
//     "image": "https://b.zmtcdn.com/data/pictures/5/19631115/6165c4eaa2cc6b2cd8868507847f973d.jpg?fit=around|960:500&crop=960:500;*,*"
//   },
//   {
//     "id": 209,
//     "name": "Wow! Momo",
//     "cuisine": ["Momos", "Chinese"],
//     "rating": 4.1,
//     "deliveryTime": "20-25 mins",
//     "priceForTwo": 300,
//     "offer": "Buy 2 Get 1",
//     "image": "https://chompslurrpburp.files.wordpress.com/2017/02/dsc_0664.jpg"
//   }]



// const Body = () => {
//     return (
//         <div className = "body">
//             <div className = "Search">Search</div>
//             <div className ="res-container">
//              {/* here we use map function to loop over the array OF restaurant card ---> */}
//              {/* here we give key to each child so that react can make difference in each child key by identify using key = {restaurant.id} . it should be unique */}
//              {/* here we also use indexf or position (0,1,2...) at (restaurant , index ) and do not use index as a key , we can use if there is not a unique key but prefer to not use */}
//                {resList.map((restaurant) => (
//                 <RestaurantCard key = {restaurant.id} resData = {restaurant}/>
//                ))}
                
//             </div>
//         </div>
//     );
// };

// here import is a function that take the path of grocery where it come from ---->
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
    return (
        <div className = "app">
          < Header/>
          < Outlet/>

        </div>
    );
};



// Routing configuration in appRouter- mtlb kisi bhi url pe jane ke baad kiya hoga
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
        {
            path: "/",
            element: <Body />
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
       }, 

       {
            path: "/grocery",
            element: <Suspense fallback={<h1>Loading......</h1>}>
                <Grocery />
                </Suspense>,
       }, 
       {
        // here jo : colon lgaya h :resId iska mtlb ye dynamic it can be change
           path: "/restaurants/:resId",
           element:  <RestaurantMenu />,  
       },
        ],
        // Handling error using customer error component--->
        errorElement: <Error />
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

    
//Rendering router in root using RouterProvider----->
root.render(<RouterProvider router = {appRouter} />);

