const express=require('express');
const route=express.Router();
const PingRouter=require('./ping_routev2.js');
const ProductsRouter=require('./Products_router_v2.js');
route.use('/ping',PingRouter);
route.use('/Products',ProductsRouter);

module.exports=route;