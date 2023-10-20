// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let prompt=require('prompt-sync')()
// let age=parseInt(prompt('Enter your age:'))
// let yourage=18-age
// if (age>=18){
//     console.log(`You are ${age} .You are allowed to drive`)
// }
// else{
//     console.log(`You are left with ${yourage} years`)
// }

// 1. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// let myAge=parseInt(prompt('Enter my age:'))
// let yourAge=parseInt(prompt('Enter your age'))
// let older=myAge-yourAge
// if(myAge>yourAge){
//     console.log(`You are ${older} years older than you`)
// }
// else{
//     console.log(`I am  ${yourAge} years`)
// }

// 1. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.

// let a=4
// let b=3
// if (a>b){
//     console.log(`${a} is greater than ${b}`)
// }
// else{
//     console.log(`${b} is greater than ${a}`)
// }
// a>b
// ?console.log(`${a} is greater than ${b}`)
// :console.log(`${b} is greater than ${a}`)


// 2. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// let num=parseInt(prompt('Enter number'))
// if (num%2==0){
//     console.log(`${num} is an even number`)
// }
// else{
//     console.log(`${num} is an odd number`)
// }


// Level-2
// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// let marks=parseInt(prompt('enter marks'))
// if (marks>=80 && marks<=100){
//     console.log(`Grade A`)
// }
// else if(marks>=70 && marks<=79){
//     console.log(`Grade B`)
// }
// else if(marks>=60 && marks<=69){
//     console.log(`Grade c`)
// }
// else if(marks>=50 && marks<=59){
//     console.log(`Grade D`)
// }
// else if (marks>=0 && marks<=49){
//     console.log('Grade F')
// }

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// let month=prompt('enter the month')
// if (month=="September" || month=="september" || month=="October" || month=="october" || month=="November" || month=="november"){
//     console.log(`${month} is an Autumn seasion`)
// }
// else if(month=="December" || month=="december" || month=="January" || month=="january" || month=="February" || month=="february"){
//     console.log(`${month} is a winter seasion`)
// }
// else if(month=="March" || month=="April" || month=="May" || month=="march" || month=="april" || month=="may"){
//     console.log(`${month} is Spring seasion`)
// }
// else if(month=="June" || month=="July" || month=="August" || month=="june" || month=="july" || month=="august"){
//     console.log(`${month} is a Summer seasion`)
// }
// else{
//     console.log('None')
// }

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
// let day=prompt('Enter the day')
// let lower=day.toLowerCase()
// if (lower==='monday' || lower==='tuesday' || lower==='wednesday' || lower==='thursday' || lower==='friday'){
//     console.log(`${day} is Working days`)
// }
// else{
//     console.log(`${day} is a weekend day`)
// }

// Level-3
// 1. Write a program which tells the number of days in a month.

// Enter a month: January
// January has 31 days.

// Enter a month: JANUARY
// January has 31 day

// Enter a month: February
// February has 28 days.

// Enter a month: FEbruary
// February has 28 days.
let month=prompt('Enter the month')
let monthlower=month.toLowerCase()
if (monthlower==='april' || monthlower==='june' || monthlower==='september' || monthlower==='november'){
    console.log(`${month} has 30 days`)
}
else if (monthlower==='january' || monthlower==='march' || monthlower==='may' || monthlower==='july' || monthlower=='august' || monthlower=='october' || monthlower=='december'){
    console.log(`${month} has 31 days`)
}
else{
    console.log(`${month} has 28 days`)
}

// 1 .Write a program which tells the number of days in a month, now consider leap year.
// let year=parseInt(prompt('Enter the year:'))
// if (year%4==0 && year%100!=0 || year%400==0){
//     console.log(`${year} is a leap year`)
// }
// else{
//     console.log(`${year} is not a leap year`)
// }