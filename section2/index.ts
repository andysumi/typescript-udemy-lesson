let hasValue: boolean = true; // 方注釈
let bool = true; // 型推論
// 基本的には"型推論"を使い、型推論が使えない場合に"方注釈"を使う

let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;

let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

// オブジェクト
let person: {
  name: string,
  age: number
} = {
  name: 'Jack',
  age: 21
}

// 配列
let fruits: string[] = ['Apple', 'Banana', 'Grape'];

// Tuple型
let book: [string, number, boolean] = ['business', 1500, false];

// Enum型
enum Size {
  SHORT = 'short',
  TALL = 'tall',
  GEANDE = 'grande',
  VENTI = 'venti'
}
let coffee = {
  hot: true,
  size: Size.SHORT
}

// any型
let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
let str = 'string';
str = anything
// any型はなるべく使わない

// union型
let unionType: number | string = 10;
unionType = 'hello';
let unionTypes: (number | string)[] = [10, 'hello'];

// Literal型
let apple: 'apple' = 'apple';
const bnana = 'banana';
let ClothSize: 'small' | 'medium' | 'large' = 'large';
let cloth: {
  color: string;
  size: 'small' | 'medium' | 'large';
} = {
  color: 'red',
  size: 'large'
}

//typeエイリアス
type ClothSize = 'small' | 'medium' | 'large';
let clothSize: ClothSize = 'large';
let cloths: {
  color: string;
  size: ClothSize;
} = {
  color: 'red',
  size: 'large'
}

// 関数
function add(a: number, b: number): number {
  return a + b;
}
function sub(a: number, b: number) {
  return a - b;
}
// 関数は引数も戻り値も型注釈したほうがいい
function sayHello(): void {
  console.log('Hello');
}
console.log(sayHello);
// 実際はundefindを返している
let plus: (a: number, b: number) => number = add;
let kake: (a: number, b: number) => number = function (a: number, b: number): number {
  return a * b
};
let doubleNumber = (a: number): number => a * 2;
let bai: (a: number) => number = a => a * 2;

// unknown型
let unknownValue: unknown;
let text: string;
unknownValue = 'hello';
unknownValue = 21;
unknownValue = true;
// text = unknownValue; any型より厳密
if (typeof unknownValue === 'string') {
  text = unknownValue
}

// never型
function error(message: string): never {
  throw new Error(message);
}
console.log(error('error'));
