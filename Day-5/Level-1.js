// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
// console.log(countries)
// console.log(webTechs)  

// 1. Declare an empty array;
// let arr=[]

// 2. Declare an array with more than 5 number of elements
// let arr=[3,4,5,1,0]

// 3. Find the length of your array
// console.log(arr.length)

// 4. Get the first item, the middle item and the last item of the array
// let first_item=arr[0]
// let mid_item=arr[2]
// let last_item=arr[-0]
// console.log(first_item)
// console.log(mid_item)
// console.log(last_item)

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// let arr=[8,'Bird',9,'Anna','Black',2,0,7]
// console.log(arr.length)

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// let itCompanies=['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']

// 7. Print the array using console.log()
// console.log(itCompanies)

// 8. Print the number of companies in the array
// console.log(itCompanies.length)

// 9. Print the first company, middle and last company
// let first=itCompanies[0]
// let middle=itCompanies[3]
// let last=itCompanies[itCompanies.length-1]
// console.log(first)
// console.log(middle)
// console.log(last)

// 10. Print out each company
// console.log(itCompanies[0])
// console.log(itCompanies[1])
// console.log(itCompanies[2])
// console.log(itCompanies[3])
// console.log(itCompanies[4])
// console.log(itCompanies[5])
// console.log(itCompanies[6])

// 11. Change each company name to uppercase one by one and print them out
// console.log(itCompanies[0].toUpperCase())
// console.log(itCompanies[1].toUpperCase())
// console.log(itCompanies[2].toUpperCase())
// console.log(itCompanies[3].toUpperCase())
// console.log(itCompanies[4].toUpperCase())
// console.log(itCompanies[5].toUpperCase())
// console.log(itCompanies[6].toUpperCase())

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(itCompanies.join(', ')+ 'are big IT companies')

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// console.log(itCompanies.includes('Software'))

// 14. Filter out companies which have more than one 'o' without the filter method
// console.log(itCompanies.match(/o/gi))

// 15. Sort the array using sort() method
// console.log(itCompanies.sort())

// 16. Reverse the array using reverse() method
// console.log(itCompanies.reverse())

// 17. Slice out the first 3 companies from the array
// console.log(itCompanies.slice([0],[3]))

// 18. Slice out the last 3 companies from the array
// console.log(itCompanies.slice(-3))

// 19. Slice out the middle IT company or companies from the array
// console.log(itCompanies.slice(3,4))

// 20. Remove the first IT company from the array
// itCompanies.shift()
// console.log(itCompanies.shift())

// 21. Remove the middle IT company or companies from the array
let itCompanies=['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
itCompanies.splice(3,1)
console.log(itCompanies)

// 22. Remove the last IT company from the array
// itCompanies.pop()
// console.log(itCompanies)

// 23. Remove all IT companies
// console.log(itCompanies.splice())