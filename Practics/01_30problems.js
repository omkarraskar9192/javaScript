// Q.01  Revese the string
/*
const str = 'hello'
function reversstr(str) {
    const splitstr = str.split("")
    // console.log(splitstr);
    const reversarray = splitstr.reverse()
    // console.log(reversarray);
    const reversestr = reversarray.join('')
    console.log(reversestr);
}
// reversstr(str)

// ~~~~~~~~~~~~~~~~~~~~~~~~~ OR ~~~~~~~~~~~~~~~~~~~~~~~~~
function reversestr(str){
    return str.split('').reverse().join('')
}

console.log(reversestr(str));
*/

// Q.02 Palindrome Checker
/*
const str = 'madam'

function ispalindrome(str) {
    const reversestr = str.split('').reverse().join('')
    // console.log(reversestr);
    if (str === reversestr) {
        return(true);
    }else{
        return(false);
} 
}
console.log(ispalindrome(str))

*/

// Q.03 Find the Largest Number in an array
/*
const numbers = [10, 5, 25, 8, 17,1000];
// const sortNumbers =numbers.sort()
// console.log(sortNumbers);
function largetnum(array) {
    let largest = array[0]
    array.forEach(element => {
        if (element > largest){
            largest = element
        }
        
        
    });
    return largest
}

console.log(largetnum(numbers));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Solve by 'for of' lopp

function findLargest(arr){
    let largest = arr[0]
    for (const num of arr){
        if (num > largest){
            largest = num
        }
    }
    return largest
}

console.log(findLargest(numbers));
*/

// Q. 04 Count Vowels in a String
/*
const str ='javascript'
const vowals ='aeiou'
function countVowels(str){
    let count = 0
    str = str.toLowerCase() // also add this
    str.split('').forEach(element => {
        if(vowals.includes(element)){
            count++
        }
        
    });
    return count
}

console.log(countVowels(str));
*/

// Q.05 Remove Duplicate Values from an Array
/*
const numbers = [1, 2, 2, 3, 4, 4, 5];
function removeduplicates(arr) {
    let newarr = []
    for(const num of arr){
        if (!newarr.includes(num)){
            newarr.push(num)
        }
    }

    return newarr
}
console.log(removeduplicates(numbers));
*/
// Q.06 Find the Second Largest Number
/*
const numbers = [18,10, 5, 25, 8, 17];
function findSecondLargestNo(arr){
    let largest = 0
    let secondlargest = 0
    for(const num of arr){
        if(largest < num){
            largest = num
            console.log(num)
        }
    }
    
    for(const num of arr){
        if (num > secondlargest && largest !== num){
            secondlargest = num
            console.log(num);
            

        }
    }
    return `largest : ${largest} \n secondlargest : ${secondlargest}`
}
console.log(findSecondLargestNo(numbers))
*/



// Q.07 Frequency Counter
/*
const arr = [1, 2, 2, 3, 1, 2];
function freqCount(arr){

    let count = {}
    for(const num of arr){
        if(!(count[num])){
            count[num] = (count[num] || 0 ) + 1
        }
        else{
            count[num] = count[num] + 1
        }
    }
    return count
}

console.log(freqCount(arr));

//~~~~~~~~~~~~~~~~~~OR~~~~~~~~~~~~~~~~~~~~~~~~~~~~``
function freqCount(arr) {
    let count = {};

    for (const num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    return count;
}

*/


//Q .08 Find the Missing Number
/*
const arr = [1, 2, 3, 5];
function maxnum(arr){
    let largest = arr[0]
    for(const num of arr){
        if (largest < num){
            largest = num
        }
    }
    return largest
}

const largestnum = maxnum(arr)
let totalSum = (largestnum*(largestnum+1))/2
function sumInArray(arr){
    let sum = 0
    for(const num of arr){
        sum = sum + num
    }
    return sum
    
}
const arrSum =sumInArray(arr)
if(!(totalSum===arrSum)){
    console.log((totalSum-arrSum));
}
*/

// Q.09 First Non-Repeating Character
/*
const str = "javascript"
function count(str){
    let charCount={}
    const strarr = str.split('')
    for(const char of strarr){
        charCount[char]=(charCount[char] || 0) + 1
    }
    return charCount
}

const countObj=count(str)

function firstNonRepeatingChar() {
    for(const char of str){
        if(countObj[char]===1){
            return char
        }   
    }
}
console.log(firstNonRepeatingChar());
*/

// Q.10 Check if Two Strings Are Anagrams
/*
const str1 = 'listen'
const str2 = 'silent'
function freqcount(str){
    let count={}
    for(const char of str){
        count[char]=(count[char] || 0) + 1
    }
    return count
}

// console.log(freqcount(str1));
// console.log(freqcount(str2));
function isObjectsEqual(Obj1,Obj2) {
    const keys1 = Object.keys(Obj1)
    const keys2 = Object.keys(Obj2)
      if (keys1.length !== keys2.length){
         return false;
        }

        return keys1.every(key => Obj1[key] === Obj2[key]);
}
    

function isAnagrams(str1,str2){
    if(str1.length !== str2.length){
        return false
    }else{
        let countStr1=freqcount(str1)
        let countStr2=freqcount(str2)
        return isObjectsEqual(countStr1,countStr2)
    }
}

console.log(isAnagrams(str1,str2));
*/

// console.log((isAnagrams(str1,str2)));


// Q. 11 FizzBuzz
/*
function fizzBuzz(num){
    for (let i = 1; i < num +1; i++) {
        if(i%3== 0 && i%5==0){
            console.log('FizzBuzz');
            
        }else if(i%3== 0 ){
            console.log('Fizz');
        }
        else if(i%5== 0 ){
            console.log('Buzz');
        }
        else{
            console.log(i);   
        }
    }
}
fizzBuzz(20)
*/


// Q. 12 Factorial of a Number

/*
function factor(num) {
    if(num ==0){
        return 1
    }else{
        return num*factor(num-1)}
}
console.log(factor(5))

*/

// Q. 13 Prime Number Check

/*
function isPrime(num){
    for (let i = 2; i < num; i++) {
        if(num%i==0){
            return false
        }
    }
    return true
}

/*
OR
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num < 2) {
        return false;
    }
    if (num % i === 0) {
        return false;
    }
}


console.log(isPrime(4));

*/

// Q.14 Fibonacci Series 

/*
function fibona(num){
    if(num==0){
        return 0
    }
    if(num == 1){
        return 1
    }
    return (fibona(num-1)+fibona(num-2))
}
function fibonacci(num){
    for (let i = 0; i < num; i++) {
        console.log(fibona(i));
        
        
    }
} 
fibonacci(8)

*/

// Q. 15 Find the Most Frequent Element


/*
const arr = [1, 2, 2, 3, 1, 2, 4];

function countfreq(arr){
    let countObj ={}
    for(const num of arr){
        countObj[num]=(countObj[num] || 0) + 1
    }
    return mostFreqElement(countObj)

}

function mostFreqElement(obj){
    const keys = Object.keys(obj)
    let mostfreq = 1
    // console.log(keys)
    for(const num of keys){
        if (obj[num] > obj[mostfreq]){
            mostfreq = num
        }
    }
    return mostfreq
}

console.log(countfreq(arr));
*/

// Q. 16 Find Common Elements Between Two Arrays
/*

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

function commonElements(arr1,arr2){
    const commonElement =[]
    for(const num of arr1){
        if(arr2.includes(num)){
            commonElement.push(num)
        }
    }
    return commonElement
}

console.log(commonElements(arr1,arr2));

*/

// Q. 17 Rotate an Array by K Positions


/*
const arr = [1, 2, 3, 4, 5];
const k = 2;

function rotateArray(arr,k){
    for (let i = 0; i < k; i++) {
        const last =arr.pop()
        arr.unshift(last)
        
    }
    return arr
}

console.log(rotateArray(arr,k));

*/

// Q. 18 Find the Longest Word in a Sentence


/*
const sentence = "I am learning JavaScript programming";

function longesWord(sentence){
    const sentArr = sentence.split(' ')
    console.log(sentArr);
    
    let longestWord = ''
    for(const word of sentArr){
        if(word.length > longestWord.length){
            longestWord = word
        }

    }
    return longestWord
}

console.log(longesWord(sentence));
*/


// Q. 19 Capitalize the First Letter of Every Word


/*
const sentense ="hello world javascript"

function capitalizeWords(sentence){
    const splitWord = sentence.split(' ')
    let newsplitWord = []
    for(const word of splitWord){
        let capword =word[0].toUpperCase()
        let remanword = word.slice(1)
        newsplitWord.push(capword + remanword)   
    }
    return newsplitWord.join(' ')
}
console.log(capitalizeWords(sentense));

*/


// Q. 20 Count the Number of Words in a Sentence

/*

const sentence = "I am learning JavaScript";

function countWord(sentence){
    let splitWord = sentence.split(' ')
    return splitWord.length
}
console.log(countWord(sentence));

*/

// Q. 21 Sum of All Elements in an Array
// && 22 and Find Avg
/*
const arr = [10, 20, 30, 40];

function sumOfElement(arr){
    let sum = 0
    for(const num of arr){
        sum = sum + num
    }
    return sum
}

function avgOfElement(arr){
    let avg = sumOfElement(arr)/arr.length
    return avg
}

console.log(sumOfElement(arr));
console.log(avgOfElement(arr));

*/

// Q. 22 Find the Minimum Number in an Array

/*

const arr = [10, 20, 5, 30, 40];

function findMin(arr){
    let minNum=arr[0]
    for(const num of arr){
        if(num < minNum){
            minNum =num
        }
    }
    return minNum
}
console.log(findMin(arr));

*/

// Q. 23 Leap Year Checker

/*

function isLeapYear(year){
    if(year % 4 == 0 && year % 100 !=0){
        return 'Leap Year'
    }else if(year% 400 == 0){
        return 'Leap Year'
    }else{
        return 'Not Leap Year'
    }
}

console.log(isLeapYear(2025));

// OR 
// function isLeapYear(year){
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }
*/

// Q. 24 Armstrong Number

/*

function isArmstong(num){
    let strnum= num.toString()
    let arrstrnum = strnum.split('')
    let sumofcube = 0
    for(const num of arrstrnum){
        sumofcube = sumofcube + (num ** 3)
    }
    return (num === sumofcube);
    
}
console.log(isArmstong(153))

*/

// Q. 25 Perfect Number

/*
function isPerfectNumber(num){
    let numbers = []
    let sum = 0
    for (let i = 1; i < num; i++) {
        if(num % i == 0){
            numbers.push(i)
        }
    }
    for(const num of numbers){
        sum += num
    }
    return sum === num
}
console.log(isPerfectNumber(28))

*/

// Q. 26 Flatten a Nested Array

/*

const arr = [1, [2, 3], [4, 5], 6];

function flattenArray(arr){
    let newArr =[]
    for(const num of arr){
        if(Array.isArray(num)){
            for(const n of num){
                newArr.push(n)
            }
        }else{
            newArr.push(num)
        }       
    }
    return newArr
}
console.log(flattenArray(arr));

*/

// Q. 27 Group Elements by Frequency

/*
const arr = [1, 2, 2, 3, 3, 3];

function groupElements(arr){
    let groups ={}
    for(const num of arr){
        if(!groups[num]){
            groups[num] = [num]
        }else{
            groups[num].push(num)
        }
    }
    return groups
}

console.log(groupElements(arr));

*/


// Q. 28 Deep Object Comparison

/*
const obj1 = {
    name: "Omkar",
    age: 20
};

const obj2 = {
    name: "Omkar",
    age: 20
};

function compareObjects(obj1,obj2){
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    if(keys1.length !== keys2.length){
        return false
    }
    return keys1.every(key=> obj1[key] === obj2[key])
    
}

console.log(compareObjects(obj1,obj2))

*/

// Q. 29 Implement Your Own map() Function

/*
const arr = [1, 2, 3];

function myMap(arr, opretion){
  let newarr = [];

  for (const num of arr) {
    newarr.push(opretion(num));
  }

  return newarr;
}

const squereElement = function(num){
  return num * 2;
}

console.log(myMap(arr, squereElement));

*/

// Q.30 Final Fundamental Problem

/*
const arr = [1, 2, 3, 4, 5];

function myFilter(arr, opration){
  let newarr = [];

  for (const num of arr) {
    if (opration(num)) {
      newarr.push(num);
    }
  }

  return newarr;
}

const filter = (num) => {
  return (num % 2 == 0);
}

console.log(myFilter(arr, filter));

*/

