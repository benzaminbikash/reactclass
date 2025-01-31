// import React, { useContext } from "react";
// import { USERCONTEXT } from "./context/UserContext";

// function App() {
//   const [name, setName] = useContext(USERCONTEXT);
//   return (
//     <div>
//       App
//       <h1>{name}</h1>
//       <button onClick={() => setName("tilak karki")}>Change Name</button>
//     </div>
//   );
// }

// export default App;

// // useReducer
// // useContext Api
// // todo list
// // input=>add data display, delete, update

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
