interface Engineer {
  name: string;
  role: string;
}
interface Blogger {
  name: string;
  follower: number;
}
interface EngineerBlogger extends Engineer, Blogger {}
const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber

function toUpperCase(x: string): string;
function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return '';
}

type NomadoWorker = Engineer | Blogger;
function describeProfile(nomadoWorker: NomadoWorker) {
  console.log(nomadoWorker.name);
  if ('role' in nomadoWorker) {
    console.log(nomadoWorker.role);
  }
  if ('follower' in nomadoWorker) {
    console.log(nomadoWorker.name);
  }
}

class Dog {
  speak() {
    console.log('bow-wow');
  }
}
class Bird {
  speak() {
    console.log('tweet-tweet');
  }
  fly() {
    console.log('flutter');
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());

// const input = <HTMLInputElement>document.getElementById('input');
const input = document.getElementById('input') as HTMLInputElement; // Reactで使う場合

interface Designer {
  name: string;
  [index: string]: string;
}
const designer: Designer = {
  name: 'Quill',
  hoge: 'hoge'
}
console.log(designer.hoge);

interface DownloadData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}
const downloadData: DownloadData = {
  id: 1
}
console.log(downloadData.user?.name?.first);
console.log(downloadData.user ?? 'no-user');
type id = DownloadData["id"]
