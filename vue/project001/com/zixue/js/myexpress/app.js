const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/abc',express.static('hello'))
// app.listen(3000, () => console.log('Example app listening on port 3000!'))
var server =  app.listen(3000,function(){
	var host= server.address().address;
	var port = server.address().port;
console.log('Example app listening on port 3000! at http://%s:%s',host,port);
})