var express = require('express');
var path = require('path');
var router = express.Router();

let db=require("../BD_dao/model")


router.post('/', function(req, res, next) {
  var email = req.body.email
 // var pwd = req.body.pwd
  var first_name = req.body.first_name
  var last_name = req.body.last_name
  var birthday = req.body.birthday
  var formation = req.body.formation
 // var role = req.body.role

  console.log( req.session.user_id)
  

  var  sql = "update users set lastname='"+last_name+"',firstname='"+first_name+"',birthday='"+birthday+"',email='"+email+"',formation='"+formation+"' where id_user = " +  req.session.user_id;


  db.query(sql,function (err, result) {
      if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
      }
     console.log('--------------------------SELECT----------------------------');
     console.log(result);
     console.log('------------------------------------------------------------\n\n');  
     res.redirect("http://127.0.0.1:3000/myinfos_prof")
});

});


module.exports = router;
