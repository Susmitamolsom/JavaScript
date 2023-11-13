//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
// let i=0
// while(i<=10){
//     console.log(i)
//     i++
// }

// let i=0
// do {
//     console.log(i)
//     i++
// } while (i<=10)

//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
// let i=10
// while(i>=0){
//     console.log(i)
//     i--
// }

// let i=10
// do{
//     console.log(i)
//     i--
// }while(i>=0)

//3. Iterate 0 to n using for loop
// let prompt=require('prompt-sync')()
// let n=parseInt(prompt('Enter the number'))
// for (let i=0;i<=n;i++){
//     console.log(i)
// }

//4. Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

// for (let i=1;i<=7;i++){
//     let str=' '
//     for (let j=1;j<=i;j++){
//         str=str+'#'
//     }
//     console.log(str)
// }

//5. Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
// for (let i=0;i<=10;i++){
//     console.log(`${i}*${i}=${i*i}`)
// }

//6. Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
// for (let i=0;i<=10;i++){
//     console.log(i, i**2, i**3)
// }

// 1. Use for loop to iterate from 0 to 100 and print only even numbers.
// for (let i=0;i<=100;i++){
//     if (i%2===0){
//         console.log(i)
//     }
// }

// 2. Use for loop to iterate from 0 to 100 and print only odd numbers.
// for (let i=0;i<=100;i++){
//     if (i%2!==0){
//         console.log(i)
//     }
// }

// 3. Use for loop to iterate from 0 to 100 and print only prime numbers.
// for (let i=0;i<=100;i++){
//     let count=0
//     for (let j=0;j<=i;j++){
//         if (i%j==0){
//             count++
//         }
//     }
//     if (count<=2){
//         console.log(i)
//     }
// }

// 4. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum=0
// for (let i=0;i<=100;i++){
//     sum+=i
// }
// console.log(sum)

//5. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let sumeven=0
// let sumodd=0
// for (let i=0;i<=100;i++){
//     if (i%2==0){
//         sumeven+=i
//     }
//     else{
//         sumodd+=i
//     }
// }
// console.log(`The sum of all even numbers from 0 to 100 is ${sumeven} and the sum of all odd numbers from 0 to 100 is ${sumodd}`)

//6. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// let sumeven=0
// let sumodd=0
// let arr=[]
// for (let i=0;i<=100;i++){
//     if (i%2==0){
//         sumeven+=i
//     }
//     else{
//         sumodd+=i
//     }
// }
// arr.push(sumeven,sumodd)
// console.log(arr)

// 7. Develop a small script which generate array of 5 random numbers
// let arr=[]
// for (let i=1;i<=5;i++){
//     let random=Math.floor(Math.random()*100)
//     arr.push(random)
// }
// console.log(arr)
  

// 8. Develop a small script which generate array of 5 random numbers and the numbers must be unique(ooooo)
// let arr=new Set()
// for (let i=1;i<=5;i++){
//     let random=Math.floor(Math.random()*100)
//     arr.add(random)
// }
// console.log(arr)

// 9. Develop a small script which generate a six characters random id:
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let str=''
for (let i=0;i<6;i++){
    let random_id=Math.floor(Math.random()*characters.length)
    str+=characters[random_id]
}
console.log(str)