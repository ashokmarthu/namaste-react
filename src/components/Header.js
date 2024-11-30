import React from "react";
import Logout from "./Logout";
import { Link } from "react-router";
import { HEADER_LOGO } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img
          src={HEADER_LOGO}
          width="70px"
          height="70px"
          alt="food-logo"
          className="header-img"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/cart" className="link">
              Cart
            </Link>
          </li>
        </ul>
      </div>
      <Logout />
    </div>
  );
};

export default Header;
