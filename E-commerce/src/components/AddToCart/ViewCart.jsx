import React, { useEffect, useState } from "react";
import "./viewCart.css";
const ViewCart = ({ props }) => {
  const { cartItems, cartItemsDispatch } = props;
  const [isOpen, setOpen] = useState(false);

  const quantity = (id, val) => {
    cartItemsDispatch({ type: "quantity", val, id });
  };
  const handleDelete = (id) => {
    cartItemsDispatch({ type: "delete", id });
  };

  return (
    <div>
      <button className="view-cart-btn" onClick={() => setOpen(true)}>view cart {`(${cartItems.length})`}</button>
      {isOpen && (
        <div className="model-container">
          <div className="model-content">
            <h1>Cart</h1>
            <button onClick={() => setOpen(false)}>X</button>
            {cartItems.length === 0 ? (
              <p>no items in cart</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id}>
                  <p>id: {item.id}</p>
                  <p>name: {item.name}</p>
                  <p>quantity: {item.quantity}</p>
                  <button
                    disabled={item.quantity === 1}
                    onClick={() => quantity(item.id, -1)}
                  >
                    -
                  </button>
                  <button onClick={() => quantity(item.id, 1)}>+</button>
                  <button onClick={() => handleDelete(item.id)}>delete</button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewCart;
