import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="shop">shop</Link>
      <Link to="contacts">contacts</Link>
    </div>
  );
};

export default Nav;
