const path = require('path');
const fs= require('fs');

//H:\001_workplace\001011_workplace_webstorm\001011001_vue\project001\com\zixue\js
//console.log(__dirname);
let spath = path.join(__dirname,'../lib','vue-2.4.0.js');
let dpath = path.join(__dirname,'/lib','vue-2.4.0.js');
//console.log(spath)

let readStream =  fs.createReadStream(spath);
let writeStream = fs.createWriteStream(dpath);

let num = 1;
readStream.on('data',(chunk)=>{
	num++;
	writeStream.write(chunk);
});
readStream.on('end',()=>{
	console.log("文件处理完成"+num);
});