import { useState } from "react";

const Product = ({ data, cartItems, setCartItems }) => {
  const [itemCount, setItemCount] = useState(0);
  function setElement(itemCount) {
    return itemCount === 0 ? (
      "Add to cart"
    ) : (
      <div className="flex flex-row">
        <p
          className="flex-1 cursor-pointer"
          onClick={() => {
            setItemCount((itemCount) => itemCount - 1);
          }}
        >
          -
        </p>
        <p className="flex-3">{itemCount}</p>
        <p
          className="flex-1 cursor-pointer"
          onClick={() => {
            setItemCount((itemCount) => itemCount + 1);
          }}
        >
          +
        </p>
      </div>
    );
  }
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
            setCartItems((cartItems) => cartItems + 1);
            if (itemCount === 0) {
              setItemCount((itemCount) => itemCount + 1);
            }
          }}
        >
          {setElement(itemCount)}
        </button>
      </div>
    </div>
  );
};

export default Product;
