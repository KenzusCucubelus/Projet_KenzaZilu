var express = require('express');
var path = require('path');
var router = express.Router();


let db=require("../BD_dao/model")

router.get('/', function(req, res, next) {
  var id_U = req.session.user_id
  var  sql = "SELECT * FROM users WHERE id_user="+id_U
  console.log(id_U)


  db.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }

        if(result.length == 0){
          res.json({status:0,msg:"show list fails"});
        }
        res.render('myinfos_prof',{
            title:"MyInformation",
            data:result
        })


       
      
});
})

module.exports = router;
