import { useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";

function NewCategory(params) {
  const [newCategory, setNewCategory] = useState({
    categoryName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({
      ...newCategory,
      [name]: value,
    });
  };

  const handleNewCategory = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/category/addcategory", newCategory)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Category Added Successfully  !");
          
        }
        setNewCategory({
            categoryName: "",
        });
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.error("Something Went wrong !");
        }
      });
  };

  return (
    <div className=" flex flex-col bg-tranparent backdrop-blur-md px-20 py-10 rounded-lg  justify-center items-center bg-gray-600 ">
        <h1 className=" mb-5  text-center text-[20px] text-white ">Add Category</h1>
      <input
        type="text"
        name="categoryName"
        value={newCategory.categoryName}
        onChange={handleInputChange}
        placeholder=" New Category"
        className=" text mb-5 p-2 rounded-md focus:outline-none "
        // Adjust the width as needed
      />
      <button
        className=" bg-blue-400 w-[200px] p-2 rounded-md  "
        onClick={handleNewCategory}
      >
        Add Category
      </button>
    </div>
  );
}

export default NewCategory;
