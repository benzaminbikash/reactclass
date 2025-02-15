import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://programminginterviewquestionandanswer.vercel.app/api/v4/allcategory"
      );
      const result = await response.json();
      setData(result?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch categories.");
    }
  };

  const handleUpdate = (data) => {
    navigate(`updatenew/${data._id}`, {
      state: data,
    });
  };

  const handleDelete = async (id) => {
    console.log(id);
    const response = await fetch(
      `https://programminginterviewquestionandanswer.vercel.app/api/v4/deletecategory/${id}`,
      {
        method: "DELETE",
      }
    );
    await response.json();
    fetchCategories();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>

      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-x-auto">
        {/* Add New Button */}
        <div className="flex justify-end mb-2">
          <button
            onClick={() => navigate("AddNew")}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Add New
          </button>
        </div>

        {/* Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">S/N</th>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>

              <th className="border border-gray-300 px-4 py-2">Created At</th>
              <th className="border border-gray-300 px-4 py-2">Updated At</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">{item._id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.title}
                </td>
                <td>
                  <img
                    src={item?.image}
                    alt=""
                    className="w-[200px] h-[100px] object-contain"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(item.updatedAt).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2 ">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 mr-4"
                    onClick={() => handleUpdate(item)}
                  >
                    Update
                  </button>

                  <button
                    className="bg-red-500 text-white px-3 py-1  ml-3"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
