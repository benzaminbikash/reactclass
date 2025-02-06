// import React from "react";
// import { Routes, Route, NavLink, useLocation } from "react-router";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import ProductDetail from "./pages/ProductDetail";
// import NotFound from "./pages/NotFound";
// import ProtectRouter from "./protectedRoute/ProtectRouter";
// import Navbar from "./components/Navlink";
// import User from "./pages/aboutinfo/User";

// function App() {
//   const location = useLocation();
//   return (
//     <>
//       {location.pathname == "/contact" ? null : <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* protected router */}
//         <Route element={<ProtectRouter />}>
//           {/* nested routing  */}
//           <Route path="/about/" element={<About />}>
//             <Route path="user" element={<User />} />
//           </Route>

//           {/* cart */}
//         </Route>
//         <Route path="/contact" element={<Contact />} />
//         {/* dynamic route */}
//         <Route path="/productdetail/:user" element={<ProductDetail />} />
//         {/* not found route */}
//         <Route path="/*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";

function Popular() {
  const [api, setApi] = useState([]);
  async function fetchApi() {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmZmZDk5NDQ5MTMxODI2MDNiY2I1OWRiYWI3YzEzMyIsIm5iZiI6MTY1ODIwMDEyMC4yMzYsInN1YiI6IjYyZDYyMDM4YzkyYzVkMDA0ZjBkMzQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IbG628zETjlBG1RxJnKMWZcy0VyxFo4jeY6z-OvoBAg",
      },
    });

    const result = await response.json();
    console.log(result);
    setApi(result.results);
  }
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="px-10">
      <div className="flex justify-between">
        <h1>Popular Movies</h1>
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
  );
}

export default Popular;
