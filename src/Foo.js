class Foo{
  constructor({ name }){
    this.name = name;
  }
  sayHi(){
    console.log(this.getMessage());
  }
  getMessage(){
    return `Hello my name is ${this.name}!!!!'`;
  }
}

export default Foo;

export const myName = 'Prof';
/*
function Foo(config){
  this.name = name;
}

Foo.prototype.sayHi = function(){
  console.log(this.getMessage());
};

Foo.prototype.getMessage = function(){
  return 'Hello my name is ' + this.name + '!';
};
*/

/*
function somethingSilly(){
  console.log('hello');
}
*/


//module.exports = Foo;
