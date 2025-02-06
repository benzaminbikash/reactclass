import React, { useEffect, useState } from "react";

function Upcoming() {
  const [api, setApi] = useState([]);
  async function fetchApi() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmZmZDk5NDQ5MTMxODI2MDNiY2I1OWRiYWI3YzEzMyIsIm5iZiI6MTY1ODIwMDEyMC4yMzYsInN1YiI6IjYyZDYyMDM4YzkyYzVkMDA0ZjBkMzQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IbG628zETjlBG1RxJnKMWZcy0VyxFo4jeY6z-OvoBAg",
        },
      }
    );
    const result = await response.json();
    console.log(result);
    setApi(result.results);
  }
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <div className="flex justify-between">
        <h1>Upcoming Movies</h1>
        <h1>View All</h1>
      </div>
      {api.map((item, index) => {
        return <h1>{item.overview}</h1>;
      })}
    </>
  );
}

export default Upcoming;
