import express from "express";
import { addCategory , fetchCategoryById ,  allCategories ,removeCategory , editCategory} from "../controller/category.js";

const router = express.Router();

router.post("/addcategory", addCategory);
router.get("/allcategories", allCategories);
router.delete("/removecategory/:categoryId", removeCategory);
router.patch("/editcategory/:categoryId", editCategory)
router.post("/getcategory/:categoryId",fetchCategoryById)


export default router;