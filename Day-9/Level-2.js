// 1.Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
let allProduct=products.map(function(totalPrice){
    let sum=0
    sum=totalPrice.price+sum
    return sum
})
console.log(allProduct)

// 2.Find the sum of price of products using only reduce reduce(callback))
let sumProduct=products.reduce(function(sumOfPrices,currentPrice){
    if (typeof currentPrice.price==='number'){
      return sumOfPrices+currentPrice.price
    }
    return sumOfPrices
}, 0)
console.log(sumProduct)

// 3.Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

let countries=require('./countries.js')
function categorizeCountries(pattern){
    return countries.filter(function(country){
      return country.toLowerCase().includes(pattern)
   })
}
let endWithland=categorizeCountries('land')
let endWithia=categorizeCountries('ia')
let endWithisland=categorizeCountries('island')
let endWithstan=categorizeCountries('stan')
console.log(`Countries end with Land=${endWithland}`)
console.log(`Countries end with ia=${endWithia}`)
console.log(`Countries end with island=${endWithisland}`)
console.log(`Countries end with stan=${endWithstan}`)
// console.log(categorizeCountries(['land','ia','island','stan']))

// 4.Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function countFirstletter(countryName){
  let letterCount={}
  countryName.forEach(function(country) {
    let firstLetter=country[0]
    letterCount[firstLetter]=(letterCount[firstLetter] || 0) + 1 })

  let result=[]
  Object.keys(letterCount).forEach(function(letter){
    result.push({letter,count:letterCount[letter]})
  })
  return result
}
// let result=[]
// Object.keys(letterCount).forEach(function(letter){
//   result.push({letter,count:letterCount})
//   return result
// })
let countOfletter=countFirstletter(countries)
console.log(countOfletter)

// 5.Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(){
  let country=countries.slice(0,10)
  return country
}
let firstTencountry=getFirstTenCountries()
console.log(firstTencountry)

// 6.Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

function getLastTenCountries(){
  let country=countries.slice(-10)
  return country
}
let lastTencountry=getLastTenCountries()
console.log(lastTencountry)