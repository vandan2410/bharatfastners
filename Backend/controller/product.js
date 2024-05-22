import dotenv from "dotenv";
import { Error, Success } from "../utils/responseModels.js";
import {
  fetchCategoryInfoByName,
  fetchCategoryInfo,
} from "../utils/categoryCRUD.js";
import {
  createProduct,
  fetchProduct,
  deleteProduct,
  editProduct,
  fetchAllProducts,
  fetchProductByCategory
} from "../utils/productCRUD.js";

dotenv.config();

export const addProduct = async (req, res) => {
  try {
    const { name, description, categoryName, imageUrl } = req.body;

    const payload = {
      name,
      description,
      categoryName,
      imageUrl,
    };

    const result = await createProduct(payload);

    res.status(201).json(new Success("Post was added Successfully", result));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Error("Failed to add post"));
  }
};

export const fetchProductById = async (req, res) => {
  try {
    const productId = req.params.productId;

    let product = await fetchProduct(productId);
    res.status(201).json(new Success("Product fetched Successfully", product));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Error("Failed to fetch product"));
  }
};

export const removeProduct = async (req, res) => {
  try {
    const productId = req.params.productId;

    let product = await deleteProduct(productId);

    res.status(201).json(new Success("Product deleted Successfully", product));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Error("Failed to delete product"));
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    console.log(productId);

    let updatedProduct = await editProduct(productId, req.body);

    res
      .status(201)
      .json(new Success("Product updated Successfully", updatedProduct));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Error("Failed to update product"));
  }
};

export const fetchAllProduct = async (req, res) => {
  try {
    

    let Product = await fetchAllProducts();

    res
      .status(201)
      .json(new Success("Product updated Successfully", Product));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Error("Failed to update product"));
  }
};

export const getProductsInCategory = async (req ,res) =>{
  try{
    const categoryName = req.params.categoryName;
    let product = await fetchProductByCategory(categoryName);
    res
      .status(201)
      .json(new Success("Product fetched Successfully", product));
  }
  catch(error)
  {
    console.log(error);
    res.status(500).json(new Error("Failed to update product"))
  }
}
