import React from "react";

export const Product = (props) => {
  const { id, productName, productImage } = props.data;
  return (
    <div className="product" onClick={() => props.setTrigger(true)}>
      <img src={productImage} />
      <div className="productName">
        <p>
          <b>{productName}</b>
        </p>
      </div>
    </div>
  );
};
