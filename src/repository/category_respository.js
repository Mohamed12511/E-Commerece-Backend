const {Category}=require('../models/category');


class CategoryRepository{

  getCategories=async()=>{
    try{
    const response=await Category.findAll({row:true});
    return response;
    }catch(err){
        console.log(err);
    }
};

  getCategory=async(Id)=>{
try{
    const response=await Category.findByPk(Id);
    return response;
}catch(err){
    console.log(err);
}
};

  CreateCategory=async (name,description)=>{
    try{
        const response=await Category.create({
            name,
            description
        });
        return response;
    }
    catch(err){
        console.log(err);
    }
}

    DeleteCategory=async(id)=>{
        try{
            const category=await Category.findByPk(id);
            await category.destroy();
            return "Removed Successfully";
        }catch(err){
            console.log("something is wrong",err);
        }
    }
}

module.exports={CategoryRepository};
