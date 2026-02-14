
import { useParams } from "react-router-dom";
import { SWIGGY_IMAGE_URL} from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

 
 const RestaurantMenu = () => {

    //  useParams is a object that why we can destructure its data
     const { resId } = useParams();

     const restaurant = useRestaurantMenu(resId)
     const info = restaurant?.info;
     const menu = restaurant?.menu;

     if (!restaurant) {
     return <h2>Restaurant Not Found</h2>;
  }

    //  useEffect(() => {
    //     fetchMenu();
    //  }, []);

    //  const fetchMenu = async () => {
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.40980&lng=77.31000&restaurantId=34419&catalog_qa=undefined&query=Chole%20Bhature&submitAction=ENTER");
     
    //     const json = await data.json();
    //     console.log(json);

    //  };

    
 return (
  <div className="menu">
    <h1>{info?.name}</h1>

    {menu?.categories?.map((category, index) => (
      <div key={index}>

        <h2 style = {{textAlign : "center"}}>{category.title}</h2>

        {category.itemCards?.map((item) => (
          <div key={item.id} className="menu-item">

            <div className="menu-text">
              <h3>{item.name}</h3>
              <p>₹ {item.price}</p>
              <p>{item.rating} ⭐ ({item.ratingCount})</p>
              <p>{item.description}</p>
            </div>

            <img
              className="res-logo"
              alt="res-logo"
              src=
                {SWIGGY_IMAGE_URL + item.imageId }
              
            />

          </div>
        ))}

      </div>
    ))}

  </div>
    );

    
 }

export default RestaurantMenu;