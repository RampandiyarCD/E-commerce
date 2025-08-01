import React from "react";
import { showMessage } from "../Notifications/NotifyPopup";

const AddToCart = ({ props }) => {
  const { product, cartItemsDispatch } = props;

  const handleAddToCart = () => {
    cartItemsDispatch({ type: "addToCart", product });
    showMessage(`${product.name} added to cart`);
  };
  return (
    <div>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};

export default AddToCart;
