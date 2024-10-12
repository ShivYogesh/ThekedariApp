const mySQLConnection=require('../connection');
const tabelName="tbl_usermaster";
var _userModel=require('../dataModels/userModel');

/* START*/
/*  This function Get All Data from Tabel*/
async function handelGetAll(req,response){
    console.log("hit handelGetAll Request : ");
    mySQLConnection.query('select * from '+tabelName,(err,rows)=>{
        if(err)
        {
            return console.log("Error From  GetUser Api-  : " + err);
        }
        else
        {
            return response.status(200).send(rows);
        }
    })// End mySQLConnection
};

/* END */
/* START*/
/*  This function Get  Data By Id from Tabel -Single Record */
async function handelGetById(req,response){
    _userModel.id=req.params.id;
    mySQLConnection.query('select * from '+tabelName+' where id='+req.params.id,(err,rows)=>{
    
        if(err)
        {
            return console.log("Error From  Get Api By Id : " + err);
        }
        else
        {
            return response.status(200).send(rows);
        }
    })// End mySQLConnection
};


/* END */
/* START*/
/*  This function Add A New Record in Tabel */
async function handelAddNewRecord(req,response){
    var id=req.body.id;
    var username=req.body.username;
    var pwd=req.body.pwd;
   
    var sqlInsert="insert into "+tabelName+"(id,username,pwd) values("+id+",'"+username+"','"+pwd+"')";
    console.log("calling handelAddNewRecord"+req.url);
    console.log("new user creation url");
    mySQLConnection.query(sqlInsert,(err,rows)=>{
    
        if(err)
        {
            return response.status(400).send("Error From  Post Api Add New : " + err);
           
        }
        else
        {
            return response.status(200).send("Record Added Suscess Fully with :"+rows);
        }
    })// End mySQLConnection
};

/* END */
/* START*/
/*  This function Update A Old Record By Id in Tabel */
async function handelUpdateById(req,response){
    mySQLConnection.query('select * from '+tabelName,(err,rows)=>{
    
        if(err)
        {
            return console.log("Error From  Update Api By Id : " + err);
        }
        else
        {
            return response.status(200).send(rows);
        }
    })// End mySQLConnection
};

/* END */
/* START*/
/*  This function Delete A Record By Id in Tabel */
async function handelDeleteById(req,response){
    mySQLConnection.query('delete  from '+tabelName+' where id='+req.params.id,(err,rows)=>{
    
        if(err)
        {
            return response.status(400).send(err);
        }
        else
        {
            return response.status(200).send(rows);
        }
    })// End mySQLConnection
};
/* END */
module.exports={
    handelGetAll,
    handelGetById,
    handelAddNewRecord,
    handelUpdateById,
    handelDeleteById,
};