import React, { useState } from "react";

function Slider() {
  // image[0]
  const image = [
    "https://i.pinimg.com/474x/3a/75/35/3a75353acbc6f6c7e009a41447b94448.jpg",
    "https://i.pinimg.com/236x/ef/52/12/ef5212d8bd2a650ea315536c25435503.jpg",
    "https://i.pinimg.com/236x/e6/f2/be/e6f2be6ddf42dd2effb0c388bce50bec.jpg",
    "https://i.pinimg.com/236x/52/c8/e9/52c8e9904e2e0860fc66d051880f89b3.jpg",
  ];
  const [index, setIndex] = useState(0);
  const selectImage = image[index];
  const handleImage = () => {
    setIndex(index + 1);
  };
  function handlePreviousImage() {
    setIndex(index - 1);
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={selectImage}
          alt=""
          className="w-[200px] h-[300px] rounded-lg"
        />

        <div className="flex gap-2">
          <button
            onClick={handlePreviousImage}
            className="bg-yellow-500 px-10 py-2 rounded-full mt-2"
          >
            Previous
          </button>
          <button
            onClick={handleImage}
            className="bg-red-500 px-10 py-2 rounded-full mt-2"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider;
