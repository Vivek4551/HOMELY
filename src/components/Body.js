import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

  // conditional rendering if restaurant list is empty
  // if(filteredRestaurant.length === 0) {
  //   return (
  //     <>
  //       <h1>No Restaurant Found ......</h1>
  //     </>
  //   );
  // };


  const onlineStatus = useOnlineStatus();

  if(!onlineStatus) {
    return (
      <div className="body">
        <h1>Looks like you are offline ! Please check your online status</h1>
      </div>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body w-[100vw] flex flex-col items-center gap-3">
      <div className="filter">
        {/* search bar */}
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
              if (searchText === "") {
                setFilteredRestaurant(listOfRestaurant);
                return;
              }
              const filteredRestList = filteredRestaurant.filter((restaurant) =>
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
            const fileteredList = filteredRestaurant.filter(
              (resData) => resData?.info.avgRating > 4
            );
            // console.log(fileteredList);
            setFilteredRestaurant(fileteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container  flex flex-wrap  gap-3 mx-3">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
