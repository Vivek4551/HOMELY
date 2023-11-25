import { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// two types of import -> default and named.   -> In named import we have to give curly braces and what we are exporting should be exported by named exports.
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header z-20 top-0 flex justify-between items-center sticky backdrop-blur-lg bg-opacity-30 border-2 border-black m-1">

      <div className="logo-conatiner w-28">
        <img className="logo" src={Logo} loading="lazy" />
      </div>

      <div className="nav-items flex m-4 ">
        <ul className="flex space-x-14 m-4 p-4 justify-around text-xl text-red-700">
          <li>Online Status : {onlineStatus ? "✅" : "❌"}</li>
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
        </ul>
      </div>

      <div className="btn-log">
        <button
          className="btn bg-blue-500 hover:bg-blue-700 text-white w-24 h-14  rounded-lg "
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>

    </div>
  );
};

export default Header;
