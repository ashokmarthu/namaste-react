import React from "react";
import { useSelector } from "react-redux";
import { RESTAURANT_IMAGE_URL } from "../utils/constants";
import EmptyCart from "./EmptyCart";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  return (
    <div>
      {cartItems?.length ? (
        cartItems.map((item) => {
          return (
            <>
              <div>
                <div>
                  <div>
                    <img
                      src={RESTAURANT_IMAGE_URL + item.imageId}
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div>{item.name}</div>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
