const express=require('express');
const route=express.Router();

const {CreateCategory,getCategory,getCategories}=require('../../controllers/category_controller');

route.post('/',CreateCategory);
route.get('/',getCategories);
route.get('/:id',getCategory);

module.exports=route;