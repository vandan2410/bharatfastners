import ProductCard from "./productCard";
import { useState , useEffect } from "react";
import axios from "axios";

function CategorymCard({category}) {
    const [product, setProduct] = useState([]);
    const categoryName = category.name;
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              `http://localhost:5000/api/product/products/${categoryName}`
            );
            console.log(response);
            setProduct(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
    return(
        <div className="h-full w-full  text-white " >
            <div className="h-[100px] text-[23px] w-full category flex items-center justify-center core " >
                <p>{category.name}</p>
            </div>
            <div className=" flex flex-wrap justify-around " >
            {product.payload?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
            </div>
        </div>
    )
}

export default CategorymCard;