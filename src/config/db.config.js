const {Sequelize}=require('sequelize');
const {info}=require('./server_config');
const {DB_NAME,DB_User,DB_PASS,DB_Url}=info;
console.log(DB_Url);
const sequelize=new Sequelize(DB_NAME,DB_User,DB_PASS,{
    host:DB_Url,
    dialect:'mssql'
});

async function o(){
   const m= await sequelize.sync({ alter: true });
 //  console.log(m);
}
o();
module.exports={sequelize};