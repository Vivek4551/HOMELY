import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const disptach = useDispatch();

  const handleAddItem = (item) => { 
    // disptach an action
    disptach(addItem(item));
  }; 

  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-md relative top-3">
                {item.card.info.description}
              </p>
            </div>
          </div>
          <div className="p-4 w-3/12">
            <div className="absolute flex">
              <button className="p-2 mx-16 text-black bg-white shadow-lg rounded-lg "
              onClick = {() => handleAddItem(item)} >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} alt="dishImage" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
