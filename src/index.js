//var Foo = require('./Foo');
import Foo, { myName }  from './Foo';

console.log(myName);

const foo = new Foo({ name: 'bar' });

console.log(foo);
foo.sayHi();

const myArray = [];
myArray.push(3);

const capitalize = ( input )=> {
  input = input + '!!!';
  return input.toUpperCase();
}

console.log(capitalize('foo'));
