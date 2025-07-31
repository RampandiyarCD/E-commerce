import React from "react";

const AddToCart = ({ props }) => {
  const { product, cartItemsDispatch } = props;

  const handleAddToCart = () => {
  cartItemsDispatch({type:"addToCart",product})
  };
  return (
    <div>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};

export default AddToCart;
