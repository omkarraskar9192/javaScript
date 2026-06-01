// Functions in JS
// ~~~~~~~~~~~~ Function defination ~~~~~~~~
// function sumTwoNumber(num1,num2) {
//     return (num1+num2)
// }
// console.log(sumTwoNumber(3,2))

// ~~~~~~~~ Pass multipal paramiters to functions ~~~~~~~~~~~
// function showAllNumbers(...Numbers){
//     return Numbers
// }
// console.log(showAllNumbers(5,2,52,12,54,214,123))  // The Numbers are return in array format
// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000))

// You can pass array and Objects as argument in JS
// ##Array
// const myArr = [0,1,2,3,4,5,6]
// function showArray(array){
//     return array
// }
// console.log(showArray(myArr))  // It will return array 

// ## Object
// const myObject ={
//     name : 'Omkar',
//     rollNo : 44,
//     age : 18
// }
// function showStudentDetails(student){
//     return `Name : ${student.name} \nRoll No : ${student.rollNo} \nage : ${student.age}`
// }
// console.log(showStudentDetails(myObject))



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
