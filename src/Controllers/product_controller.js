const repository=require('../repository/fake_store_repository');
const ProductService=require('../services.js/product_service');
const productService=new ProductService(new repository());

const createProduct=(req,res)=>{
    try{
        const response=productService.Create_Product(req.body);
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


const Get_All_Products=async (req,res)=>{
try{
        const response=await productService.getProducts();    
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
         const product=productService.getProductById(req.params.id);
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