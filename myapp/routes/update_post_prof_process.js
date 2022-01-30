var express = require('express');
var path = require('path');
var router = express.Router();

let db=require("../BD_dao/model")



router.post('/', function(req, res, next) {
 var id_post = req.body.id_post   
 var state = req.body.status
 console.log(state)
 var sql=""

  
if(state=="Invalid"){
    sql = "update posts set status='Valid' where id_post = " + id_post;

}else{
    sql = "update posts set status='Invalid' where id_post = " + id_post;
}
  db.query(sql,function (err, result) {
      if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
      }
     console.log('--------------------------SELECT----------------------------');
     console.log(result);
     console.log('------------------------------------------------------------\n\n');  
     res.redirect("http://127.0.0.1:3000/post_list_prof")
     
});

});


module.exports = router;
