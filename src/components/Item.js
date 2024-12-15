import { RESTAURANT_IMAGE_URL } from "../utils/constants";

const Item = ({ item }) => {
  const { name, price, description, ratings, imageId } = item.info;
  const { rating, ratingCountV2 } = ratings.aggregatedRating;

  return (
    <div className="item-header">
      <div className="item-menu">
        <div>{name}</div>
        <div>{price}</div>
        <div>
          {rating} ({ratingCountV2})
        </div>
        <div>{description?.split("[")[0]?.split("|")[1]}</div>
      </div>
      <div className="item-img">
        <img src={RESTAURANT_IMAGE_URL + imageId}  className="img-item" />
        <button>Add To cart</button>
      </div>
    </div>
  );
};

export default Item;
