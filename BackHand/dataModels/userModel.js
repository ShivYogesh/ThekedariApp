const {  DataTypes } = require('sequelize');
const sequelize =require('../squlizeconnection');

const userModel=sequelize.define('tbl_masters_users',{
    id:{type:DataTypes.NUMBER,allowNull:false,primaryKey:true},
    username:{type:DataTypes.STRING,allowNull:false},
    pwd:{type:DataTypes.STRING,allowNull:false},
    isactive:{type:DataTypes.BOOLEAN}
},
{ 
    TabelName:'tbl_masters_users'
}
);
 
module.exports =userModel;