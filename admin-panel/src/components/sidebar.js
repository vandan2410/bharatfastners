import { useState } from "react";
import admin from "../assets/admin.png";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function SideBar(params) {
  const [userOpen, setUserIsOpen] = useState(false);
  const [productOpen, setProductIsOpen] = useState(false);
  const [categoryOpen, setCategoryIsOpen] = useState(false);
  const [connectOpen , setConnectIsOpen] = useState(false);

  const userToggleDropdown = () => {
    setUserIsOpen(!userOpen);
  };
  const productToggleDropdown = () => {
    setProductIsOpen(!productOpen);
  };
  const categoryToggleDropdown = () => {
    setCategoryIsOpen(!categoryOpen);
  };

  const connectToggleDropdown = () =>{
    setConnectIsOpen(!connectOpen);
  }
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const handleLogout = () => {
    axios
      .get("http://localhost:5000/api/user/logout")
      .then((res) => {
        if (res.status === 200) {
          toast.success("Logout Successfull !");
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error("Logout Unsuccessfull !");
      });
  };

  return (
    <div className="relative bg-gray-700 flex flex-col w-[250px]">
      <div className="flex flex-col justify-center items-center m-5 ">
        <div className="bg-gray-400 rounded-full p-3">
          <img className="pb-2" src={admin} alt="" />
        </div>

        <div className="text-lg mt-5 font-medium text-white">
          <h1>Hello , {userName} </h1>
        </div>
      </div>

      <button
        id="dropdownButton"
        type="button"
        className="text-white focus:outline-none  font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center"
        onClick={userToggleDropdown}
      >
        User
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {userOpen && (
        <div
          id="dropdown"
          className=" z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full top-full right-0 mt-1 dark:bg-gray-700 "
        >
          <ul
            className="py-2 text-md text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownButton"
          >
            <li>
              <a
                href="/user"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Create new admin
              </a>
            </li>
            <li>
              <div
                onClick={handleLogout}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer "
              >
                Logout
              </div>
            </li>
          </ul>
        </div>
      )}
      <button
        id="dropdownButton"
        type="button"
        className="text-white focus:outline-none  font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center"
        onClick={productToggleDropdown}
      >
        Product
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {productOpen && (
        <div
          id="dropdown"
          className=" z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full top-full right-0 mt-1 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-md text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownButton"
          >
            <li>
              <a
                href="/addproduct"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Add new product
              </a>
            </li>
            <li>
              <a
                href="/product"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                All products
              </a>
            </li>
          </ul>
        </div>
      )}

      

      <button
        id="dropdownButton"
        type="button"
        className="text-white focus:outline-none  font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center"
        onClick={categoryToggleDropdown}
      >
        Category
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {categoryOpen && (
        <div
          id="dropdown"
          className=" z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full top-full right-0 mt-1 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-md text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownButton"
          >
            <li>
              <a
                href="/category"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                All category
              </a>
            </li>
            <li>
              <a
                href="/addcategory"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Add new category
              </a>
            </li>
          </ul>
        </div>
      )}
   

    </div>
  );
}

export default SideBar;
