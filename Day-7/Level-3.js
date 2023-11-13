// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
let prompt=require('prompt-sync')()
// function userIdGeneratedByUser(){
//     numcharacter=parseInt(prompt('numcharacter:'))
//     userIdGenerator=parseInt(prompt('user id:'))
//     let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     let array=[]  
//     for (let i=0;i<userIdGenerator;i++){
//         let str=''
//         for (let j=0;j<numcharacter;j++){
//             let randomIndex=Math.floor(Math.random()*characters.length)
//             str+=characters[randomIndex]
//         }
//         array.push(str)
//     }
//     return array
// }
// console.log(userIdGeneratedByUser())

// 2. Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator(){
    let red=Math.floor(Math.random()*256)
    let green=Math.floor(Math.random()*256)
    let blue=Math.floor(Math.random()*256)
    return `RGB(${red},${green},${blue})`
}
console.log(rgbColorGenerator())

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(numbers){
    let arrhex=[]
    for (let i=0;i<numbers;i++){
        let hexaindex=Math.floor(Math.random()*8765365).toString(16)
        arrhex.push(hexaindex)
    }
    return arrhex
}
console.log(arrayOfHexaColors(6))

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(){
    let RGB=[]
    for (i=0;i<6;i++){
        let red=Math.floor(Math.random()*256)
        let green=Math.floor(Math.random()*256)
        let blue=Math.floor(Math.random()*256)
        let colors=`RGB(${red},${green},${blue})`    
        RGB.push(colors)
    }
    return RGB
}
console.log(arrayOfRgbColors())

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
// function generateColors(number,type) {
//     let emptycolor=[]
//     for (let i=0;i<number;i++){
//         if (type==='hex'){
//             let hexaindex=Math.floor(Math.random()*8765365).toString(16)
//             emptycolor.push(hexaindex)
//         }
//         else if (type==='rgb'){
//             let red=Math.floor(Math.random()*256)
//             let green=Math.floor(Math.random()*256)
//             let blue=Math.floor(Math.random()*256)
//             let colors=`RGB(${red},${green},${blue})`    
//             emptycolor.push(colors)
//         }
//     }
//     return emptycolor
// }
// let number=parseInt(prompt('total count number:'))
// let type=prompt('the type is :')
// console.log(generateColors(number,type))

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return `The factorial of 5 is ${result}`
}
console.log(factorial(5))

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not.
function isEmpty(empty){
    if (empty===null && empty===undefined){
        return true
    }
    if (empty==='String' && empty===''){
        return true
    }
    if (empty==='Object' && empty===0){
        return false
    }
    else{
        return false
    }
}
console.log(isEmpty([])) 

// 11. Call your function sum, it takes any number of arguments and it returns the sum.
function sum(array) {
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum
}
  
console.log(sum([5, 10, 15, 20])); // 50

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(sumarray){
    let sum=0
    for (let i=0;i<sumarray.length;i++){
        if (sumarray[i]%1!==0){
            return `Non numerical`
        }
    sum+=sumarray[i]
    }
    return sum
}
console.log(sumOfArrayItems([1,2,3,'three',6,9]))

// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(avgnumber){
    let sum=0
    for (let i=0;i<avgnumber.length;i++){
        if (avgnumber[i]%1!==0){
            return `Non numerical`
        }
    sum+=avgnumber[i]
    }
    let avg=sum/avgnumber.length
    return avg
}
console.log(average([8,6,3,6,7,2]))

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(fruits){
    if (fruits.length<5){
        return `item not found`
    }
    fruits[4]='Pineapple'
    return fruits
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))

// 15. Write a function called isPrime, which checks if a number is prime number.
function isPrime(num){
    count=0
    for (let i=1;i<=num;i++){
        if (num%i===0){
            count+=1
            // break
        }
    if (count==2){
        return `${num} is a prime number`
    }
    }
    return `${num} is not a prime number`
}
console.log(isPrime(23))

// 16. Write a functions which checks if all items are unique in the array.
function areAllItemsUnique(arr) {
    let array=[]
    for (let i=0;i<arr;i++){
        if (!array.includes(arr[i])){
            return null
        }
        else{
            array.push(arr[i])
        }
    }
    return array===arr
  }
  
  // Example usage:
//   console.log(areAllItemsUnique([1, 2, 3, 4, 5])); // true (all items are unique)
  console.log(areAllItemsUnique([1, 2, 3, 2, 4, 5])); // false (there are duplicates)
//   console.log(areAllItemsUnique([])); // true (an empty array is considered to have unique items)
  
// 17. Write a function which checks if all the items of the array are the same data type.
function datatype(items){
    let firstitem=typeof items[0]
    for (let i=0;i<items.length;i++){
        if (typeof items[i]!==firstitem){
            return `False`
        }
    }
    return `True`
}
console.log(datatype([1, 2, 3, 4, 5]))
console.log(datatype(["apple", "banana", "cherry"]))
console.log(datatype([1, "two", 3.0, true]))

// 18. JavaScript variable name does not support special characters or symbols except \$ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function sevenRandom(){
    let uniqueNumbers=[]
    for (let i=0;i<7;i++){
        let random=Math.floor(Math.random()*10)
        if (!uniqueNumbers.includes(random)){
            uniqueNumbers.push(random)
        }
    }
    return uniqueNumbers
}
console.log(sevenRandom())

// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverse(countries){
    let arr=[]
    for (let i=countries.length-1;i>0;i--){
        arr.push(countries[i])
    }
    return arr
}
console.log(reverse([
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]))