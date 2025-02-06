import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const [data3, setData] = useState([]);
  async function fetchApi() {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setData(result);
  }
  useEffect(() => {
    fetchApi();
  }, []);
  //

  return (
    <>
      <div className="flex flex-wrap justify-between ">
        {data3.map((item, index) => {
          return (
            <div
              onClick={() =>
                navigate(`/productdetail/${item.id}`, {
                  state: item,
                })
              }
              className="w-[300px] shadow-lg"
            >
              <h1>{item.title}</h1>
              <img className="h-[300px] w-full " src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
