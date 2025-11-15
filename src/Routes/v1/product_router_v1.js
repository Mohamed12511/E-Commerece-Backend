const express=require('express');
const route=express.Router();
const {createProductValidator}=require('../../middlewares.js/product_middleware.js');
const {Get_All_Products,getProduct,createProduct}=require('../../controllers/product_controller');
route.post('/',createProductValidator,createProduct);
route.get('/',Get_All_Products);
route.get('/:id',getProduct);

module.exports=route;