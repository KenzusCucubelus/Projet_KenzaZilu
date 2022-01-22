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
  var role = req.query.role

 
    
  var  sql = "SELECT * FROM users WHERE email='"+email+"' and role='"+role+"'"+" and password='"+pwd+"'"


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
       
      //session:
      var string = JSON.stringify(result);
     // console.log('>> string: ', string );
      var json=JSON.parse(string);
     // console.log('>> json: ', json);
     // console.log('>> user.id_user: ', json[0].id_user);
      req.session.user_id= json[0].id_user;
      console.log("user id is "+req.session.user_id)
    
      if(req.session.user_id){
       // res.location('http://127.0.0.1:3000/post_list_stu');
       //res.render('post_list_stu');  //engine...how to enter js....
       res.redirect('http://127.0.0.1:3000/post_list_stu')
      }else{
        res.json({status:1,msg:"session fails"});
      }
      
});
})

module.exports = router;
