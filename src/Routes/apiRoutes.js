const express=require('express');
const route=express.Router();
const v1Route=require('./v1/index');
const v2Route=require('./v2/index');

route.use('/v1',v1Route);
route.use('/v2',v2Route);

module.exports=route;