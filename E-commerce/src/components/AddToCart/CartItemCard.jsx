import React from "react";

const CartItemCard = ({ props ,cartItemsDispatch}) => {
  const { id, image, name, price, description ,quantity} = props;

  const changeQuantity = (id, val) => {
    cartItemsDispatch({ type: "quantity", val, id });
  };
  const handleDelete = (id) => {
    cartItemsDispatch({ type: "delete", id });
  };
  return (
    <div key={id} className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <p>quantity: {quantity}</p>
      <div className="product-card-btns">
          <button
            disabled={quantity === 1}
            onClick={() => changeQuantity(id, -1)}
          >
            -
          </button>
          <button onClick={() => changeQuantity(id, 1)}>+</button>
          <button className="delete-btn" onClick={() => handleDelete(id)}>
            remove
          </button>
      </div>
    </div>
  );
};

export default CartItemCard;
