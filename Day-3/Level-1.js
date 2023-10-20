// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// Declare variables and assign values
// var firstName = "Susmita";
// var lastName = "Molsom";
// var country = "India";
// var city = "Pune";
// var age = 21;
// var isMarried = false;
// var year = 2002;
// Use typeof to check data types(here + work as storing inside the bracket)
// console.log("firstName is a " + typeof firstName); // string
// console.log("lastName is a " + typeof lastName); // string
// console.log("country is a " + typeof country); // string
// console.log("city is a " + typeof city); // string
// console.log("age is a " + typeof age); // number
// console.log("isMarried is a " + typeof isMarried); // boolean
// console.log("year is a " + typeof year); // number

// 2. Check if type of '10' is equal to 10
// let a='10'
// let b=10
// console.log(a===b)

// 3. Check if parseInt('9.8') is equal to 10
// let a='9.8'
// let b=10
// let c=parseFloat(a)
// console.log(parseInt(c)==b)

// 4. Boolean value is either true or false.
// let txt='True'
// let txt2='False'
// console.log(txt==txt2)

// 5. Write three JavaScript statement which provide truthy value.
// let a=9
// if (a){
//     console.log('truthy')
// }
// else{
//     console.log('falsy')
// }

// 6. Write three JavaScript statement which provide falsy value.
// let b=null
// if (b){
//     console.log('truthy')
// }
// else{
//     console.log('falsy')
// }

// console.log(4 > 3)//8
// console.log(4 >= 3)//9
// console.log(4 < 3)//10
// console.log(4 <= 3)//11
// console.log(4 == 4)//12
// console.log(4 === 4)//13
// console.log(4 != 4)//14
// console.log(4 !== 4)//15
// console.log(4 != '4')//16
// console.log(4 == '4')//17
// console.log(4 === '4')//18

// 19. Find the length of python and jargon and make a falsy comparison statement.
// let a='python';
// let b='jargon';
// let c=a.length
// let d=b.length
// let falsy=c>d
// console.log('the length of python and jargon is falsy',falsy)

// console.log(4 > 3 && 10 < 12)//21
// console.log(4 > 3 && 10 > 12)//22
// console.log(4 > 3 || 10 < 12)//23
// console.log(4 > 3 || 10 > 12)//24
// console.log(!(4 > 3))//25
// console.log(!(4 < 3))//26
// console.log(!(false))//27
// console.log(!(4 > 3 && 10 < 12))//28
// console.log(!(4 > 3 && 10 > 12))//29
// console.log(!(4 === '4'))//30

// let word1 = "dragon";
// let word2 = "python";

// 31. There is no 'on' in both dragon and python
// if (!word1.includes("on")) {
//   console.log("The word 'dragon' does not contain 'on'.");
// }

// if (!word2.includes("on")) {
//   console.log("The word 'python' does not contain 'on'.");
// }
// else{
//     console.log("The word dragon and python contain 'on'.")
// }
 
// 32. Use the Date object to do the following activities

// 33. What is the year today?
const now = new Date()
console.log(now.getFullYear())
// 34. What is the month today as a number?
console.log(now.getMonth()+1)
// 35. What is the date today?
console.log(now.getDate())
// 36. What is the day today as a number?
console.log(now.getDay())
// 37. What is the hours now?
console.log(now.getHours())
// 38. What is the minutes now?
console.log(now.getMinutes())
// 39. Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime(1970))

// const secondsSinceEpoch = Math.floor(now.getTime() / 1000);
// console.log(secondsSinceEpoch);
