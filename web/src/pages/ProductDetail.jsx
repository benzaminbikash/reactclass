import React from "react";
import { useLocation } from "react-router";

function ProductDetail() {
  const data = useLocation();
  const item = data.state;
  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt="" />
    </div>
  );
}

export default ProductDetail;
