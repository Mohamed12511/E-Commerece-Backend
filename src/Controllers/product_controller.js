const createProduct=(req,res)=>{
    try{

        return res.json({
            sucess:true,
            err:{},
            msg:"Successfully Create a Product",
            data:{
                id:Math.random()*(20),
                title:req.body.title,
                description:req.body.description,
                category:req.body.category,
                price:req.body.price,
                image:''
            }
        })

    }catch(err){
        return res.send(`There a mistake ${err}`);
    }
};

module.exports={createProduct}