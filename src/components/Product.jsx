import PropTypes from "prop-types";

const Product = ({
  data,
  itemsCount,
  setItemsCount,
  itemsDisplay,
  setItemsDisplay,
}) => {
  return (
    <div className="flex flex-wrap flex-col gap-2 border-1 border-[#00000076] p-2 rounded-md shadow-lg">
      <div className="flex-1 flex flex-col justify-center items-center">
        <img src={data["image"]} alt={data["title"]} className="h-35 w-40" />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <p className="flex-1 text-lg">{data["title"]}</p>
        <p className="flex-1 text-lg">Price: #{data["price"]}</p>
        <p className="flex-1 text-lg">Rating: {data["rating"]["rate"]}</p>
        <button
          className="flex-1 bg-[#0000005d] rounded-m d cursor-pointer text-xl p-1 rounded-md"
          onClick={() => {
            if (!itemsDisplay[data["id"]] && itemsCount[data["id"]] === 0) {
              let obj = itemsDisplay;
              obj[data["id"]] = true;
              setItemsDisplay(obj);
              obj = itemsCount;
              obj[data["id"]]++;
              setItemsCount(obj);
            } else if (
              itemsCount[data["id"]] === 0 &&
              itemsDisplay[data["id"]]
            ) {
              let obj = itemsDisplay;
              obj[data["id"]] = false;
              setItemsDisplay(obj);
            }
          }}
        >
          <p className={`${itemsDisplay[data["id"]] ? "hidden" : "inline"}`}>
            Add to cart
          </p>
          <div
            className={`${
              itemsDisplay[data["id"]] ? "flex" : "hidden"
            } flex-row`}
          >
            <p
              className="flex-1 cursor-pointer"
              onClick={() => {
                let obj = itemsCount;
                obj[data["id"]]--;
                setItemsCount(obj);
              }}
            >
              -
            </p>
            <p className="flex-3">{itemsCount[data["id"]]}</p>
            <p
              className="flex-1 cursor-pointer"
              onClick={() => {
                let obj = itemsCount;
                obj[data["id"]]++;
                setItemsCount(obj);
              }}
            >
              +
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

Product.PropTypes = {
  data: PropTypes.object,
  itemsCount: PropTypes.object,
  setItemsCount: PropTypes.func,
  itemsDisplay: PropTypes.object,
  setItemsDisplay: PropTypes.func,
};

export default Product;
