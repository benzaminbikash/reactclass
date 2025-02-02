import React, { forwardRef } from "react";

function Home(props, ref) {
  return (
    <input
      ref={ref}
      type="text"
      placeholder="Enter Your Data"
      className="border "
    />
  );
}

// export default forwardRef(Home);

// import React, { useEffect, useRef } from "react";
// import Event from "./day5/Event";
// import Home from "./components/Home";

// // useRef

// function App() {
//   const dataRef = useRef(null);
//   function handleFunction() {
//     // dataRef.current.focus();
//     dataRef.current.value = 100;
//   }
//   return (
//     <>
//       <Home ref={dataRef} />
//       <button onClick={handleFunction}>Click Me</button>
//     </>
//   );
// }

// export default App;
