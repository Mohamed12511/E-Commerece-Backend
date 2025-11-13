const express=require('express');
const response_time=require('response-time');
const app=express();
const {info}=require('./config/server_config');
const port=info.port;
app.use(express.json()); // if the request has json body will make it js obj
app.use(express.urlencoded()); // if the request has html body will make it js obj
app.use(express.text()); // if the request has text body will make it String 
app.use(response_time());
const route=require('./routes/api_routes');
app.use('/api',route);
app.listen(port,()=>console.log(`Server Is Running on ${port}`));