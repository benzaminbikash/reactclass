import { useEffect, useState } from "react";
import { IoMdHome } from "react-icons/io";
import Lottie from "lottie-react";
import Class from "../images/class.json";
import NotFound from "../images/notfound.json";

function Index() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchApi() {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setData(result);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const filterData = data.filter((item, index) => {
    if (search == "") {
      return item;
    } else {
      return item.title.toLowerCase().includes(search.toLowerCase());
    }
  });

  return (
    <div className="container mx-auto p-6">
      <IoMdHome size={100} color="red" />
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        API Integrated Products
      </h1>
      <div className="flex justify-end">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search product..."
          className="border  p-2 rounded-md mb-2"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filterData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-5  hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-40 h-40 object-contain mx-auto"
            />
            <h2 className="text-lg font-semibold mt-4 text-gray-900 text-center">
              {item.title.length > 20
                ? item.title.substring(0, 20) + "..."
                : item.title}
            </h2>
            <p className="text-gray-600 text-sm mt-2  text-center">
              {item.description.substring(0, 100)} ...
            </p>
            <h3 className="text-lg font-bold text-green-600 mt-2 text-center">
              ${item.price}
            </h3>
            <h4 className="text-sm text-gray-500 text-center">
              Category: {item.category}
            </h4>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {filterData.length == 0 && (
        <Lottie
          animationData={Class}
          style={{
            width: 400,
          }}
        />
      )}
    </div>
  );
}

export default Index;

// lottie-react
// react icons
// react-framer => ,
// aos
