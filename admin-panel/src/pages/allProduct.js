import axios from "axios";
import { useEffect, useState } from "react";
import SideBar from "../components/sidebar";
import AllCategory from "../components/allCategory";
import AllProduct from "../components/product";

function Product(params) {
  const [product, setProduct] = useState([]);
// Initialize count state variable

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/product/allproduct");
        setProduct(res.data.payload)
        console.log(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call fetchData when the component mounts
  }, []);

  // Function to increment count
  

  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex flex-col flex-grow bg-gray-400 items-center justify-center">
        <div className="bg-gray-600 w-[1200px] h-[50px] flex text-white ">
          <div className="w-[5%] flex items-center justify-center border-r">Id</div>
          <div className="w-[10%] flex items-center justify-center border-r">Name</div>
          <div className="w-[10%] flex items-center justify-center border-r">Category </div>
          <div className="w-[22%] flex items-center justify-center border-r">Description</div>
          <div className="w-[15%] flex items-center justify-center border-r">Image URL</div>
          <div className="w-[12%] flex items-center justify-center border-r">Created on</div>
          <div className="w-[12%] flex items-center justify-center border-r">Updated on</div>
          <div className="w-[7%] flex items-center justify-center border-r">Edit</div>
          <div className="w-[7%] flex items-center justify-center">Delete</div>
        </div>

        <div className="flex flex-col">
          {product.map((item, index) => (
            <div key={index} >
              <AllProduct item={item} index={index} />
              
              
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
