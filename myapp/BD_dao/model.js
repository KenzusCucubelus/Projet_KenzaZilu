const mysql = require('mysql')


//Connection with Mysql:
const connection = mysql.createConnection({
    host : 'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'epidemicsystem'
})
connection.connect((err) => {  
  if(!err) {  
      console.log("Db Connection Succeed");  
  }  
  else{  
      console.log("Db connect Failed \n Error :" + JSON.stringify(err,undefined,2));  
  }  
}); 

let query=(sql,callback)=>{
    connection.query(sql,function(err,rows){
        callback(err,rows);
    });
}
exports.query = query
