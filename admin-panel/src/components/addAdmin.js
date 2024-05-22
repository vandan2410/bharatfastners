import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function AddAdmin() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password === formData.confirmPassword) {
      axios
        .post("http://localhost:5000/api/user/register", formData)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Admin Successfully created !");
            navigate("/home");
          }
          setFormData({
            userName: "",
            password: "",
            confirmPassword: "",
          });
        })
        .catch((err) => {
          if (err.response.request.status === 400) {
            toast.error("Something Went wrong !");
          }
        });
    } else {
      toast.error("Password doesnt match !");
    }
  };

  return (
    <div className=" flex flex-col bg-tranparent backdrop-blur-md px-20 py-10 rounded-lg  justify-center items-center bg-gray-600 ">
      <h1 className=" mb-5  text-center text-[20px] text-white ">Add Admin</h1>

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
        className=" text mb-5 p-2 rounded-md focus:outline-none "
      />

      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        placeholder="Confirm Password"
        className=" text mb-10 p-2 rounded-md focus:outline-none "
      />

      <button
        className=" bg-blue-400 w-[100px] p-2 rounded-md  "
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
export default AddAdmin;
