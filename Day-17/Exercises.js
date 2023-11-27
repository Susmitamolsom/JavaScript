const skills = ['HTML', 'CSS', 'JS', 'React']
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

const person={
    firstName:'Susmita',
    lastName:'Rasmi',
    age:21,
    country:'India',
    city:'Udaipur'
}
const personInfo=JSON.stringify(person)
localStorage.setItem('person',personInfo)
localStorage.getItem('personInfo')

const student={
    firstName:'Susmita',
    lastName:'Rasmi',
    age:21,
    skills:['HTML','CSS','JvaScript','MongoDB'],
    country:'India',
    enrolled:true
}
let studentInfo=JSON.stringify(student)
localStorage.setItem('student',studentInfo)
localStorage.getItem('studentInfo')