import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
function AllCategory({ item ,index }) {
    console.log(index);
    const createdObj = new Date(item.createdAt);
    const updatedObj = new Date(item.updatedAt);
  const createdFormattedDate = createdObj.toLocaleDateString();
  const updatedFormattedDate = updatedObj.toLocaleDateString();
  const categoryId = item.id;
  const navigate = useNavigate();
  const handleDelete = async (e) => {
    e.preventDefault();
      
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/category/removecategory/${categoryId}`
        );
        if(response.status===200)
        {
            toast.success("Category deleted successfully !");
            window.location.reload() ;
        }
        
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    
  }
  const handleEdit = async (e) =>{
    e.preventDefault();
    navigate(`/editcategory/${categoryId}`)
  }
  return (
    <div className={` bg-white w-[900px] h-[50px] flex rounded-sm text-black ` + (index%2===0 ? " bg-white  " : " bg-gray-200")  }>
      <div className=" w-[7%] h-full border-r flex justify-center items-center ">
        {index+1}
      </div>
      <div className=" w-1/4 h-full border-r flex justify-center items-center ">
        {item.name}
      </div>
      <div className=" w-1/4 h-full border-r flex justify-center items-center ">
        {createdFormattedDate}
      </div>
      <div className=" w-1/4 h-full border-r flex justify-center items-center ">
        {updatedFormattedDate}
      </div>
      <div className=" w-[9%] h-full border-r flex justify-center items-center " onClick={handleEdit}>
        Edit
      </div>
      <div className=" w-[9%] h-full  flex justify-center items-center cursor-pointer " onClick={handleDelete} >
        Delete
      </div>
    </div>
  );
}

export default AllCategory;
