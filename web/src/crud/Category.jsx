import React, { useEffect, useState } from "react";

function Category() {
  const [data, setData] = useState();

  const fetchApi = async () => {
    const response = await fetch(
      "https://programminginterviewquestionandanswer.vercel.app/api/v4/allcategory"
    );
    const result = await response.json();
    setData(result?.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return <div>{}</div>;
}

export default Category;
