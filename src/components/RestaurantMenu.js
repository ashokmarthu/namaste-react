import React from "react";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const { categoryInfo } = useRestaurantMenu(resId);
  if (!categoryInfo) return "Loading";
  return (
    <div className="res-menu">
      {categoryInfo.map((category) => (
        <RestaurantCategory category={category} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
