import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

// two types of import -> default and named.   -> In named import we have to give curly braces and what we are exporting should be exported by named exports.
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-conatiner">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
        {/* 1 ghnata 33 minute se dekhna hai */}
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
