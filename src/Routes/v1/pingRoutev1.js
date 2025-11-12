const express=require('express');
const route=express.Router();
const {PingController}=require('../../Controllers/PingController');
route.get('/',PingController);

module.exports=route;