import { useOutletContext } from "react-router-dom";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { itemsCount, data } = useOutletContext();
  function displayPrice(itemsCount, data) {
    let price = 0;
    Object.entries(itemsCount).forEach(([key, value]) => {
      if (value !== 0) {
        price += data[key - 1]["price"];
        price *= value;
      }
    });
    return price;
  }

  return (
    <div className="flex flex-col p-2">
      <div className="flex flex-col gap-1">
        <p className="text-xl text-center">
          Total Price: #{displayPrice(itemsCount[0], data[0])}
        </p>
        <button className="text-lg bg-[#08080863] p-1 rounded-md">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
