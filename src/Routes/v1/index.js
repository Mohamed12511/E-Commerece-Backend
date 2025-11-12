const express=require('express');
const route=express.Router();
const PingRouter=require('./pingRoutev1.js');
const ProductsRouter=require('./ProductRouterV1.js');
route.use('/ping',PingRouter);
route.use('/Products',ProductsRouter);

module.exports=route;