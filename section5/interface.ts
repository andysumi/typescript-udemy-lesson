// type addFunc = (num1: number, num2: number) => number
interface addFunc {
  (num1: number, num2: number): number
}

let addFunc: addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Nameable {
  readonly name: string;
  nickName?: string;
}
let nemable: Nameable = {
  name: 'Quill',
  // nickName: 'Quill'
}

interface Human extends Nameable {
  age: number;
  greeting?(message: string): void;
}

class Developer implements Human {
  constructor(public name: string = 'Hello', public age: number){};
  greeting(message: string) {
    console.log(message);
  }
}

let user: Human = new Developer('Quill', 38);
