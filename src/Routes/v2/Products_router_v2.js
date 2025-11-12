const express=require('express');
const route=express.Router();

route.get('/',(req,res)=>res.json({msg:"I am In Products V2"}));
module.exports=route;