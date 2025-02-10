import React, { useEffect, useState } from "react";

function GetFetchApi(url) {
  const [api, setApi] = useState([]);
  async function fetchApi() {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmZmZDk5NDQ5MTMxODI2MDNiY2I1OWRiYWI3YzEzMyIsIm5iZiI6MTY1ODIwMDEyMC4yMzYsInN1YiI6IjYyZDYyMDM4YzkyYzVkMDA0ZjBkMzQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IbG628zETjlBG1RxJnKMWZcy0VyxFo4jeY6z-OvoBAg",
      },
    });

    const result = await response.json();
    setApi(result.results);
  }
  useEffect(() => {
    fetchApi();
  }, []);

  return [api];
}

export default GetFetchApi;
