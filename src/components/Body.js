import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_DETAIS_API } from "../utils/constants";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resDetails, setResDetails] = useState([]);
  const fillArray = new Array(30).fill(0);
  const fetchResDetails = async () => {
    try {
      const res = await fetch(RESTAURANT_DETAIS_API);
      const data = await res.json();
      setResDetails(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (err) {
      console.log(err, "err");
    }
  };

  useEffect(() => {
    fetchResDetails();
  }, []);

  return (
    <div className="body">
      <div className="search">
        <div>
          <input
            type="text"
            className="search-input"
            placeholder="search for restuarants"
          />
          <button className="btn">search</button>
        </div>
      </div>
      <div className="res-container">
        {resDetails.length > 0
          ? resDetails.map((details) => <RestaurantCard data={details.info} />)
          : fillArray.map((i, index) => <Shimmer />)
          }
      </div>
    </div>
  );
};

export default Body;
