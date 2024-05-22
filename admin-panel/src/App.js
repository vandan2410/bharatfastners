import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import { ToastContainer } from "react-toastify";
import Home from './pages/home';
import AddUser from './pages/registerUser';
import AddCategory from './pages/addCategory';
import Category from './pages/category';
import EditCategory from './pages/editCategory';
import Product from './pages/allProduct';
import AddProduct from './pages/product';
import EditProduct from './pages/editProduct';
const App = () => {
  return (
    
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/user' element={<AddUser/>} />
        <Route path='/addcategory' element={<AddCategory/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/editcategory/:categoryId" element={<EditCategory/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path="/editproduct/:productId" element={<EditProduct/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
