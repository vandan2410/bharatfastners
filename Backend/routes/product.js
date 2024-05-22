import express from "express";
import { addProduct,fetchProductById, removeProduct, updateProduct ,fetchAllProduct , getProductsInCategory } from "../controller/product.js";


const router = express.Router();

router.post("/addproduct", addProduct);
router.get("/products/:categoryName", getProductsInCategory)
router.get("/readproduct/:productId",fetchProductById)
router.delete("/removeproduct/:productId",removeProduct)
router.patch("/updateproduct/:productId",updateProduct)
router.post("/allproduct",fetchAllProduct)




export default router;