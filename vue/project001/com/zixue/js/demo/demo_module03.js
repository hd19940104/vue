/* 函数扩展 */
function foo(param) {
	let p = param || "test";
	console.log(p)
}
foo("hi");

function sum(a, b, c) {
	console.log(a + b + c)
}
let arr = [1, 4, 34, 5];
sum.apply(null, arr);
sum(...arr)
