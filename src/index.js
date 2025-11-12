const express=require('express');
const app=express();
const {ConfigINFO:P}=require('./config/serverConfig');
const Port=P.Port;
const route=require('./Routes/apiRoutes');

app.use('/api',route);
console.log(Port);
app.listen(Port,()=>console.log(`Server Is Running${Port}`));