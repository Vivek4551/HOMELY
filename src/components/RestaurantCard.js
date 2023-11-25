import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "beige",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

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
      </div>
    </div>
  );
};

export default RestaurantCard;
