/* 文件操作案例（初始化目录结构） */
const fs = require('fs')
const path = require('path')

let fileContent = `
	<div>
		<span>12</span>
		<span>12</span>
		<span>12</span>
	</div>
`;
let root = "H:\\001_workplace\\001011_workplace_webstorm\\001011001_vue\\project001\\com\\zixue\\js";
let initData = {
	projectName: "mydemo",
	data: [{
		name: "img",
		type: "dir"
	}, {
		name: "css",
		type: "dir"
	}, {
		name: "js",
		type: "dir"
	}, {
		name: "index",
		type: "file"
	}]
}
let buf = Buffer.from("test", "utf-8");
console.log(buf.toString());
//创建目录
fs.mkdir(path.join(root, initData.projectName), (err) => {
	if (err) return;
	// 创建子目录和文件
	initData.data.forEach((item) => {
		if (item.type == 'dir') {
			// 创建子目录
			fs.mkdirSync(path.join(root, initData.projectName, item.name));
		} else if (item.type == 'file') {
			// 创建文件并写入内容
			fs.writeFileSync(path.join(root, initData.projectName, item.name), fileContent);
		}
	});
});
// 异步读取
fs.readFile('../vueList.html', function(err, data) {
	if (err) {
		return console.error(err);
	}
	console.log("异步读取: " + data.toString());
	/* 文件异步写入 */
	fs.writeFile('文件.html', data,'utf-8', (err) => {
	  if (err) throw err;
	  console.log('文件已被保存');
	});
});
fs.stat('mydemo/index',function(err,stats){
	if(err){
		return console.log(error(err))
	}
	console.log(stats)
})

/* 事件处理机制 js单线程 */

