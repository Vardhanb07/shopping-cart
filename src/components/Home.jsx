import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Product from "./Product";

const Home = () => {
  const { itemsCount, data, itemsDisplay } = useOutletContext();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productData) => {
        data[1](productData);
      });
  }, [data]);
  return (
    <div className="flex-4 grid grid-rows-20 grid-cols-1 m-2 gap-3 sm:grid-rows-10 sm:grid-cols-2 lg:grid-rows-6 lg:grid-cols-3 2xl:grid-rows-5 2xl:grid-cols-4">
      {data[0].map((productData) => {
        return (
          <Product
            data={productData}
            key={productData["id"]}
            itemsCount={itemsCount[0]}
            setItemsCount={itemsCount[1]}
            itemsDisplay={itemsDisplay[0]}
            setItemsDisplay={itemsDisplay[1]}
          />
        );
      })}
    </div>
  );
};

export default Home;
