/* 模块开发 */
/* 传统：
	命名冲突
	文件依赖
	
 */

/* 一个js文件就是一个模块，变量之间互相对立 */

var sum = function(a, b) {
	return parseInt(a) + parseInt(b)
}

/* 导出模块成员 */
exports.sum = sum;
