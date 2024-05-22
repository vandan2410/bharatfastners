import Navbar from "../component/navbar";
import { useState , useEffect } from "react";
import axios from "axios";
import CategoryCard from "../component/categoryCard";
function Product() {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "http://localhost:5000/api/category/allcategories"
            );
            
            setCategory(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <div className="h-full w-full">
      <div className=" h-[80px] w-full ">
        <Navbar />
      </div>
      <div className=" h-[130px] w-full reactangle ">
        <p className=" text-[30px] text-white flex items-center justify-center pt-7 ">
          Our wide range of Products
        </p>
      </div>
      
      {category.payload?.map((item) => (
          <CategoryCard key={item.id} category={item} />
        ))}
      
    </div>
  );
}
export default Product;
