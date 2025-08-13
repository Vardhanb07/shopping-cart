import { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });
  return (
    <div className="flex-4 grid grid-rows-20 grid-cols-1 m-2 gap-3 sm:grid-rows-10 sm:grid-cols-2 lg:grid-rows-6 lg:grid-cols-3 2xl:grid-rows-5 2xl:grid-cols-4">
      {data.map((productData) => {
        return (
          <Product
            data={productData}
            key={productData["id"]}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        );
      })}
    </div>
  );
};

export default Home;
