import Student from "./student.js";

export default class passedExamStudent extends Student {
  constructor(name, age, height, weight, major, grade) {
    super(name, age, height, weight, major);
    this.grade = grade;
  }
  score() {
    console.log(this.name + "passed exam and score is " + this.grade);
  }
}
