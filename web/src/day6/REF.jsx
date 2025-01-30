import React, { useEffect, useRef } from "react";

function REF() {
  const dataRef = useRef(null);
  function handleFunction() {
    dataRef.current.focus();
    dataRef.current.value = 100;
  }
  useEffect(() => {
    dataRef.current.focus();
  }, []);
  return (
    <>
      <input
        ref={dataRef}
        type="text"
        placeholder="Enter Your Data"
        className="border "
      />
      <input type="text" placeholder="Enter Your Data" className="border " />
      <button onClick={handleFunction}>Click Me</button>
    </>
  );
}

export default REF;
