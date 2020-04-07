class Person {
  static species = 'Homo sapiens';
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }
  protected age: number;
  constructor(public readonly name: string, initAge: number) {
    this.age = initAge;
  }
  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}
// const quill = new Person('Quill', 38);
// quill.incrementAge();
// quill.greeting();

class Teacher extends Person {
  get subject(): string {
    if (!this._subject) {
      throw new Error('This is no subject.')
    }
    return this._subject;
  }
  set subject(value: string) {
    if (!value) {
      throw new Error('This is no subject.')
    }
    this._subject = value;
  }
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  greeting(this: Teacher) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
  }
}
// const teacher = new Teacher('Bob', 26, 'Math');
// teacher.subject = 'Music';
// console.log(teacher.subject)
// teacher.greeting();

console.log(Person.species);
console.log(Person.isAdult(15));
console.log(Teacher.species);
console.log(Teacher.isAdult(25));
