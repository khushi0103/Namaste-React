import {useState , useEffect} from "react";
import MOCK_RESTAURANTS from "./mockMenu";

// This is a custom hook which return restaruantMenu to RestaruantMenu.js file 
// bcz due to single responsibility principle RestaruantMenu.js- its only job to returnm menu dont car about fetching and all that , that's why we create custom hook for fetching.
const useRestaurantMenu = (resId) => {

    const [resInfo , setResInfo] = useState(null);
     // fetchdata

    
    useEffect(() => {
    const restaurant = MOCK_RESTAURANTS.find(
      (res) => res.id === resId
    );

    setResInfo(restaurant);
  }, [resId]);  // dependency

   // THIS IS USED WHEN WE CALL OUTSIDE API 
    //  useEffect(() => {
    //      fetchData();
    //  }, []);

    // const fetchData = async () => {
    //     const data = await fetch("");

    //     const json = await data.json();
    //     setResInfo(json.data);
    // };



    return resInfo;
}

export default useRestaurantMenu;