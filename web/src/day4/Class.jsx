import React, { useEffect, useState } from "react";

// life cycle of react:
// 1. mounting
//2. Update=>component did mount
//3. unmounting

// api:
// get, post, put, delete  (c=>post or create  r=>get or read u=>update  d=> delete)

function Class() {
  const [data, setData] = useState([]);
  //   const [data, setData] = useState(0);

  //   //   mounting
  //   useEffect(() => {
  //     console.log("hello");
  //   });
  //   //   component did mount=> run at one time.first
  //   useEffect(() => {
  //     console.log("Hello i am component did mount.");
  //   }, []);
  async function fetchApi() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    setData(result);
  }
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <h1>Api Integrate: (Get Api)</h1>
      {data.map((item, index) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <h1>{item.body}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Class;
