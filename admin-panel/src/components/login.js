import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


function Login() {
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
    });

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        
        console.log(formData)
        axios.post("http://localhost:5000/api/user/login", formData)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Success Login !");
                    navigate('/home');
                    localStorage.setItem("userName",res.data.payload.userName)
                }
                setFormData({
                    userName: "",
                    password: "",
                  });

            })
            .catch((err) => {

                if (err.response.status === 401) {
                    toast.error("Incorrect Password !")
                }
                else if (err.response.status === 404) {
                    toast.error("User not found !")
                }
                else {
                    toast.error("Something went wrong !")
                }
            });
    };



    return (
        <div className=" flex flex-col bg-tranparent backdrop-blur-md px-20 py-10 rounded-lg  justify-center items-center  ">
            <h1 className=" mb-5  text-center text-[20px] " >Login</h1>

            <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                placeholder="Username"
                className=" text mb-5 p-2 rounded-md focus:outline-none "
            // Adjust the width as needed
            />

            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className=" text mb-10 p-2 rounded-md focus:outline-none "
            />

            <button className=" bg-blue-400 w-[100px] p-2 rounded-md  " onClick={handleLogin}>Login</button>
        </div>
    );
}
export default Login;
