import Person from "./person.js";

export default class Student extends Person {
  constructor(name, age, height, weight, major) {
    super(name, age, height, weight);
    this.major = major;
  }
  study() {
    console.log("I am studying now.");
  }
}
