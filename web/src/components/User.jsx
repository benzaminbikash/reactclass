import React from "react";

function User(props) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <h1>{props.data.age}</h1>
    </div>
  );
}

export default User;
