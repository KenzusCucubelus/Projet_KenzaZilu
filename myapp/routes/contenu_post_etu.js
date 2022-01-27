var express = require('express');
var path = require('path');
var router = express.Router();


let db=require("../BD_dao/model")


router.get('/', function(req, res, next) {

  var id_post = req.query.id_post
  var  sql = "SELECT * FROM posts WHERE id_post="+id_post
  console.log("contenu_post_etu"+id_post)


  db.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }

        if(result.length == 0){
          res.json({status:0,msg:"show post fails"});
        }
        res.render('contenu_post_etu',{
            title:"My post",
            data:result
        })


       
      
});
})

module.exports = router;
