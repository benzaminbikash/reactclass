// useReducer=>complex
// useState=>simple

import React, { useReducer, useState } from "react";

function App() {
  function reducer(state, action) {
    console.log(state, action);
    if (action.type == "INC") {
      return { counter: state.counter + 1 };
    }
  }
  const initialState = {
    counter: 0,
    name: "Ram",
    color: "red",
  };
  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter App</h1>
      <h1>{data.counter}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>Increase</button>
      <button onClick={() => dispatch({ type: "INC" })}>DECREASE</button>
    </div>
  );
}
export default App;
