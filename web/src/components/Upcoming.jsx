import React, { useEffect, useState } from "react";
import GetFetchApi from "../customhook/GetFetchApi";

function Upcoming() {
  const [api] = GetFetchApi("https://api.themoviedb.org/3/movie/upcoming");
  return (
    <>
      <div className="px-10 mt-10">
        <div className="flex justify-between">
          <h1>Upcoming Movies</h1>
          <h1>View All</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {api.slice(0, 4).map((item) => {
            return (
              <div className="w-[300px] h-[400px] shadow-lg overflow-hidden">
                <img
                  className="h-[300px]"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt=""
                />
                <h1>{item.overview}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Upcoming;
