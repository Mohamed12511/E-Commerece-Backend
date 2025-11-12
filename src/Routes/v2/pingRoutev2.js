const express=require('express');
const route=express.Router();
const {PingControllerV2}=require('../../Controllers/PingController');
route.get('/',PingControllerV2);

module.exports=route;