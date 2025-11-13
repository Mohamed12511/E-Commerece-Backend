const express=require('express');
const route=express.Router();
const {createProduct}=require('../../controllers/product_controller');
const {createProductValidator}=require('../../middlewares.js/product_middleware.js');
route.post('/',createProductValidator,createProduct);

module.exports=route;