import App from "./App";
import Contacts from "./components/Contacts";
import Shop from "./components/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "contacts",
    element: <Contacts />,
  },
];

export default routes;
