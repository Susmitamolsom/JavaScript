// 1.Find a union b
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);
const unionAB = new Set([...setA, ...setB]);
console.log('Union of setA and setB:', unionAB);

// 2.Find a intersection b
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let A=new Set(a)
let B=new Set(b)
let c=a.filter((x)=>B.has(x))
let C=new Set(c)
console.log(C)

// 3.Find a with b

// LEVEL-3(EXERCISE)
let countries=require('./countries_data.js')
// 1.How many languages are there in the countries object file.
let count={}
for (let country of countries){
    for (let language of country.languages){
        // let newLanguage=new Set(language)
        if (count[language]){
            count[language]++
        }
        else{
            count[language]=1
        }
    
    }
}
console.log(count)
