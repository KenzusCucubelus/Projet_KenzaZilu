var express = require('express');
var path = require('path');
var router = express.Router();

let db=require("../BD_dao/model")


router.post('/', function(req, res, next) {

  var pwdOld  = req.body.pwdOld
  var pwdNew1 = req.body.pwdNew1
  var pwdNew2 = req.body.pwdNew2


  console.log( req.session.user_id)



  var  sql1 = "SELECT * FROM users WHERE password='"+pwdOld+"' and id_user = "+  req.session.user_id;
  var  sql2 = "update users set password='"+pwdNew2+"' where id_user = " +  req.session.user_id;


  db.query(sql1,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }

        if(result.length == 0){
          res.json({status:0,msg:"Please verify your password"});
        }

        if(pwdNew1 == pwdNew2){
    
        db.query(sql2,function (err, result) {
            if(err){
              console.log('[SELECT ERROR] - ',err.message);
              return;
            }
           console.log('--------------------------SELECT----------------------------');
           console.log(result);
           console.log('------------------------------------------------------------\n\n');  
           res.redirect("http://127.0.0.1:3000/myinfos_prof")
      });

    }else{
        res.json({status:0,msg:"Two different passwords"});
    }
    
  

});
  




});


module.exports = router;
