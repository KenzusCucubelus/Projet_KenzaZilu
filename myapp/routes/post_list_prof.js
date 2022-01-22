var express = require('express');
var path = require('path');
var router = express.Router();


let db=require("../BD_dao/model")


router.get('/', function(req, res, next) {

var  sql = "SELECT * FROM posts"

db.query(sql,function (err, result) {
      if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
      }
     console.log('--------------------------SELECT----------------------------');
     console.log(result);
     console.log('------------------------------------------------------------\n\n');  
     //res.write(JSON.stringify(result))
     res.render('/posts',{title:'Post List',postData:result})
     res.end();
     
});

});


module.exports = router;
