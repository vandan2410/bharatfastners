import '../App.css'
function Navbar(params) {
  return (
    <div className=" navbar w-full h-full bg-tranparent  flex  justify-between items-center px-10">
      <div>
        <p className="text-white text-[23px] ">Bharat Fastners</p>
      </div>
      <div className="text-white text-[20px] " >
        <a className="mx-10" href="/">Home</a>
        <a className="mx-10" href="/about">About Us</a>
        <a className="mx-10" href="/product">Product</a>
        <a className="mx-10" href="/contact">Contact Us</a>
      </div>
    </div>
  );
}

export default Navbar;
