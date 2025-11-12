const express=require('express');
const route=express.Router();
const PingRouter=require('./pingRoutev2.js');
const ProductsRouter=require('./ProductsRouterV2');
route.use('/ping',PingRouter);
route.use('/Products',ProductsRouter);

module.exports=route;