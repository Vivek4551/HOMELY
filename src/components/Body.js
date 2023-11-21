import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// not using keys (not acceptable) <<<<< index as keys <<<<<< unique id (best practice)
const Body = () => {
  // Local state variable
  // whenever a
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); 
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2548238&lng=75.7001618&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering
  if(filteredRestaurant.length === 0) {
    return (
      <>
        <h1>No Restaurant Found ......</h1>
      </>
    );
  };

  return listOfRestaurant.length === 0 ? (<Shimmer />) : 
  (
    <div className="body">
      <div className="filter">
        {/* {console.log("Body rendered again")} */}
        <div className="search">
          <input
            type="text"
            placeholder="Search for a restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              const filteredRestList = listOfRestaurant.filter((restaurant) =>
                restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const fileteredList = listOfRestaurant.filter(
              (resData) => resData?.info.avgRating > 4
            );
            setListOfRestaurant(fileteredList);
          }}
        >
          Top Rated Restaurant
        </button>

      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
