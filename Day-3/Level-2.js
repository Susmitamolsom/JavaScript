// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let prompt=require('prompt-sync')()
// let num1=parseInt(prompt('What is the base?'))
// let num2=parseInt(prompt('what is the height?'))
// let area=(0.5*num1*num2) 
// console.log(area) 

//1. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let prompt=require('prompt-sync')()
// let a=parseInt(prompt('Side A'))
// let b=parseInt(prompt('Side B'))
// let c=parseInt(prompt('Side C'))
// let p=a+b+c
// console.log(p)

// 1. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length=parseFloat(prompt('Enter your length'))
// let width=parseFloat(prompt('Enter width'))
// let perimeter=2*(length+width)
// console.log(perimeter)

//2. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let r=parseFloat(prompt("Radius"))
// const pi=3.14
// let area=pi*r*r
// console.log(area)

// 3. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// y=mx+b (formula)
// let y=2*0-2
// let x=(0+2)/2
// let m=2
// console.log(`y-intercept ${y}`)
// console.log(`x-intercept ${x}`)
// console.log(`m-intercept ${m}`)

// 4. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let x1=2;
// let y1=2;
// let x2=6;
// let y2=10;
// let m=(y2-y1)/(x2-x1)
// console.log(m)

// 5. Compare the slope of above two questions.
// console.log(m==m)

// 6. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// let x=parseInt(prompt('x value:'))
// let y=x**2+6*x+9
// console.log(y)

// 7. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let hours=parseInt(prompt('Hours'))
// let ratehour=parseInt(prompt('rate per hour'))
// console.log(`Weekly earning ${hours*ratehour}`)

//8. If the length of your name is greater than 7 say, your name is long else say your name is short.
// let name='Susmita'
// let namelength=name.length
// namelength>7
// ?console.log('Your name is long')
// :console.log('Your name is short')

// 9. Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let firstlength=firstName.length
// let lastlength=lastName.length
// firstlength>lastlength
// ?console.log(`Asabeneh is longer than Yetayeh`)
// :console.log(`Yetayeh is longer than Asabeneh`)

// 10. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// let age=myAge-yourAge
// age>yourAge
// ?console.log(`I am ${age} older than you`)
// :console.log(`I am ${yourAge} older than you`)

// 11. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// let birthYear = parseInt(prompt("Enter the year you were born:"))
// let currentYear = new Date().getFullYear()
// let age=currentYear-birthYear
// age>=18
// ?console.log(`You are ${age} old.You are are allowed to vote`)
// :console.log(`You are ${age} old.You are not allowed to vote`)

// 12. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let year=parseInt(prompt('enter year:'))
// let second_peryear=365*24*60*60//days of 1 year ,24 hours in a day 60 minutes and 60 seconds
// let max_livesecond=100*second_peryear
// console.log(`Person live year is ${year}`)
// console.log(`Person can live in a second of ${max_livesecond}`)

// Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
let now=new Date()
let year=now.getFullYear()
let month=now.getMonth()
let date=now.getDate()
let hours=now.getHours()
let minute=now.getMinutes()
console.log(`${year}-${month}-${date} ${hours}:${minute}`)
console.log(`${date}-${month}-${year} ${hours}:${minute}`)
console.log(`${date}/${month}/${year} ${hours}:${minute}`)