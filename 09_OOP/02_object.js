function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 2
multiplyBy5.base = 1
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.base);
// console.log(multiplyBy5.power);

function user(name,score) {
    this.name = name
    this.score = score
}

user.prototype.increment = function(){
    this.score++
}

user.prototype.getname = function (){
    return `Welcome ${this.name}`
}

const u1 = new user('omkar',99)
u1.increment()

console.log(u1);
console.log(u1.getname());

