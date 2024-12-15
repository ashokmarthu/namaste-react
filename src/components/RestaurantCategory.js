import React, { useState } from "react";
import Item from "./Item";
const RestaurantCategory = ({ category }) => {
  const { title, itemCards } = category;
  const [showItem, setShowItem] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:"14px"
      }}
    >
      <div className="item-container">
        <button className="item-btn" onClick={() => setShowItem(!showItem)}>
          <div>{title}</div>
          <div>Downward</div>
        </button>
        {showItem ? itemCards.map((card) => <Item item={card.card} />) : null}
      </div>
    </div>
  );
};

export default RestaurantCategory;
