import React, { useState } from "react";
import Item from "./Item";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
const RestaurantCategory = ({ category }) => {
  const { title, itemCards } = category;
  const [showItem, setShowItem] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "14px",
      }}
    >
      <div className="item-container">
        <button className="item-btn" onClick={() => setShowItem(!showItem)}>
          <div>{title}</div>
          <div>{showItem ? <HiChevronUp /> : <HiChevronDown />}</div>
        </button>
        {showItem
          ? itemCards.map(({ card }) => <Item item={card} key={card.info.id} />)
          : null}
      </div>
    </div>
  );
};

export default RestaurantCategory;
