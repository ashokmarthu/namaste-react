import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_DETAIS_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
const Body = () => {
  const [resDetails, setResDetails] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchedText, setSearchedText] = useState("");
  const fillArray = new Array(30).fill(0);
  const fetchResDetails = async () => {
    try {
      const res = await fetch(RESTAURANT_DETAIS_API);
      const data = await res.json();
      setResDetails(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
      setFilteredRes(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.log(err, "err");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      const data = filteredRes.filter((res) =>
        res.info.name.toLowerCase().includes(searchedText.toLowerCase())
      );
      if (searchedText.length) setFilteredRes(data);
      else setFilteredRes(resDetails);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchedText]);

  useEffect(() => {
    fetchResDetails();
  }, []);

  return (
    <div className="body">
      <div className="search">
        <div>
          <label htmlFor="searchText" />
          <input
            type="text"
            id="searchText"
            name="searchText"
            value={searchedText}
            className="search-input"
            placeholder="search for restuarants"
            onChange={(e) => setSearchedText(e.target.value)}
          />
          <button className="btn">search</button>
        </div>
      </div>
      <div className="res-container">
        {loading ? (
          fillArray.map((i, index) => <Shimmer key={index * Math.random()} />)
        ) : filteredRes.length ? (
          filteredRes.map((restaurant) => (
            <Link to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard data={restaurant.info} />
            </Link>
          ))
        ) : (
          <p>No Results Found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
