import location from "../assests/location.svg";
import phone from "../assests/phone.svg";
import email from "../assests/email.svg";

function Footer() {
  return (
    <div className="px-[100px] flex border-t-2 border-black pt-5 reactangle ">
      <div className=" h-full w-3/5 ">
        <p className="text-[23px] text-white mb-[20px]" >About us</p>
        <p className="pr-[100px] text-justify " >
          At Bharat Fasteners, we specialize in precision engineering and
          manufacturing. With expertise in producing complex components,
          fasteners, screws for industrial components and auto mobile
          assemblies, our commitment to quality and innovation is unmatched. 
        </p>
      </div>
      <div className=" h-full w-[15%] flex flex-col">
        <p className="text-[23px] text-white " >Quick Links</p>
        <a className="mt-4" href="/">Home</a>
        <a className="mt-4" href="/about">About Us</a>
        <a className="mt-4" href="/product">Product</a>
        <a className="mt-4" href="/contact">Contact us</a>
      </div>
      <div className=" h-full w-[25%] ">
        <p className="text-[23px] text-white " >Contact</p>
        <div className="flex m-4 ">
          <img src={location} alt="" className="h-[35px] w-[35px]" />
          <p className=" pl-2 "> W-23, Ambad MIDC, Nashik 422010</p>
        </div>
        <div className="flex m-4 ">
          <img src={phone} alt="" className="h-[35px] w-[35px]" />
          <p className="pt-1 pl-2 ">9146845926</p>
        </div>
        <div className="flex m-4 ">
          <img src={email} alt="" className="h-[45px] w-[45px] pt-2 " />
          <p className=" pl-2 ">
            info@bholeshankargroup.com enquiry@bholeshankargroup.com
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
