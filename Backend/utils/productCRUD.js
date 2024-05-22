import prisma from "./prismaClient.js";


const createProduct = async (payload) => {
    try {
        
      const { name, description, categoryName , imageUrl } = payload;
  
      const newProduct = await prisma.product.create({
        data: {
            name,
            description,
            imageUrl,
            category: { connect: { name : categoryName } }, // Connects the product to the category
          },
        });
     return newProduct;
    } catch (error) {
      console.error('Error adding product:', error);
      throw { notMain: true, error };
    }
  };
  
const fetchProduct = async (productId) =>{
    try{
        const product = await prisma.product.findUnique(
            { where: {id : productId}
        });
        return product;
    }
    catch(error)
    {
        console.log("Error detching product :", error);
        throw { notMain: true, error };
    }
}

const deleteProduct = async (productId) =>{
    try{
        const product = await prisma.product.delete(
            { where: {id : productId}
        });
        return product;
    }
    catch(error)
    {
        console.log("Error deleting product :", error);
        throw { notMain: true, error };
    }
}

const editProduct = async (productId, newProduct) => {
    try {
        const { name, description, categoryName, imageUrl } = newProduct;
        console.log( "new Product ======>", newProduct );

        const updatedProduct = await prisma.product.update({
            where: {
                id: productId,
            },
            data: {
                name: name,
                description: description,
                categoryName: categoryName,
                imageUrl: imageUrl, // Use correct field name
            },
        });
        console.log(updatedProduct);
        return updatedProduct;
    } catch (error) {
        console.log("Error updating product:", error);
        throw { notMain: true, error };
    }
};

const fetchAllProducts = async () => {
    try {
        const products = await prisma.product.findMany();

        
        const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));

        return sortedProducts;
    } catch (error) {
        console.log("Error in fetching all categories", error);
        throw { notMain: true, error };
    }
};

const fetchProductByCategory = async(categoryName) =>{
    try{
        const product = await prisma.product.findMany({where:{categoryName:categoryName}});
        return product;
    }
    catch (error) {
        console.log("Error in fetching all categories", error);
        throw { notMain: true, error };
    }
}

export {createProduct ,fetchProduct , deleteProduct , editProduct , fetchAllProducts , fetchProductByCategory};
  