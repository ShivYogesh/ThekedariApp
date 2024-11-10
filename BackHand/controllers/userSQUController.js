const mySQLConnection=require('../connection');

const tabelName="tbl_masters_users";
const dataModel=require('../dataModels/userSQUModel');


/* ********************  START ********************************/
/*  This function Return All  Record in Tabel */
async function handelgetall(req,response){
  await dataModel.sync();
  data= await dataModel.findAll();
  return response.status(200).json({msg:"Data Save : " ,data1: data});
  
};
/*********************** END **********************************/
/* ********************  START ********************************/

/*  This function Return All  Record in Tabel */
async function handelgetbyid(req,response){
  await dataModel.sync();
  foundeddata= await dataModel.findAll({
    where:{id:req.param.id},
  });
  return response.status(200).json({msg:"Data found : " ,data: foundeddata});
  
};

/*********************** END **********************************/
/* ********************  START ********************************/
/*  This function Add A New Record in Tabel */
async function handelCreate(req,response){
   await dataModel.sync();
   const data = dataModel.create({ id:req.body.id , username:req.body.username,pwd:req.body.pwd,isactive:req.body.isactive });
   return response.status(200).json({msg:"Data Save : " ,data1:(await data).toJSON() });
   
};

/*********************** END **********************************/
/* ********************* START ********************************/
/*  This function Update  A Old Record in Tabel */
async function  handelUpdatebyid(req,response){
  await dataModel.sync();
  const data = dataModel.create({ username:req.body.username});
  data.id=req.body.id;
  data.username=req.body.username;
  data.pwd=req.body.pwd;
  data.isactive=req.body.isactive;
  (await data).save();
  return response.status(200).json({msg:"Data Save : " ,data1:(await data).toJSON() });
  
};
/*********************** END **************************************/
/*********************** START ************************************/

/*  This function Delete  A Old Record From Tabel */
async function handelDeletebyid(req,response){
  console.log("User Deletion Calling ");
  console.log(req.param.id);
 /* await dataModel.sync();
  data= await dataModel.findAll({
    where:{id:req.param.id},
  });
  await data.destroy();
  */
  return response.status(200).json({msg:"Data Deleted : "});
  
};
/*********************** END **************************************/

module.exports={
    handelCreate,
    handelDeletebyid,
    handelgetall,
    handelgetbyid,
    handelUpdatebyid,
   

};