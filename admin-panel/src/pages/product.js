import axios from "axios";
import { useEffect, useState } from "react";
import SideBar from "../components/sidebar";
import NewProduct from "../components/newProduct";


function AddProduct(params) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
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
    // Handle form submission logic here
  };

  return (
    <div className="flex h-screen w-full bg-gray-400">
      <SideBar />
      <div className="flex items-center justify-center w-full" > 
                <NewProduct/>
            </div>
      
    </div>
  );
}

export default AddProduct;
