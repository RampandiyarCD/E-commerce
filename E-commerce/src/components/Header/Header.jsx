import React from "react";
import "./header.css";
import ViewCart from "../AddToCart/ViewCart";
const Header = ({ props }) => {
  return (
    <>
      <div className="header">
        Header Store
        <span>
          <span>products</span>
          <span>FAQs</span>
          <span>About the store</span>
          <span>
            <ViewCart props={props} />
          </span>
        </span>
      </div>
    </>
  );
};

export default Header;
