var express = require('express');
var path = require('path');
var router = express.Router();
/*const mysql = require('mysql')

//Connection with Mysql:
var connection = mysql.createConnection({
    host : 'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'epidemicsystem'
})
connection.connect((err) => {  
  if(!err) {  
      console.log("Db Connection Succeed");  
  }  
  else{  
      console.log("Db connect Failed \n Error :" + JSON.stringify(err,undefined,2));  
  }  
}); */

let db=require("../BD_dao/model")

router.get('/', function(req, res, next) {
  var email = req.query.email
  var pwd = req.query.pwd
    
  var  sql = "SELECT * FROM students WHERE email='"+email+"' and password='"+pwd+"'"


  db.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }

        if(result.length == 0){
          res.json({status:0,msg:"Please verify your email or password"});
        }
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');
       /*req.session.user=req.query.username;
       req.session.isLogin=true;*/
       res.json({status:1,msg:"Login successful"});
       
      
});
})

module.exports = router;
