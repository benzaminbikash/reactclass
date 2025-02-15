import React, { useState } from "react";
import { useNavigate } from "react-router";

function AddNew() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    setLoading(true);
    const data = await fetch(
      "https://programminginterviewquestionandanswer.vercel.app/api/v4/addcategory",
      {
        method: "POST",
        body: formData,
      }
    );
    setLoading(false);
    const response = await data.json();
    if (response.status == "success") {
      navigate("/");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Category</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg mb-2">
            Category Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter category title"
            className="border border-gray-300 p-2 w-full"
            required
          />
          <label htmlFor="title" className="block text-lg mb-2">
            Category Image
          </label>
          <input
            type="file"
            id="title"
            // value={title}
            onChange={(e) => setImage(e.target.files[0])}
            placeholder="Enter category title"
            className="border border-gray-300 p-2 w-full"
            required
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              className="w-[80px] mt-2 h-[100px] border-black rounded-md border-2 object-cover"
              alt="randomImage"
            />
          )}
        </div>

        {/* Add Category Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            {loading ? "loading...." : " Add Category"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNew;
