const express=require('express');
const route=express.Router();
const PingRouter=require('./ping_route_v1.js');
const ProductsRouter=require('./product_router_v1.js');
const CategoryRoute=require('./category_route.js');
route.use('/ping',PingRouter);
route.use('/Products',ProductsRouter);
route.use('/Category',CategoryRoute);
module.exports=route;