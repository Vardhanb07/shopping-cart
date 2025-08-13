import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";

const Nav = () => {
  return (
    <div className="flex-1 flex flex-row text-4xl p-3 bg-[#0000006f]">
      <div className="flex-3 flex justify-center items-center">
        <Link to="shop">Shop</Link>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Link to="cart">
          <img src={cart} alt="cart" className="h-9 w-9" />
        </Link>
      </div>  
    </div>
  );
};

export default Nav;
