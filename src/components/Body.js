import RestaurantCard, { withBestSellerTag } from "./RestaurantCard";
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

  // Higher Order function
  const RestaurantCardBestSeller = withBestSellerTag(RestaurantCard);

  console.log("Body rendered", listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json);
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

  if (!onlineStatus) {
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
        <div className="search flex items-center">
          <input
            type="text"
            placeholder="Search for a restaurant"
            value={searchText}
            className="border-2 border-black rounded-md w-48 h-8 p-2"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn  bg-blue-500 hover:bg-blue-700 text-white p-1 m-1 rounded-lg text-sm w-24"
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

          <button
          className="filter-btn bg-orange-500 hover:bg-orange-700 text-white p-1 m-2 rounded-lg text-sm w-48"
          onClick={() => {
            const fileteredList = filteredRestaurant.filter(
              (resData) => resData?.info.avgRating >= 4.2
            );
            console.log(fileteredList);
            setFilteredRestaurant(fileteredList);
          }}
        >
          Top Rated Restaurant
        </button>

        </div>

      </div>

      <div className="res-container  flex flex-wrap  gap-3 mx-5 items-end">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* if the restaurant is having avg rating more tha 4 the  add a best seller tag to it (HOC) */}
            {restaurant.info.avgRating >= 4.2 ? (
              <RestaurantCardBestSeller resData={restaurant}/>
            ) : (
              <RestaurantCard resData={restaurant}/>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
