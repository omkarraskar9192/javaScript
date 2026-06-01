// IF i want to this type of work trim the string by property named as 'givereallength' : -
const name = 'omkar      '
// console.log(name.length); // => 11
// console.log(name.trim().length); // =>  5

// Mean like this console.log(name.givereallenght) output will be 5
// no need to use .trim().lenght

const myArry = [1,3,4,5]

const myObject ={
    name : 'omkar',
    age : 20,
}

Object.prototype.isObject = function(){
    console.log('I am Object');
    
}

Array.prototype.isArray = function(){
    console.log('I am Array')
}

// myArry.isObject()
// myObject.isObject()
// myArry.isArray()
// myObject.isArray()   // ERROR 

// ~~~~~~~~ Expline ~~~~~~~~~~~
/*
In js this is every thing is Object 
But
Object is not every this .....Hahaha.........
Ex. : - like array is object but object is not array

now you not undustand this check the video or digram of it on google

*/

// now move on first Q.

String.prototype.givereallentgh= function(){
    return this.trim().length
}

console.log(name.givereallentgh());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

