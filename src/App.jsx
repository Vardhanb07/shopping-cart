import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  let obj = {};
  for (let i = 1; i <= 20; i++) {
    obj[i] = 0;
  }
  const [itemsCount, setItemsCount] = useState(obj);
  const [data, setData] = useState([]);
  obj = {};
  for (let i = 1; i <= 20; i++) {
    obj[i] = false;
  }
  const [itemsDisplay, setItemsDisplay] = useState(obj);
  return (
    <div className="flex flex-col h-full">
      <Nav />
      <Outlet
        context={{
          itemsCount: [itemsCount, setItemsCount],
          data: [data, setData],
          itemsDisplay: [itemsDisplay, setItemsDisplay],
        }}
      />
    </div>
  );
};

export default App;
