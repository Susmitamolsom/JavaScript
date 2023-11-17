// 1. Find the person who has many skills in the users object.
const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: "paul@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//  let moreSkills=0
//  let skill=0 
// for (let person in users){
//     let userobject=users[person].skills.length
//     if (skill<userobject){
//         skill=userobject
//         moreSkills=person
//     }
// }
// console.log(moreSkills)

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
// let userpoint=0
// let morepoints=0
// for (let personlogged in users){
//     let userobject=users[personlogged]
//     if (userobject.points>=50){
//         userpoint++
//     }
//     if (userobject.isLoggedIn){
//         morepoints++
//     }
// }
// console.log(`${morepoints} users are login`)
// console.log(`${userpoint} users are greater than equal 50`)

// 1. Find people who are MERN stack developer from the users object
// let mernarray=[]
// for (let mernstack in users){
//     let user=users[mernstack]
//     let mongo=user.skills.includes('MongoDB')
//     let Exp=user.skills.includes('Express')
//     let React=user.skills.includes('React')
//     let node=user.skills.includes('Node')
//     if (mongo && Exp && React && node){
//         mernarray.push(mernstack)
//     }
// }
// console.log(mernarray)

// 2. Set your name in the users object without modifying the original users object
// const users = {
//     Alex: {
//       email: "alex@alex.com",
//       skills: ["HTML", "CSS", "JavaScript"],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: "asab@asab.com",
//       skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: "daniel@daniel.com",
//       skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: "daniel@alex.com",
//       skills: ["HTML", "CSS", "JavaScript", "Python"],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: "john@john.com",
//       skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: "thomas@thomas.com",
//       skills: ["HTML", "CSS", "JavaScript", "React"],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: "paul@paul.com",
//       skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Sushmita: {
//         email: "susmita@m.com",
//         skills: ["HTML","CSS","JavaScript"],
//         age: 21,
//         isLoggedIn:false,
//         points:50
//     }
//   }
  for (let username in users){
    let userobj=users[username]
    console.log(users,userobj)
  }
console.log(users)

// 3. Get all keys or properties of users object
// const allKeys = Object.keys(users)
// console.log(allKeys)

// 4. Get all the values of users object
// const allValues = Object.values(users)

// console.log(allValues)

// 5. Use the countries object to print a country name, capital, populations and languages.
// const countries = {
//     India:{
//         name: 'India',
//         capital: 'Delhi',
//         population: 140000000,
//         languages:['Hindi','Bengali','Telugu'],
//     },
//     usa: {
//         name: "United States of America",
//         capital: "Washington, D.C.",
//         population: 331002651,
//         languages: ["English"]
//     },
//     canada: {
//         name: "Canada",
//         capital: "Ottawa",
//         population: 37742154,
//         languages: ["English", "French"]
//     },
//     france: {
//         name: "France",
//         capital: "Paris",
//         population: 65273511,
//         languages: ["French"]
//     },
//     germany: {
//         name: "Germany",
//         capital: "Berlin",
//         population: 83190556,
//         languages: ["German"]
//     }
//   };
  
//   for (const country in countries) {
//     const countryInfo = countries[country]
//     console.log(`Country: ${countryInfo.name}`)
//     console.log(`Capital: ${countryInfo.capital}`)
//     console.log(`Population: ${countryInfo.population}`)
//     console.log(`Languages: ${countryInfo.languages.join(', ')}\n`)
//   }
  