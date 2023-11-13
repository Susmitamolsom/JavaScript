// 1. Copy countries array(Avoid mutation)
const countries = [
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
    ]
    const countriescopy=[...countries]
    console.log(countriescopy)

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
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
// ]
// const countriescopy=[...countries]
// const sortedCountries=countriescopy.sort()
// console.log(sortedCountries)
// console.log(countries)

// 3. Sort the webTechs array and mernStack array
// const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB']
// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// const sortedwebTechs=webTechs.sort()
// const sortedmernStack=mernStack.sort()
// console.log(sortedwebTechs)
// console.log(sortedmernStack)

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
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
//     'Kenya',
//     'Iran'
// ]
// let array=[]
// for (let i=0;i<countries.length;i++){
//     if (countries[i].includes('land')){
//         array.push(countries[i])
//     }
// }
// console.log(array)

// 5. Find the country containing the hightest number of characters in the countries array
// let str=''
// for (const country of countries){
//     if (country.length>str.length){
//         str=country
//     }
// }
// console.log(str)

// 7. Extract all the countries containing only four characters from the countries array and print it as array
// let str=''
// for (const country of countries){
//     if (country.length===4){
//         str=country
//     }
// }
// console.log(str)

// 8. Extract all the countries containing two or more words from the countries array and print it as array
// const countries = ['Iceland', 'Finland', 'New Zealand', 'Netherlands', 'South Africa', 'United Kingdom', 'United States'];

// const countriesWithTwoOrMoreWords = [];

// for (const country of countries) {
//   if (country.split(' ').length >= 2) {
//     countriesWithTwoOrMoreWords.push(country);
//   }
// }

// console.log(countriesWithTwoOrMoreWords);
