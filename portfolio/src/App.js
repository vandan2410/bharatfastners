import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from "react-toastify";
import About from './pages/about';
import Contact from './pages/contact';
import Product from './pages/product';
function App() {
  return (
    <div>
     <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
