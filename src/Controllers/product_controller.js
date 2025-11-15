
const {getProducts,Create_Product,getProductById}=require('../services.js/product_service');

const createProduct=(req,res)=>{
    try{
        const response=Create_Product(req.body);
        return res.json({
            sucess:true,
            err:{},
            msg:"Successfully Create a Product",
            data:{response}
        })

    }catch(err){
        return res.send(`There a mistake ${err}`);
    }
};


const Get_All_Products=(req,res)=>{
try{
        const response=getProducts();    
        res.json({
            sucess:true,
            err:{},
            msg:"Successfully got all products",
            data:{response}
        })

    }catch(err){    
        return res.status(400).send(`There a mistake ${err}`);
    }
}

const getProduct=(req,res)=>{
    try{
         const product=getProductById(req.params.id);
        res.json({
            sucess:true,
            err:{},
            msg:"Successfully got the product",
            data:{product}
        })

    }catch(err){    
        return res.status(400).send(`There a mistake ${err}`);
    }
}

module.exports={createProduct,Get_All_Products,getProduct};