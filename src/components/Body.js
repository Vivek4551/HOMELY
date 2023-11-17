import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

// not using keys (not acceptable) <<<<< index as keys <<<<<< unique id (best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">Search</div>

      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
