let countries=require('./country_data.js')
//2. Find the 10 most spoken languages:
let languageCount={}
function getFirstTenCountries(countries,count10){
    for (let country of countries){
        for (let language of country.languages){
            if (languageCount[language]){
                languageCount[language]++
            }
            else{
                languageCount[language]=1
            }
        }
    }
    let sortedLanguage=Object.keys(languageCount).sort(function(a,b){
        return languageCount[b]-languageCount[a]
    })
    let countriesTen=sortedLanguage.slice(0,count10)
    return countriesTen.map(function(language){
        return {language:language,count:languageCount[language]}
    })
}
console.log(getFirstTenCountries(countries,10))

// 2.Use countries_data.js file create a function which create the ten most populated countries
function getPopulatedcountries(countries,countriestime){
    countries.sort(function(a,b){
        return b.population-a.population
    })
    let sortedPopulation=countries.slice(0,countriestime)
    let topTencountries=sortedPopulation.map(function(country){
        return {country:country.name,population:country.population}
    })
    return topTencountries

}
console.log(getPopulatedcountries(countries,10))

// 3.*** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

function counts(ages){
    let counted=ages.length
    return `Counts : ${counted}`
}

function sum(ages){
    let sum=0
    for (let i=0;i<ages.length;i++){
        sum+=ages[i]
    }
    return `Sum : ${sum}`
}

function minimum(ages){
    let sorting=ages.sort()
    return `min : ${sorting[0]}`
}

function maximum(ages){
    let sorting=ages.sort()
    return `Max : ${sorting[ages.length-1]}`
}

function range(ages){
    let sorted=ages.sort()
    let min=sorted[0]
    let max=sorted[ages.length-1]
    return `Range : ${max-min}`
}
console.log(counts(ages))
console.log(sum(ages))
console.log(minimum(ages))
console.log(maximum(ages))
console.log(range(ages))
