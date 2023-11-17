import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

// not using keys (not acceptable) <<<<< index as keys <<<<<< unique id (best practice)
const Body = () => {
  // Local state variable
  // whenever a 
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const fileteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(fileteredList);
            // console.log(listOfRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
