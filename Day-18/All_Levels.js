// LEVEL-1 EXERCISES
// 1.Read the countries API using fetch and print the name of country, capital, languages, population and area.

const countries = require("../Day-9/countries");

// const countriesAPI = 'https://restcountries.com/v2/all'
// fetch(countriesAPI)
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data)
//         data.forEach(country => {
//             let capital,languages,population,area
//             if (country.capital){
//                 capital=country.capital
//             }
//             else{
//                 capital='N/A'
//             }
//             if (country.languages){
//                 languages=country.languages
//             }
//             else{
//                 capital='N/A'
//             }
//             if (country.population){
//                 population=country.population
//             }
//             else{
//                 capital='N/A'
//             }
//             if (country.area){
//                 area=country.area
//             }
//             else{
//                 capital='N/A'
//             }
//             console.log({Name:country.name})
//             console.log({languages:languages})
//             console.log({population:population})
//             console.log({area:area})
//         });
//     })
//     .catch(error=> console.error(error))


// LEVEL-2 EXERCISES
// 1.Print out all the cat names in to catNames variable.
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// fetch(catsAPI)
//     .then(response=>response.json())
//     .then(catsData=>{
//         catsData.forEach(cat => {
//             let name
//             if (cat.name){
//                 name=cat.name
//             }
//             else{
//                 name='N/A'
//             }
//             console.log({name:name})
//         });
//     })
//     .catch(error=> console.error(error))

// LEVEL-3 EXERCISE
// Read the cats api and find the average weight of cat in metric unit.
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// fetch(catsAPI)
//     .then(response=>response.json())
//     .then(catsData=>{
//         let count=0
//         let totalWeight=0
//         catsData.forEach(cat => {
//             if (cat.weight && cat.weight.metric){
//                 let weightValues=cat.weight.metric.split('-').map(Number)
//                 // console.log(weightValues)
//                 let avgWeight=(weightValues[0]+weightValues[1])/2
//                 totalWeight+=avgWeight
//                 count++
//             }
//         });
//         const averageWeightofcats=totalWeight/count
//         console.log(`Total average of cat in metric unit is ${averageWeightofcats}`)
//     })
//     .catch(error=> console.error(error))

// 2.Read the countries api and find out the 10 largest countries
const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
    .then(response=>response.json())
    .then(countries=>{
        // console.log(data)
        let sortedCountries=countries.sort((a,b)=>b.area-a.area).slice(0,10)
        console.log(sortedCountries)
    })
    .catch(error=> console.error(error))

// 3.Read the countries api and count total number of languages in the world used as officials.