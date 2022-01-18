var express = require('express');
var path = require('path');
var router = express.Router();
/*const mysql = require('mysql')

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


router.post('/', function(req, res, next) {
  var email = req.body.email
  var pwd = req.body.pwd
  var first_name = req.body.first_name
  var last_name = req.body.last_name
  var birthday = req.body.birthday
  var formation = req.body.formation

  console.log(email)
  
 // var user = [last_name,first_name,pwd,birthday,email,formation]
  var  sql = "insert into students (lastname,firstname,password,birthday,email,formation) values('"+last_name+"','"+first_name+"','"+pwd+"','"+birthday+"','"+email+"','"+formation+"')"


  db.query(sql,function (err, result) {
      if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
      }
     console.log('--------------------------SELECT----------------------------');
     console.log(result);
     console.log('------------------------------------------------------------\n\n');  
     res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

});


module.exports = router;
