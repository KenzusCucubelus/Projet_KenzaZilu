var express = require('express');
var path = require('path');
var router = express.Router();


let db=require("../BD_dao/model")


router.get('/', function(req, res, next) {
    var id_post = req.query.id_post
  

  console.log(id_post)


  
 // var user = [last_name,first_name,pwd,birthday,email,formation]
  var  sql = "DELETE FROM posts WHERE id_post="+id_post


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
