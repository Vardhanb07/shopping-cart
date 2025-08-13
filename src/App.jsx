import Nav from "./components/Nav";
import Home from "./components/Home"

const App = () => {
  return (
    <div className="flex flex-col h-full">
      <Nav />
      <Home />
    </div>
  );
};

export default App;
