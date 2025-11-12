const express=require('express');
const route=express.Router();
const {PingController}=require('../../controllers/PingController');
route.get('/',PingController);

module.exports=route;