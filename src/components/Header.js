import { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// two types of import -> default and named.   -> In named import we have to give curly braces and what we are exporting should be exported by named exports.
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-conatiner">
        <img className="logo" src={Logo}
          loading="lazy"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            Online Status : {onlineStatus ? "✅" : "❌" }
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/grcPage">Grocery</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>Cart</li>
          
          <button
            className="btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
