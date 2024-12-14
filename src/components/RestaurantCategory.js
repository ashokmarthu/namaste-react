import React, { useState } from "react";
import Item from "./Item";
const RestaurantCategory = ({ category }) => {
  const { title, itemCards } = category;
  const [showItem, setShowItem] = useState(false);
  return (
    <div>
      {showItem ? (
        itemCards.map((card) => <Item item={card.card} />)
      ) : (
        <button onClick={() => setShowItem(!showItem)}> {title} </button>
      )}
    </div>
  );
};

export default RestaurantCategory;
