const {CategoryRepository}=require('../repository/category_respository');
const {CategoryService}=require('../services.js/category_service');
const categoryService=new CategoryService(new CategoryRepository());




async function CreateCategory(req,res){
    const response=await categoryService.CreateCategory(req.body);
    try{
        return res.json({
            succes:true,
            error:{},
            message:"Successfully Added the Category",
            data:response
        });
    }catch(err){
        console.log("Something is wrong",err);
    }
};

async function getCategory(req,res){
    try{ 
    const response=await categoryService.getCategory(req.params.id);
    return res.json({
        success:true,
        error:{},
        data:response
    })
    }catch(err){
        console.log("there is something wrong");
    }

}

async function getCategories(req,res){
    try{ 
    const response=await categoryService.getCategories();
    return res.json({
        success:true,
        error:{},
        data:response
    })
    }catch(err){
        console.log("there is something wrong");
    }

}

module.exports={CreateCategory,getCategory,getCategories};