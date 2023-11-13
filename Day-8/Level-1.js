// 1. Create an empty object called dog
// let dog={}

// 2. Print the the dog object on the console
//console.log(dog)

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof.
// let dog={
//     name:'Rocky',
//     legs:4,
//     color:'Red',
//     age:5,
//     bark: function (){
//         return('woof woof')
//     }
// }
// console.log(`Name:${dog.name}`)
// console.log(`Legs:${dog.legs}`)
// console.log(`Color:${dog.color}`)
// console.log(`Age:${dog.age}`)
// console.log(`Sound: ${dog.bark()}`)

// 4. Get name, legs, color, age and bark value from the dog object
// 5. Set new properties the dog object: breed, getDogInfo
let dog={
    name:'Rocky',
    legs:4,
    color:'Red',
    age:5,
    breed:'Retriever',
    bark: function (){
        return('woof woof')
    },
    dogInfo: function(){
       return (`Name:${dog.name}, Color:${dog.color},Color:${dog.color},Age:${dog.age},Sound: ${dog.bark()},breed:${dog.breed}`)
    }
}
// dogInfo=new dog ()
// console.log(`Name:${dog.name}`)
// console.log(`Legs:${dog.legs}`)
// console.log(`Color:${dog.color}`)
// console.log(`Age:${dog.age}`)
// console.log(`Sound: ${dog.bark()}`)
// console.log(`breed:${dog.breed}`)
console.log(dog.dogInfo())