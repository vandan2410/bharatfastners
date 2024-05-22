import UpdateCategory from "../components/updateCategory";
import SideBar from "../components/sidebar";
import { useEffect , useState  } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditCategory() {
    const [category, setCategory] = useState({});
    const {categoryId}= useParams();
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.post(`http://localhost:5000/api/category/getcategory/${categoryId}`);
            setCategory(res.data.payload)
            
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
                <UpdateCategory  item={category} />
            </div>
        </div>
    )
}
export default EditCategory;