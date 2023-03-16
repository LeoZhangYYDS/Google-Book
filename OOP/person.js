export default class Person {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }
  sayHi() {
    console.log(this.name + " says hi.");
  }
  intro() {
    console.log("Hi,my name is " + this.name + ".");
  }
}
