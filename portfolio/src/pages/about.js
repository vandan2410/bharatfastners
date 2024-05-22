import "../App.css";
import Bussniess from "../component/bussiness";
import Corevalues from "../component/corevalues";
import Footer from "../component/footer";
import Navbar from "../component/navbar";

function About() {
  return (
    <div className="h-full w-full">
      <div className="h-screen w-full relative">
        <div className="h-[10%] w-full">
          <Navbar />
        </div>
        <div className=" reactangle h-1/5 w-full absolute"></div>
        <div className="absolute h-[90%] w-full ">
          <p className=" text-[30px] text-white flex items-center justify-center  ">
            About us
          </p>
          <p className=" text-[22px] text-white flex items-center justify-center my-3">
            Elevating success in Fastners
          </p>
          <div className=" w-full flex items-center justify-center mb-5">
            <div className="ceo h-[320px] w-[280px] rounded-md "></div>
          </div>

          <p className="px-[100px] text-[22px] ">Our Journey</p>
          <p className="border-b-[3px] border-black mx-[100px] w-[8%] my-5"></p>
          <p className="text-justify px-[100px] text-[18px]  ">
            Embarking on a path paved with innovation and unwavering dedication,
            our journey at Bholeshankar Group has been one of constant
            evolution. Over the years, we’ve honed our exBFrtise in fasteners
            manufacturing and surface finishing, setting new standards and
            pushing the boundaries of what’s possible. With each step forward,
            we’ve remained committed to delivering excellence, building lasting
            partnerships, and leaving an indelible mark in the industries we
            serve. Join us as we continue to craft a legacy driven by passion,
            precision, and progress.
          </p>
        </div>
      </div>
      <div className=" h-screen w-full  mt-[70px] " >
        <Corevalues/>
      </div>
      <Bussniess/>
      <Footer/>
    </div>
  );
}

export default About;
