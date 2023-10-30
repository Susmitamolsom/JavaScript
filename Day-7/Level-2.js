// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a,b,c,x,y){
    let value=a*x+b*y+c
    return value
}
console.log(solveLinEquation(2,-3,1,4,3))

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveLQuadEquation(a,b,c,x){
    let value=(a*x)**2+b*x+c
    return value
}
console.log(solveLQuadEquation(1,-3,2,2))

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array){
    let emptyarray=[]
    for (let i=0;i<array.length;i++){
        emptyarray.push(array[i])
    }
    return emptyarray
}
console.log(printArray([3,6,1,9,5]))

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(){
    const now=new Date()
    let year=now.getFullYear()
    let month=now.getMonth()+1
    let date=now.getDate()
    let hours=now.getHours()
    let minute=now.getMinutes()
    month<10
    ?month='0'+month
    :month
    date<10
    ?date='0'+date
    :date
    hours<10
    ?hours='0'+hours
    :hours
    minute<10
    ?minute='0'+minute
    :minute
    return `${date}/${month}/${year} ${hours}:${minute}`
}
console.log(showDateTime())
// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x,y){
    let swap=x
    x=y
    y=swap
    return `Swap value of x is :${x} and Swap value of y is: ${y}`
}
console.log(swapValues(5,6))

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array){
    let arr=[]
    for (i=array.length-1;i>=0;i--){
        arr.push(array[i])
    }
    return arr
}
console.log(reverseArray([8,3,5,1,4,3]))

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arrayfruits){
    let emptyfruits=[]
    for (let i=0;i<arrayfruits.length;i++){
        emptyfruits.push(arrayfruits[i].toUpperCase())
    }
    return emptyfruits
}
console.log(capitalizeArray(['Banana','Strawberry','Mango','Lemon']))

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item,item1){
    let emptyitem=[]
    emptyitem.push(item.concat(item1))
    return emptyitem
}
console.log(addItem(['Melon','Grapes'],[1,2]))

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(item){
    item.splice(3,1)
    return item
}
console.log(removeItem(['Melon','Grapes','Berry','Orange']))

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(adds){
    sum=0
    for (let i=1;i<=adds;i++){
        sum+=i
    }
    return sum
}
console.log(sumOfNumbers(10))

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(oddnum){
    sum=0
    for (let i=1;i<=oddnum;i++){
        if (i%2!==0){
            sum+=i
        }
    }
    return `Sum of odd numbers: ${sum}`
}
console.log(sumOfOdds(20))

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(evennum){
    sum=0
    for (let i=1;i<=evennum;i++){
        if (i%2===0){
            sum+=i
        }
    }
    return `Sum of even numbers: ${sum}`
}
console.log(sumOfEven(20))

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(number){
    counteven=0
    countodd=0
    for (i=0;i<=number;i++){
        if (i%2===0){
            counteven+=1
        }
        else{
            countodd+=1
        }
    }
    return `Count of Even number from 0 to 100 is:${counteven} and Count of Odd number from 0 to 100 is:${countodd}`
}
console.log(evensAndOdds(100))

// 14. Write a function which takes any number of arguments and return the sum of the arguments
function adding(addarray){
    let emptysum=0
    for (let i=0;i<addarray.length;i++){
        emptysum+=addarray[i]
    }
    return emptysum
}
console.log(adding([6,2,4,1,3]))

// 15. Writ a function which generates a randomUserIp.
function randomUserIp(){
    let ip1=Math.floor(Math.random()*256)
    let ip2=Math.floor(Math.random()*256)
    let ip3=Math.floor(Math.random()*256)
    let ip4=Math.floor(Math.random()*256)
    return `${ip1}.${ip2}.${ip3}.${ip4}`
}
console.log(randomUserIp())

// 16. Write a function which generates a randomMacAddress
function randomMacAddress(MacAddress){
    let address1=Math.floor(Math.random()*MacAddress.length)
    let address2=Math.floor(Math.random()*MacAddress.length)
    let address3=Math.floor(Math.random()*MacAddress.length)
    let address4=Math.floor(Math.random()*MacAddress.length)
    let address5=Math.floor(Math.random()*MacAddress.length)
    let address6=Math.floor(Math.random()*MacAddress.length)
    return `${MacAddress[address1]}:${MacAddress[address2]}:${MacAddress[address3]}:${MacAddress[address4]}:${MacAddress[address5]}:${MacAddress[address6]}`
}
console.log(randomMacAddress("0123456789ABCDEF"))

let prompt=require('prompt-sync')()

function userIdGeneratedByUser() {
    const numberOfCharacters = prompt("Enter the number of characters for each ID:");
    const numberOfIds = prompt("Enter the number of IDs to generate:");
  
    if (numberOfCharacters === null || numberOfIds === null) {
      return; // User canceled the input
    }
  
    for (let i = 0; i < numberOfIds; i++) {
      let userId = "";
      for (let j = 0; j < numberOfCharacters; j++) {
        userId += generateRandomCharacter();
      }
      console.log(userId);
    }
  }
  
  function generateRandomCharacter() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  }
  
  // Example usage:
  userIdGeneratedByUser();
  