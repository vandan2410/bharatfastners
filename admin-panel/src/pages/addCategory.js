import NewCategory from "../components/newCategory";
import SideBar from "../components/sidebar";

function addCategory(params) {
    
    return(
        <div className="flex h-screen w-full bg-gray-400 " >
            <SideBar/>
            <div className="flex items-center justify-center w-full" > 
                <NewCategory/>
            </div>
        </div>
    )
}
export default addCategory;