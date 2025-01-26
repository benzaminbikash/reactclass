import React from "react";

// const image = [
//   "https://i.pinimg.com/474x/3a/75/35/3a75353acbc6f6c7e009a41447b94448.jpg",
//   "https://i.pinimg.com/236x/ef/52/12/ef5212d8bd2a650ea315536c25435503.jpg",
//   "https://i.pinimg.com/236x/e6/f2/be/e6f2be6ddf42dd2effb0c388bce50bec.jpg",
//   "https://i.pinimg.com/236x/52/c8/e9/52c8e9904e2e0860fc66d051880f89b3.jpg",
// ];

// // mapping
// function Index() {
//   return (
//     <div className="main">
//       {image.map((item, index) => {
//         return (
//           <div className="box">
//             <img src={item} alt="" />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Index;

// import React from "react";

const image = [
  {
    name: "spider",
    address: "USA",
    image:
      "https://i.pinimg.com/474x/3a/75/35/3a75353acbc6f6c7e009a41447b94448.jpg",
  },
  {
    name: "spider",
    address: "USA",
    image:
      "https://i.pinimg.com/474x/3a/75/35/3a75353acbc6f6c7e009a41447b94448.jpg",
  },
  {
    name: "spider",
    address: "USA",
    image:
      "https://i.pinimg.com/474x/3a/75/35/3a75353acbc6f6c7e009a41447b94448.jpg",
  },

  {
    name: "spider",
    address: "USA",
    image:
      "https://i.pinimg.com/474x/3a/75/35/3a75353acbc6f6c7e009a41447b94448.jpg",
  },
  {
    name: "spider",
    address: "USA",
    image:
      "https://i.pinimg.com/474x/3a/75/35/3a75353acbc6f6c7e009a41447b94448.jpg",
  },
  {
    name: "spider",
    address: "USA",
    image:
      "https://i.pinimg.com/474x/3a/75/35/3a75353acbc6f6c7e009a41447b94448.jpg",
  },
];

// mapping
function Index() {
  return (
    <div className="main">
      {image.map((item, index) => {
        return (
          <div className="box">
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <h2>{item.address}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
