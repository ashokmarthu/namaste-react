import React from "react";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { categoryInfo } = useRestaurantMenu(229);
  if (!categoryInfo) return "Loading";
  return (
    <div className="body">
      {categoryInfo.map((category) => (
        <RestaurantCategory category={category} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
