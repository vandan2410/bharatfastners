import axios from "axios";
import { useEffect, useState } from "react";
import SideBar from "../components/sidebar";
import AllCategory from "../components/allCategory";

function Category(params) {
  const [category, setCategory] = useState([]);
// Initialize count state variable

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/category/allcategories");
        setCategory(res.data.payload)
        
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
        <div className="bg-gray-600 w-[900px] h-[50px] flex text-white">
          <div className="w-[7%] flex items-center justify-center border-r">Id</div>
          <div className="w-1/4 flex items-center justify-center border-r">Name</div>
          <div className="w-1/4 flex items-center justify-center border-r">Created on</div>
          <div className="w-1/4 flex items-center justify-center border-r">Updated on</div>
          <div className="w-[9%] flex items-center justify-center border-r">Edit</div>
          <div className="w-[9%] flex items-center justify-center">Delete</div>
        </div>

        <div className="flex flex-col">
          {category.map((item, index) => (
            <div key={index} >
              
              <AllCategory item={item} index={index} />
              
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
