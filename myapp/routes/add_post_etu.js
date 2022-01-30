var express = require('express');
var path = require('path');
var router = express.Router();


let db=require("../BD_dao/model")


router.post('/', function(req, res, next) {
  var title=req.body.title
  var desc = req.body.description
  var date = req.body.creationTime
  var id_U =  req.session.user_id

  console.log(date)


  
 // var user = [last_name,first_name,pwd,birthday,email,formation]
  var  sql = "insert into posts (title,create_time,description,status,id_user) values('"+title+"','"+date+"','"+desc+"','Invalid',"+id_U+")"


  db.query(sql,function (err, result) {
      if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
      }
     console.log('--------------------------SELECT----------------------------');
     console.log(result);
     console.log('------------------------------------------------------------\n\n');  
     res.redirect("http://127.0.0.1:3000/post_list_stu")
});

});


module.exports = router;
