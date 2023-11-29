import { CDN_URL } from "../utils/constants";
// import { useContext } from "react";
// import UserContext from "../utils/UserContext"

const styleCard = {
  backgroundColor: "beige",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  // const {loggedInUser} = useContext(UserContext);

  return (
    <div className="w-[15rem] flex space-x-4 border-2 border-black rounded-lg">
      <div className="res-card w-64 ">
        <img
          className="res-logo w-full h-40 rounded-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="text-lg font-bold py-2 mx-3">{name}</h3>
        <h4 className="mx-3">{cuisines[0]}</h4>
        <h4 className="mx-3">{avgRating} Star</h4>
        <h4 className="mx-3">{costForTwo}</h4>
        <h4 className="mx-3">{deliveryTime} Minutes</h4>
        {/* <h4 className="mx-3">{loggedInUser}</h4> */}
      </div>
    </div>
  );
};

// Higher order component (input -> component, output -> restaurant carc having best seller tag on card)
export const withBestSellerTag = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="relative top-6 bg-orange-600 rounded-md text-sm text-white w-[100px] mx-1 p-1">Best Seller</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
