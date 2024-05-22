import dotenv from "dotenv";
import { fetchCategoryInfoByName, fetchCategoryInfo ,addCategoryInfo , fetchAllCategories ,deleteCategory , updateCatgory } from "../utils/categoryCRUD.js";
import { Error, Success } from "../utils/responseModels.js";

dotenv.config();



export const addCategory = async (req, res) => {
    try {
        const { categoryName } = req.body;
        
        let categoryInfo = await fetchCategoryInfoByName(categoryName);

        if (!categoryInfo) {
            const newCategory = await addCategoryInfo(categoryName);
            res.status(201).json(new Success("Category was added successfully", newCategory));
        } else {
            res.status(409).json(new Error("Category already exists", categoryInfo));
        }
    } catch (error) {
        console.error("Error adding category:", error);
        res.status(500).json(new Error("Failed to add category"));
    }
};

export const allCategories = async (req ,res) => {
    try{
        const allCategories = await fetchAllCategories();
        res.status(200).json(new Success("Successfully fetched",allCategories));

    } catch (error)
    {
        console.log('Error getting categories', error);
        res.status(500).json(new Error('Error Fetching'));  
    }
}

export const removeCategory = async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
      console.log(categoryId);
  
      let deletedPost = await deleteCategory(categoryId);
  
      res
        .status(200)
        .json(new Success("Successfully deleted given category", deletedPost));
    } catch (error) {
      console.log(error);
      res.status(500).json(new Error("Failed to delete given category"));
    }
  };

  export const editCategory = async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
      const { categoryName } = req.body;
      
      let editedCategory = await updateCatgory(categoryId,categoryName);
  
      res
        .status(200)
        .json(new Success("Successfully edited given category", editedCategory));
    } catch (error) {
      console.log(error);
      res.status(500).json(new Error("Failed to edit given category"));
    }
  };

  export const fetchCategoryIdByName = async (req , res) =>{
    try{
      
      let categoryInfo = await fetchCategoryInfoByName(req);
      res.status(201).json(new Success("Category was fetched successfully", categoryInfo));
    }
    catch(error){
      console.log(error);
      res.status(500).json(new Error("Failed to fetch category"));
    }
  }  

  export const fetchCategoryById = async (req , res) =>{
    try{
      const categoryId = req.params.categoryId;
      console.log(categoryId)
      let categoryInfo = await fetchCategoryInfo(categoryId);
      res.status(201).json(new Success("Category was fetched successfully", categoryInfo));
    }
    catch(error){
      console.log(error);
      res.status(500).json(new Error("Failed to fetch category"));
    }
  }

