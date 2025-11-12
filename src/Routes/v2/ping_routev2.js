const express=require('express');
const route=express.Router();
const {PingControllerV2}=require('../../controllers/PingController');
route.get('/',PingControllerV2);

module.exports=route;