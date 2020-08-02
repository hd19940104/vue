/* ES6---字符串 */
{
	/* 块级作用域 */
	let flag = 1212;
	console.log(flag)
}

var [a, b, c] = [1, 5, 6];
console.log(a, b, c);

/* 对象的结构赋值 */
let {
	foo: abc,
	bar
} = {
	foo: "hello",
	bar: "hi"
};
console.log(abc, bar);
/* includes() */
/* startsWith() */
/* endsWith() */

let obj = {
	name: "ceshi",
	age: "10",
	gener: "male"
};
let tag = '<div><span>' + obj.name + '</span><span>' + obj.age + '</span><span>' + obj.gener + '</span></div>';
console.log(tag)
/* 模板里面可有格式 */
let tags = `
	<div>
		<span>${obj.name}</span>
		<span>${obj.age}</span>
		<span>${obj.gener}</span>
	</div>
`
console.log(tags)
