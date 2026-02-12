import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

    // State Variable - Super powerful variable , it maintain the state of a component
    // setRestaurant is a function which is used to modify state variable and state variable contains a filtered restaurants and it automatically triggers re -rendering that why 2 parameter rkha h ------>
    // whenever state variable update react re-render the components 
    // the logic of updating the UI is called re-render 
    const [restaurants , setRestaurant] = useState([]);
    const [filteredRestaurant , setFilteredRestaurant] = useState([]);

    const [searchText , setSearchText] = useState("");

    useEffect(() => {
       fetchData();
    } , []);  // it take two argument 1. callback function , 2. dependency array . It is called  after the all components renders. [] isko blank chodne pe ye hota h 

    const fetchData = async () => {
        const api1 = "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40980&lng=77.31000&collection=80382&tags=layout_CCS_CholeBhature&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        const api2 = "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40980&lng=77.31000&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        // const api3 = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.40980&lng=77.31000&restaurantId=34419&catalog_qa=undefined&query=Chole%20Bhature&submitAction=ENTER"
        const [res1, res2, res3] = await Promise.all([fetch(api1), fetch(api2)]);
        const json1 = await res1.json();
        const json2 = await res2.json();
        // const json3 = await res3.json();
        console.log(json1);
        console.log(json2);
        // console.log(json3)

        const restaurants1 = json1?.data?.cards
         ?.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
         ?.map(c => c.card.card);

        const restaurants2 = json2?.data?.cards
         ?.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
         ?.map(c => c.card.card);

        setRestaurant([...restaurants1, ...restaurants2]);
        setFilteredRestaurant([...restaurants1, ...restaurants2]);
   
    

    };


    // // Conditional Rendering
    // if(restaurants.length === 0){
    //     return <Shimmer />;
    // }


    // this is also conditional rendering , (ternary operator)
    return restaurants.length === 0 ? <Shimmer /> :(
        <div className = "body">
            <div className = "filter">
                <div className = "search">
                    {/* here I bind the input value to the searchText( state variable )  */}
                    <input 
                    type="text" 
                    className = "search-box" 
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/> 
                    <button onClick={() =>{
                      // Filter the restaurant cards and update the UI

                      const filteredRestaurant = restaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                           
                    setFilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>

                <button className = "filter-btn" 
                 onClick = {() => {
                    setRestaurant(restaurants.filter(
                        (res) => res.info.avgRating > 4
                    ));
                    
                }}
                >
                Top Rated Restaurants</button>
            </div>

            <div className ="res-container">
             {/* here we use map function to loop over the array OF restaurant card ---> */}
             {/* here we give key to each child so that react can make difference in each child key by identify using key = {restaurant.id} . it should be unique */}
             {/* here we also use indexf or position (0,1,2...) at (restaurant , index ) and do not use index as a key , we can use if there is not a unique key but prefer to not use */}
               {filteredRestaurant.map((restaurant) => (
                // <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
                <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`} >
                         <RestaurantCard resData={restaurant} />
                </Link>
               ))}
                
            </div>
        </div>
    );
};

export default Body;