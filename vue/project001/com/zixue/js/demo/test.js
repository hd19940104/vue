function sum(init) {
	var sum = 0;
	for (var i = 0; i < init; i++) {
		sum += i;
	}
	return sum;
}

var ret = sum(100);
console.log(ret);
setTimeout(function() {
	console.log("this is setTimeout");
}, 100);

var setIntervalCount = 0;
var interval = setInterval(function() {
	console.log("this is setInterval[" + setIntervalCount + "]")
	setIntervalCount += 1;
	if (setIntervalCount == 3) {
		clearInterval(interval);
		console.log("stop interval")
	}
}, 100);
/* 打印node运行地址 文件全路径 */
console.log("process.argv-->" + process.argv);
/* 打印系统架构 */
console.log("process.arch-->" + process.arch);
/* 打印文件目录 */
console.log("__dirname-->" + __dirname);
/* 打印全文件地址 */
console.log("__filename-->" + __filename);
