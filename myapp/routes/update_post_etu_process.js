var express = require('express');
var path = require('path');
var router = express.Router();

let db=require("../BD_dao/model")



router.post('/', function(req, res, next) {
  var id_post = req.body.id_post
  var title= req.body.title
  var description = req.body.description
  var creationTime = req.body.creationTime

  

  var  sql = "update posts set title='"+title+"',description='"+description+"',create_time='"+creationTime+"' where id_post = " + id_post;


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
