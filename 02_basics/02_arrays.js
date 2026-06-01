const nameArr = ['omkar' ,'aditya' ,'yogesh' ,'more']
const rollArr = [44,31,15,35]

// nameArr.push(rollArr) //= > [ 'omkar', 'aditya', 'yogesh', 'more', [ 44, 31, 15, 35 ] ]
// 'we can access elemant by this'
// console.log(nameArr[4][1])  // => 31
// console.log(nameArr)

// const newlist = nameArr.concat(rollArr) 
// console.log(newlist)

// Better way to add two or more arrays :- 
// console.log(...nameArr,...rollArr)  // =>omkar aditya yogesh more 44 31 15 35
//To make it array
// const newArr = [...nameArr,...rollArr] 
// console.log(newArr)

//
const another_array = [1,2,3,[4,5],6,[7,[8,9,0]]]
// to make nested to plane array : -
// const new_another_array = another_array.flat(Infinity) // we can give any number ensted of Infinity
// console.log(new_another_array)

// console.log(Array.isArray(nameArr))
// console.log(Array.from("OMKAR   "))
// console.log(Array.from({name : "omkar"})) // it not make any array


let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3))