import { useState  ,useEffect} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateCategory({ item }) {
    
    const [newCategory, setNewCategory] = useState({
        categoryName: item.name,
      });
      
      
      const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setNewCategory({
          ...newCategory,
          [name]: value,
        });
      };
      useEffect(() => {
        // Update newCategory state with item.name when component mounts
        setNewCategory((prevCategory) => ({
          ...prevCategory,
          categoryName: item.name || "", // Use item.name or empty string as default
        }));
      }, [item]);
  const navigate  = useNavigate();
  const handleNewCategory = (e) => {
    e.preventDefault();
    const categoryId = item.id;
    console.log(newCategory)
    axios
      .patch(`http://localhost:5000/api/category/editcategory/${categoryId}`, newCategory)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          toast.success("Category edited Successfully  !");
          navigate("/home");
        }
        setNewCategory({
          categoryName: "", // Reset input value after successful update
        });
      })
      .catch((err) => {
        
          toast.error("Something Went wrong !");
        
      });
  };

  return (
    <div className=" flex flex-col bg-tranparent backdrop-blur-md px-20 py-10 rounded-lg  justify-center items-center bg-gray-600 ">
        <h1 className=" mb-5  text-center text-[20px] text-white ">Update Category</h1>
      <input
        type="text"
        name="categoryName"
        value={newCategory.categoryName}
        onChange={handleInputChange}
        placeholder=" Add updated Category"
        className=" text mb-5 p-2 rounded-md focus:outline-none "
        // Adjust the width as needed
      />
      <button
        className=" bg-blue-400 w-[200px] p-2 rounded-md  "
        onClick={handleNewCategory}
      >
        Update Category
      </button>
    </div>
  );
}

export default UpdateCategory;
