import prisma from "./prismaClient.js";

const addCategoryInfo = async (categoryName) => {
    try {
        categoryName = categoryName.toUpperCase()
        const result = await prisma.category.create({
            data: {
                name: categoryName,
            },
        });

        return result;
    } catch (error) {
        console.log("Error in adding the category", error);
        throw { notMain: true, error };
    }
};

const fetchCategoryInfo = async (categoryId ) => {
    try {
        console.log(categoryId);
        const categoryInfo = await prisma.category.findUnique({
          where: { id: categoryId },
        });
    
        return categoryInfo;
      } catch (error) {
        console.log("Error in fetching the category info", error);
        throw { notMain: true, error };
    }
};


const fetchCategoryInfoByName = async (categoryName) => {
    try {
        
        const categoryInfo = await prisma.category.findUnique({
            where: { name: String(categoryName) },
          });

        return categoryInfo;
    } catch (error) {
        console.log("Error in fetching the category info", error);
        throw { notMain: true, error };
    }
};

const fetchAllCategories = async () => {
    try {
        const categories = await prisma.category.findMany();

        
        const sortedCategories = categories.sort((a, b) => a.name.localeCompare(b.name));

        return sortedCategories;
    } catch (error) {
        console.log("Error in fetching all categories", error);
        throw { notMain: true, error };
    }
};


const deleteCategory = async (categoryId) => {
    try {
        const deletedCategory = await prisma.category.delete({
            where: {
                id: categoryId,
            },
        });

        return deletedCategory;
    } catch (error) {
        console.log("Failed to delete given category", error);
        throw { notMain: true, error };
    }
};

const updateCatgory = async (categoryId, newCategoryName) => {
    try {
         newCategoryName = newCategoryName.toUpperCase()
        const updatedCategory = await prisma.category.update({
            where: {
                id: categoryId,
            },
            data: {
                name: newCategoryName,
            },
        });

        return updatedCategory;
    } catch (error) {
        console.log("Error updating category name:", error);
        throw { notMain: true, error };
    }
};



export { addCategoryInfo, fetchCategoryInfoByName , fetchCategoryInfo ,fetchAllCategories , deleteCategory , updateCatgory };
