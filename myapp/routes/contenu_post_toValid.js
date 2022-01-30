
const { DH_CHECK_P_NOT_PRIME } = require('constants');
var express = require('express');
var path = require('path');
var router = express.Router();


let db=require("../BD_dao/model")


router.get('/', function(req, res, next) {

  var id_post = req.query.id_post
  var id_user = req.query.id_user
  var  sql1 = "SELECT * FROM posts WHERE id_post="+id_post
  console.log("contenu_postkkk"+id_post)

  var sql2 =  "SELECT lastname,firstname,password,birthday,email,formation,photo FROM `users` WHERE id_user="+id_user


  db.query(sql1,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }

        db.query(sql2,function (err,result2){


            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
              }

            if(result.length == 0){
                res.json({status:0,msg:"show post fails"});
              }
            
              res.render('contenu_post_toValid',{
                title:"A Post",
                data:result,
                data_user : result2
            })

        })

      
      
      
});
})

module.exports = router;


