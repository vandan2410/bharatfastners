import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function NewProduct(params) {
  const [formData, setFormData] = useState({
    name: "",
    categoryName : "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:5000/api/product/addproduct", formData)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Product Added Successfully  !");
        }
        setFormData({
          name: "",
          categoryName : "",
          description: "",
          imageUrl: "",
        });
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.error("Something Went wrong !");
        }
      });
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col bg-tranparent backdrop-blur-md  rounded-lg  justify-center items-center bg-gray-600 py-10 p-[65px]   ">
      <form className="flex justify-center items-center flex-col">
        <h1 className=" mb-5  text-center text-[20px] text-white ">
          Add Product
        </h1>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder=" Product Name"
          className=" text mb-5 mx-3 p-2 rounded-md focus:outline-none "
          // Adjust the width as needed
        />
        <input
          type="text"
          name="categoryName"
          value={formData.categoryName}
          onChange={handleChange}
          placeholder=" New Category"
          className=" text mb-5 mx-3 p-2 rounded-md focus:outline-none "
          // Adjust the width as needed
        />
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder=" Image URL"
          className=" text mb-5 p-2 rounded-md focus:outline-none "
          // Adjust the width as needed
        />
        <textarea
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder=" Description"
          className=" text mb-5 p-2 rounded-md focus:outline-none "
          // Adjust the width as needed
        />
        <button
          className=" bg-blue-400 w-[200px] p-2 rounded-md  "
          onClick={handleSubmit}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default NewProduct;
