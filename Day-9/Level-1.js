// 3.Use forEach to console.log each country in the countries array.
const countries = ['Finland', 'Iran','Sweden', 'Denmark', 'Norway', 'IceLand','germany','Australia','England']
countries.forEach(function(country){
    console.log(country)
})

// 4.Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach(function(name){
    console.log(name)
})

// 5.Use forEach to console.log each number in the numbers array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(function(number){
    console.log(number)
})

// 6.Use map to create a new array by changing each country to uppercase in the countries array.
let countriesUppercase=countries.map(function(country){
    return (country.toUpperCase())
})
console.log(countriesUppercase)

// 7.Use map to create an array of countries length from countries array.
let countriesLength=countries.map(function(country){
    return country.length
})
console.log(countriesLength)

// 8.Use map to create a new array by changing each number to square in the numbers array
let numbersquare=numbers.map(function(number){
    return number*2
})
console.log(numbersquare)

// 9.Use map to change to each name to uppercase in the names array.
let uppercaseName=names.map(function(name){
    return name.toUpperCase()
})
console.log(uppercaseName)

// 10.Use map to map the products array to its corresponding prices.
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
let productPrice=products.map(function(prices){
    return prices.price
})
console.log(productPrice)

// 11.Use filter to filter out countries containing land.
let countryland=countries.filter(function(country){
    return country.toLowerCase().includes('land')
})
console.log(countryland)

// 12.Use filter to filter out countries having six character.
let sixch=countries.filter(function(country){
    if (country.length===6){
        return country
    }
})
console.log(sixch)

// 13.Use filter to filter out countries containing six letters and more in the country array.
let charmoreThnsix=countries.filter(function(country){
    if (country.length>=6){
        return country
    }
})
console.log(charmoreThnsix)

// 14.Use filter to filter out country start with 'E';
let start=countries.filter(function(country){
    return country.startsWith('E')
})
console.log(start)

// 15.Use filter to filter out only prices with values.
let checktype=products.filter(function(allPrices){
    return typeof allPrices.price==='number'
})
console.log(checktype)

// 16.Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr){
    return arr.filter(function(items){
        return typeof items==='string'
    })
}
let mixedArr=[1, 'apple', 'banana', 3, 'orange', 'grape']
let allString=getStringLists(mixedArr)
console.log(allString)

// 17.Use reduce to sum all the numbers in the numbers array.
let sum=numbers.reduce(function(sumValue,currentVal){
    return sumValue+currentVal
},0)
console.log(sum)

// 18.Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const country=['Estonia','Finland','Sweden','Denmark','Norway','Iceland']
let countrysentence=country.reduce(function(countryStr,currentCountry,index,array){
    if (index===array.length-1){
        return countryStr + 'and ' + currentCountry +' are north European countries'
    }
    else{
        return countryStr + currentCountry + ','
    }
},' ')
console.log(countrysentence)

// 19.Explain the difference between some and every
// Some:The element in the array should have atleast one true 
// Every:All the element in the array should be positive or even then only it will return true otherwise false

// 20.Use some to check if some names' length greater than seven in names array
let nameLen=names.some(function(nameItem){
    if (nameItem.length>7){
        return nameItem
    }
})
console.log(nameLen)

// 21.Use every to check if all the countries contain the word land
let checkLand=countries.every(function(countryCheck){
    return countryCheck.toLowerCase().includes('land')
})
console.log(checkLand)

// 22.Explain the difference between find and findIndex.

// 23.Use find to find the first country containing only six letters in the countries array
let countrywithSixchar=countries.find(function(country){
    if (country.length===6){
        return country
    }
})
console.log(countrywithSixchar)

// 24.Use findIndex to find the position of the first country containing only six letters in the countries array
let indexCountry=countries.findIndex(function(indexes){
    if (indexes.length===6){
        return indexes
    }
})
console.log(indexCountry)

// 25.Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
let findCountry=countries.findIndex(function(country){
    if (country==='Norway'){
        return country
    }
})
console.log(findCountry)

// 26.Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let findcountry=countries.findIndex(function(country){
    if (country==='Russia'){
        return country
    }
})
console.log(findcountry)