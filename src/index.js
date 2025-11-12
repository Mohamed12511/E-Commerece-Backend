const express=require('express');
const app=express();
const {ConfigINFO:Conig}=require('./config/serverConfig');
app.listen(ConfigINFO.Port,()=>console.log("Server Is Running"));