const express=require('express');
const app=express();
const {ConfigINFO:P}=require('./config/server_config');
const Port=P.Port;
const route=require('./routes/api_routes');

app.use('/api',route);
console.log(Port);
app.listen(Port,()=>console.log(`Server Is Running${Port}`));