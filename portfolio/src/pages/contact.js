import Navbar from "../component/navbar";
import ContactForm from "../component/contectusform";
import Footer from "../component/footer";
import "../App.css";
import location from "../assests/location.png";
function Contact() {
  return (
    <div className="h-full w-full">
      <div className="h-screen w-full">
        <div className="h-[10%] w-full ">
          <Navbar />
        </div>
        <div className=" reactangle h-1/5 w-full ">
          <p className=" text-[30px] text-white flex items-center justify-center pt-7 ">
            Contact Us
          </p>
        </div>
        <div className="  h-[70%] w-full contact  ">
          <p className=" text-[30px] text-black flex items-center justify-center pt-7 ">
            Let's get in touch
          </p>
          <p className=" text-[20px] text-black flex items-center justify-center pt-2 ">
            Send us a message with your phone number , email and your
            requirments and our team will contact you
          </p>
          <ContactForm />
        </div>
      </div>
      <div className=" h-full w-full flex justify-around  mt-[50px]">
        <div className="mt-[50px]" >
          <span className="text-[25px]" >
            <p>Find Us At :</p>
          </span >
          <span className="m-10 text-[18px] " >
            <p>Email :</p>
            <p>enquiry@bholeshankargroup.com</p>
          </span>
          <span className="m-10 text-[18px] " >
            <p>Phone Number :</p>
            <p>+91 9225100281</p>
          </span>
          <span className="m-10 text-[18px] " >
            <p>Location :</p>
            <p>W-40, Ambad MIDC, Nashik 422010</p>
          </span>
          <span  className="m-10 text-[18px] " >
            <p>Working Hours :</p>
            <p>9:00 to 17:00  Saturday (Weekly Off)</p>
          </span>
        </div>
        <div className=" h-[600px] w-[600px] mt-[50px]" >
          <img src={location} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
