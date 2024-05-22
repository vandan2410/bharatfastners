import Navbar from "../component/navbar";

import "./../App.css";
function Home(params) {
  return (
    <div className=" home h-screen w-full flex flex-col ">
      <div className="   w-full h-[10%] ">
        <Navbar />
      </div>
      <div className=" w-full h-[90%] relative z-0  flex justify-center items-center backdrop-blur-sm ">
        <div className="h-[350px] w-[750px]  text-white rounded-xl  backdrop-blur-lg border-[5px] p-10 ">
          <p className="text-white text-[50px] mb-10" >Welcome to</p>
          <p className="text-blue-500 text-[80px] " >Bharat Fasteners</p>
        </div>
      </div>
    </div>
  ); 
}

export default Home;
