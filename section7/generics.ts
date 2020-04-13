function copy<T extends { name: string }, U extends keyof T>(value: T, key): T {
  value[key];
  return value;
}
console.log(copy({ name: 'quill', age: 38}, 'name'));

class LightDatabase<T extends string | number | boolean>  {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());

interface ResponseData<T extends {message: string} = any> {
  data: T;
  status: number;
}
let tmp: ResponseData;

type MappedTypes = {
  -readonly [P in 'tomato' | 'pumpkin']?: P
}
