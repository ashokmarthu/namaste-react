import React from "react";

const RestaurantCard = () => {
  return (
    <div className="rest-card">
      <div className="res-img">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zklivmqduux38pw9ikax"
          alt="rest-logo"
          className="rest-logo"
          height="180px"
        />
      </div>
      <div className="res-content">
        <div className="res-name">Dairy Day Ice Creams & Frozen Desserts</div>
        <div className="res-time">
          <div>*</div>
          <div>4.5 . 15-20 mins</div>
        </div>
        <div className="res-items">
          <div>Ice Cream, Desserts, Ice Cream Cakes</div>
          <div>Btm</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
