function DistBuild() {
	return "hello world"
}
console.log(DistBuild())

//  测试协同开发是否是成功的
class Animal{
	name;
	age;
	sex;
	constructor(name, age, sex) {
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
}
class Sheep extends Animal{
	eat(food){
		console.log(`正在吃${food}`);
	}
	constructor(name, age, sex) {
		super(name, age, sex);
	}
}
let s1 = new Sheep("肖恩", 12, "女")
console.log(s1.name);
s1.eat("青草")