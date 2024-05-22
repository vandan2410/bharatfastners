import AddAdmin from "../components/addAdmin";
import SideBar from "../components/sidebar";
function AddUser(params) {
  return (
    <div  className="flex h-screen w-full" >
      <SideBar />
      <div className="flex items-center justify-center w-full bg-gray-400 " >
        <AddAdmin/>
      </div>
    </div>
  );
}

export default AddUser;
