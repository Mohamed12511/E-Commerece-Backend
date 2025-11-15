const {DataTypes}=require('sequelize');
const {sequelize}=require('../config/db.config');


const Category=sequelize.define("category",{  // File
    name:{type:DataTypes.STRING,allowNull:false},
    description:{type:DataTypes.STRING,allowNull:false}
},{
    tableName:"category"
});

module.exports={Category};