import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";

import GetFetchApi from "../customhook/GetFetchApi";

function Popular() {
  const [api] = GetFetchApi("https://api.themoviedb.org/3/movie/popular");
  const [showAll, setShowAll] = useState(false); //work
  const [searchQuery, setSearchQuery] = useState(""); //work
  const [filteredMovies, setFilteredMovies] = useState([]); //work
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const searchTerm = event.target.value.toLowerCase();
    const filtered = api.filter((movie) => {
      return movie.original_title.toLowerCase().includes(searchTerm);
    });
    setFilteredMovies(filtered);
  };

  const finalData = searchQuery == "" ? api : filteredMovies;

  return (
    <div className="px-10 mt-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold ">Popular Movies</h1>
        <h1
          className="text-blue-500 cursor-pointer hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}
        </h1>
      </div>

      <div className="mt-4 flex justify-end w-full">
        <input
          type="text"
          className="w-[200px] p-2 border border-gray-300 rounded-md text-sm"
          placeholder="Search Movies..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="flex flex-wrap justify-between gap-4 mt-4">
        {finalData.length === 0 ? (
          <p className="text-center w-full mt-4">Movies not found</p>
        ) : (
          (showAll ? finalData : finalData.slice(0, 4)).map((movie) => (
            <div
              key={movie.id}
              className="w-[300px] h-[500px] shadow-lg overflow-hidden rounded-lg 
                         transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() =>
                navigate(`/MovieDetails/${movie.id}`, { state: movie })
              }
            >
              <Link to={`/movie/${movie.id}`}></Link>
              <img
                className="h-[400px] w-full object-cover"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <h2 className="p-2 text-md font-bold text-center">
                {movie.original_title}
              </h2>
              <p className="p-2 text-sm font-semibold">
                {movie.overview.length > 80
                  ? `${movie.overview.substring(0, 80)}...`
                  : movie.overview}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Popular;
