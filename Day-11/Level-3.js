// 1.Destructure the countries object print name, capital, population and languages of all countries
let countries=require('./country_data.js')
// console.log(countries)
// let detailsofCountries=[]
for (let country of countries){
    let {name,capital,population,languages}=country
    console.log({name:name,capital:capital,population:population,languages:languages})
}

// 2.A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// let [name,skills,[,,jsScore,reactScore]]=student
// console.log({name:name,skills:skills,jsScore:jsScore,reactScore:reactScore})

// 3.Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
function convertArrayToObject(students){
    let studentInfo=[]
    for (let student of students){
        let [name,skills,scores]=student
        studentInfo.push({name:name,skills:skills,scores:scores})
    }
    return studentInfo
}
console.log(convertArrayToObject(students))

// 1.Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// 2.Add Bootstrap with level 8 to the front end skill sets

// 3.Add Express with level 9 to the back end skill sets
// 4.Add SQL with level 8 to the data base skill sets
// 5.Add SQL without level to the data science skill sets
const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
let newStudent={...student}
// console.log(skills)
newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
newStudent.skills.backEnd.push({skill: 'Express', level: 9})
newStudent.skills.dataBase.push({skill: 'SQL', level: 8})
newStudent.skills.dataScience.push('SQL')
console.log(JSON.stringify(newStudent))
// console.log(JSON.stringify(obj))

let prompt=require('prompt-sync')()
// const throwErrorExampleFun = () => {
//     let message
//     let x = prompt('Enter a number: ')
//     try {
//       if (x == '') throw 'empty'
//       if (isNaN(x)) throw 'not a number'
//       x = Number(x)
//       if (x < 5) throw 'too low'
//       if (x > 10) throw 'too high'
//     } catch (err) {
//       console.log(err)
//     }
//   }
//   throwErrorExampleFun()
  