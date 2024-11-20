import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img
          src="https://foodfire-app.netlify.app/foodFireLogo.adc19524.png"
          width="70px"
          height="70px"
          alt="food-logo"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li className="">
            <AiOutlineUser width="24px" height="24px" />
            SignIn
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
