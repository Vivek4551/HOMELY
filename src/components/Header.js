import { LOGO_URL } from "../utils/constants";

// two types of import -> default and named.   -> In named import we have to give curly braces and what we are exporting should be exported by named exports.
const Header = () => {
  return (
    <div className="header">
      <div className="logo-conatiner">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
