import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";
import { RESTAURANT_DETAIS_API } from "../utils/constants";
const Body = () => {
  const [resDetails, setResDetails] = useState([]);

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
        {resDetails.map((details) => (
          <RestaurantCard data={details.info} />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Body;
