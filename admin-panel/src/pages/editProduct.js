import UpdateProduct from "../components/updateProduct";
import SideBar from "../components/sidebar";
import { useEffect , useState  } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditProduct() {
    const [Product, setProduct] = useState({});
    const {productId}= useParams();
    console.log(productId)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`http://localhost:5000/api/product/readproduct/${productId}`);
            console.log(res)
            setProduct(res.data.payload)
            
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData(); // Call fetchData when the component mounts
      }, []);
    return(
        <div className="flex h-screen w-full bg-gray-400 " >
            <SideBar/>
            <div className="flex items-center justify-center w-full" > 
                <UpdateProduct  item={Product} />
            </div>
        </div>
    )
}
export default EditProduct;