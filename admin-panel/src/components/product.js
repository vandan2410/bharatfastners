import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function AllProduct({ item, index }) {
    console.log(index);
    const createdObj = new Date(item.createdAt);
    const updatedObj = new Date(item.updatedAt);
    const createdFormattedDate = createdObj.toLocaleDateString();
    const updatedFormattedDate = updatedObj.toLocaleDateString();
    const productId = item.id;
    const navigate = useNavigate();
    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete(
                `http://localhost:5000/api/product/removeproduct/${productId}`
            );
            if (response.status === 201) {
                toast.success("Category deleted successfully !");
                window.location.reload();
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handleEdit = async (e) => {
        e.preventDefault();
        navigate(`/editproduct/${productId}`);
    };
    return (
        <div
            className={
                ` bg-white w-[1200px] flex rounded-sm text-black py-2 border-b ` +
                (index % 2 === 0 ? " bg-white  " : " bg-gray-200")
            }
        >
            <div className="w-[5%] flex  justify-center border-r">
                {index + 1}
            </div>
            <div className="w-[10%] full flex  justify-center border-r">
                {item.name}
            </div>
            <div className="w-[10%] full flex  justify-center border-r">
                {item.categoryName}
            </div>
            <div className="w-[22%] full flex  justify-center border-r px-3 text-justify">
                {item.description}
            </div>
            <div className="w-[15%] full flex  justify-center border-r">link</div>
            <div className="w-[12%] flex  justify-center border-r">
                {createdFormattedDate}
            </div>
            <div className="w-[12%] full flex  justify-center border-r">
                {updatedFormattedDate}
            </div>
            <div className="w-[7%] full flex  justify-center border-r" onClick={handleEdit} >Edit</div>
            <div
                className="w-[7%] full flex  justify-center cursor-pointer "
                onClick={handleDelete}
            >
                Delete
            </div>
        </div>
    );
}

export default AllProduct;
