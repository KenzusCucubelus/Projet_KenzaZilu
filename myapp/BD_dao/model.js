const mysql = require('mysql')


//Connection with Mysql:
const connection = mysql.createConnection({
    host:process.env.MYSQL_HOST || '0.0.0.0',//'172.17.0.1',
    port: process.env.MYSQL_PORT  ||'3306',
    user: process.env.MYSQL_USER ||'root',
    password: process.env.MYSQL_PASS  ||'root',
    database: process.env.MYSQL_DB ||'epidemicsystem'
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
