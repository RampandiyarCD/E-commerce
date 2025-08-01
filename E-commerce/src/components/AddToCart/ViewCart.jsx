import React, { useEffect, useState } from "react";
import "./viewCart.css";
import CartItemCard from "./CartItemCard";
import { showMessage } from "../Notifications/NotifyPopup";
const ViewCart = ({ props }) => {
  const { cartItems, cartItemsDispatch } = props;
  const [isOpen, setOpen] = useState(false);
  const buyNow = () => {
    cartItemsDispatch({ type: "buy" });
    showMessage(`${cartItems.length} items bought`);
  };
  const isNoItemInCart = cartItems.length === 0;
  return (
    <div>
      <button onClick={() => setOpen(true)}>
        view cart {`(${cartItems.length})`}
      </button>
      {isOpen && (
        <div className="model-container">
          <div className="model">
            <div className="model-heading">
              <h1>Cart</h1>
              <button onClick={() => setOpen(false)}>X</button>
            </div>
            <div className="model-content">
              {isNoItemInCart ? (
                <p>no items in cart</p>
              ) : (
                cartItems.map((item) => (
                  <CartItemCard
                    props={item}
                    cartItemsDispatch={cartItemsDispatch}
                  />
                ))
              )}
            </div>
            {!isNoItemInCart && (
              <button className="buyNow-btn" onClick={buyNow}>
                Buy Now
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewCart;
