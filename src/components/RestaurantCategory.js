import ItemList from "./ItemList";


const RestaurantCategory = ({ data, showIndex, setShowIndex, index }) => {
  // here const {data} = props;
  // we are destructuring the props object and getting the data property from it
  // console.log(data);
  const handleClick = () => {
    showIndex ? setShowIndex(null) : setShowIndex(index);
  };

  return (
    <div className="restaurant-category">
      {/* Header of Accordian */}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordian Body */}
        {showIndex && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
