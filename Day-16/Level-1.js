// 1.Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const allSkill=JSON.stringify(skills)
console.log(allSkill)

// 2.Stringify the age variable
let age = 250
let VarStringify=JSON.stringify(age)
console.log(VarStringify)

// 3.Stringify the isMarried variable
let isMarried = true
let str=JSON.stringify(isMarried)
console.log(str)

// 4.Stringify the student object
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
let studentStringify=JSON.stringify(student)
console.log(studentStringify)

// LEVEL-2 EXERCISE

// 1.Stringify the students object with only firstName, lastName and skills properties
let studentobj=JSON.stringify(student,['firstName','lastName','skills'])
console.log(studentobj)

// LEVEL-3 EXERCISE
// 1.Parse the txt JSON to object.
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
// let txtObj=JSON.parse(txt)
// console.log(txtObj)

// 2.Find the user who has many skills from the variable stored in txt.
const users=JSON.parse(txt)
let maxSkill=0
let personName=0
for (const username in users){
    const user=users[username]
    // console.log(user.skills.length)
    if (user.skills.length>maxSkill){
        maxSkill=user.skills.length
        personName=username
    }
}
console.log(`TopSkill :${maxSkill} \nPerson :${personName}`)