// 1.create an empty set
let newSet=new Set()
console.log(newSet)

// 2.Create a set containing 0 to 10 using loop
let number= new Set()
for (let i=0;i<=10;i++){
    number.add(i)
}
console.log(number)

// 3.Remove an element from a set
let element=new Set([1,2,3,4,5,6,7,8,9,10])
element.delete(8)
console.log(element)

// 4.Clear a set
element.clear()
console.log(element)

// 5.Create a set of 5 string elements from array
let fruits=['Kiwi','Banana','Mango','Grape','Apple']
let setofFruits=new Set(fruits)
console.log(setofFruits)

// 6.Create a map of countries and number of characters of a country
let countries=['England','Australia','Nepal','India','South Africa','Uganda','Yemen','Nigeria']
let countriesLength=countries.map(function(country){
    return country.length
})
console.log(countriesLength)