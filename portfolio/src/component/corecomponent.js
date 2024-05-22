import email from "../assests/email.svg"
function CoreComponent(params) {
    return(
        <div className="h-[400px] w-[300px] border p-4 bg-white rounded-md flex flex-col items-center  " >
            <img className="h-[40px] w-[40px] " src={email} alt=""/>
            <p className=" text-[30px] font-bold my-4 text-[#0d68aa] " >Integrity</p>
            <p className="text-justify text-[17px] mb-4" >We work hard to build and sustain a culture of honesty. To earn the trust of everyone we work with, we set clear expectations, establish accountability, measure results, and own our outcomes.</p>
        </div>
    )
}

export default CoreComponent;