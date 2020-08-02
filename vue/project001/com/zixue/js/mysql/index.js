var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.1.114',
  user     : 'root',
  password : 'admin',
  database : 'msyd'
});
 
connection.connect();

//select
 connection.query('SELECT * from vue_list', function (error, results, fields) {
   if (error) throw error;
   console.log('The solution is: ', results);
 });
 //insert
 var  addSql = 'INSERT INTO vue_list(name,ctime) VALUES(?,?)';
 var  addSqlParams = ['23453', new Date()];
 //增
 connection.query(addSql,addSqlParams,function (err, result) {
         if(err){
          console.log('[INSERT ERROR] - ',err.message);
          return;
         }        
  
        console.log('--------------------------INSERT----------------------------');
        //console.log('INSERT ID:',result.insertId);        
        console.log('INSERT ID:',result);        
        console.log('-----------------------------------------------------------------\n\n');  
 });
 connection.end();