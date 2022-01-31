var express = require('express');
var path = require('path');
var router = express.Router();


let db=require("../BD_dao/model")


router.get('/', function(req, res, next) {


  var  sql ="select users.id_user,lastname,firstname,birthday,email,formation,id_post,title,description,create_time,status from users,posts where posts.id_user = users.id_user"



  db.query(sql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }

   
        if(result.length == 0){
            res.json({status:0,msg:"show post fails"});
          }
        
          res.render('post_list_prof',{
            title:"Post list",
            data:result
        })



  
  
  
});

})



module.exports = router;
