import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
import { useSelector } from "react-redux";

const useRestaurantMenu = (resId) => {
  const { latitude, longitude } = useSelector(
    (store) => store.user.geoLocationInfo
  );
  const [categoryInfo, setCategoryInfo] = useState(null);
  const resStructuredRes = (res) => {
    return res
      .map(({ card }) => {
        const { title, itemCards } = card.card;
        if (title && itemCards) {
          return {
            title,
            itemCards,
          };
        }
        return;
      })
      .filter((i) => i);
  };
  useEffect(() => {
    fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=` +
        resId
    )
      .then((res) => res.json())
      .then((resInfo) => {
        const resData = resStructuredRes(
          resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
            []
        );
        setCategoryInfo(resData);
      })
      .catch((err) => console.log(err));
  }, []);
  return { categoryInfo };
};

export default useRestaurantMenu;
