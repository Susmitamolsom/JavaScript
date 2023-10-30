// 1. Declare a function fullName and it print out your full name.
// function fullName(){  
//     let firstname='Susmita'
//     let lastname='Molsom'
//     let space=' '
//     let fullName=firstname+space+lastname
//     console.log(fullName)  
// }
// fullName()
// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// function fullName(firstName,space,lastName){
//     let fullName=firstName+space+lastName
//     return fullName
// }
// console.log(fullName('Susmita',' ','Molsom'))

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
// function addNumbers(num1,num2){
//     sum=num1+num2
//     return sum
// }
// console.log(addNumbers(7,8))

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// function area(length,width){
//     let area=length*width
//     return area
// }
// console.log(area(5,6))

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// function perimeter(length,width){
//     let perimeter=2*(length*width)
//     return perimeter
// }
// console.log(perimeter(5,6))

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
// function volume(length,width,height){
//     let vol=length*width*height
//     return vol
// }
// console.log(volume(7,4,8))

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(pi,r){
    let area=pi*r*r
    return area
}
console.log(areaOfCircle(3.14,7))

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(pi,r){
    let circumference=2*pi*r
    return circumference
}
console.log(circumOfCircle(3.14,7))

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass,volume){
    let density=mass/volume
    return density
}
console.log(density(500,250))

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance,time){
    let speed=distance/time
    return speed
}
console.log(speed(100,2))

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass,gravity){
    let weight=mass*gravity
    return weight
}
console.log(weight(66,22))

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celcius){
    let fahrenheit=(celcius*9/5)+32
    return fahrenheit
}
console.log(convertCelsiusToFahrenheit(4))

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function calculatebmi(weight,height){
    heightinmeter=height/100
    bmi=weight/(heightinmeter*heightinmeter)
    if (bmi<18.5){
        return 'Underweight'
    }
    else if (bmi>=18.5 && bmi<=24.9){
        return 'Normal Weight'
    }
    else if (bmi>=25 && bmi<=29.9){
        return 'Overweight'
    }
    else{
        return 'Obese'
    }
}
console.log(calculatebmi(200,300))

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month){
    if (month>=3 && month<=5){
        return 'Spring'
    }
    else if (month>=6 && month<=8){
        return 'Summer'
    }
    else if (month>=9 && month<=11){
        return 'Autumn'
    }
    else{
        return 'Winter'
    }
}
console.log(checkSeason(6))

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(Num1,Num2,Num3){
    return Math.max(Num1,Num2,Num3)
}
console.log(findMax(0,10,5))