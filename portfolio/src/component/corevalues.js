import CoreComponent from "./corecomponent";

function Corevalues(params) {
  return (
    <div className=" core h-screen w-full mt-[70px]">
      <div className="  h-1/5 w-full flex items-center justify-center flex-col ">
        <p className=" text-[30px] text-white flex items-center justify-center pt-7 underline underline-offset-[10px] decoration-[rgb(37,150,190)]  ">
          Core Values
        </p>
      </div>
      <div className=" h-4/5 flex items-center justify-around" >
          <CoreComponent />
          <CoreComponent />
          <CoreComponent />
          <CoreComponent />
        </div>
    </div>
  );
}

export default Corevalues;
