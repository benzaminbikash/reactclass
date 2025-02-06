import React from "react";
import { useLocation, useParams } from "react-router";

function ProductDetail() {
  const params = useParams();
  console.log(params.user);

  const data = useLocation();
  console.log(data.pathname);

  const item = data.state;
  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt="" />
    </div>
  );
}

export default ProductDetail;

// todo list
// add , get, delete, update//
