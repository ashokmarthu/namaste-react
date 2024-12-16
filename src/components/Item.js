import { useDispatch } from "react-redux";
import { RESTAURANT_IMAGE_URL } from "../utils/constants";
import { setCartItems } from "../reducers/cartSlice";
const Item = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, description, ratings, imageId } = item.info;
  const { rating, ratingCountV2 } = ratings.aggregatedRating;
  const handleCart = (item) => {
    dispatch(setCartItems(item));
  };
  return (
    <div className="item-header">
      <div className="item-menu">
        <div>{name}</div>
        <div>₹ {price / 100}</div>
        <div>
          {rating} ({ratingCountV2})
        </div>
        <div>{description?.split("[")[0]?.split("|")[1]}</div>
      </div>
      <div className="img-container">
        <div className="img-con">
          <img
            src={RESTAURANT_IMAGE_URL + imageId}
            className="img-item"
            loading="lazy"
          />
        </div>
        <button onClick={() => handleCart(item.info)}>Add To cart</button>
      </div>
    </div>
  );
};

export default Item;
