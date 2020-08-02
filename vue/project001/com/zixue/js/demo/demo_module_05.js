/**
 * 类与继承
 */
/* function Animal(name) {
	this.name = name;
}

Animal.prototype.showName =function(){
	console.log(this.name);
}

var a = new Animal("Tom");
a.showName();
var a1 = new Animal("Jerry");
a1.showName(); */

//-------------------------------------

class Animal {
	//静态方法
	static eat() {
		console.log("this is static function")
	}

	//构造方法
	constructor(name) {
		this.name = name;
	}
	showName() {
		console.log(this.name);
	}
}

let a = new Animal("class");
a.showName();
Animal.eat();

//===============================
class Dog extends Animal {
	constructor(name, age) {
		super(name);
		this.age = age;
	}
	play(){
		console.log("this is dog.play function :"+this.age)
	}
}
let dog = new Dog("xiaohei",29);
dog.showName();
dog.play();
