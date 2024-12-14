import React from "react";
import { Link, Outlet } from "react-router";
import { HEADER_LOGO } from "../utils/constants";
import { useSelector } from "react-redux";
const Header = () => {
  const photoURL = useSelector((store) => store.user.userDetails.photoURL);
  return (
    <>
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
            <li>
              <Link to="/logout" className="link">
                <div className="logout-fn">
                  <img
                    src={photoURL}
                    width="30px"
                    height="30px"
                    alt="food-logo"
                    style={{ borderRadius: "2px", objectFit: "cover" }}
                  />
                  Logout
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
