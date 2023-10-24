//1. Develop a small script which generate any number of characters random id:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
// let str=''
// for (let i=0;i<9;i++){
//     let random_id=Math.floor(Math.random()*characters.length)
//     str+=characters[random_id]
// }
// console.log(str)

//2. Write a script which generates a random hexadecimal number.
// const hexa = '0123456789ABCDEF'
// let str=''
// for (let i=0;i<6;i++){
//     let random_id=Math.floor(Math.random()*hexa.length)
//     str+=hexa[random_id]
// }
// console.log(str)

// 3. Write a script which generates a random rgb color number.
// const red = Math.floor(Math.random() * 256);
// const green = Math.floor(Math.random() * 256);
// const blue = Math.floor(Math.random() * 256);
// console.log(`rgb(${red}, ${green}, ${blue})`);

// 4. Using the above countries array, create the following new array.
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
// let arr=[]
// arr.push(countries)
// console.log(arr)

// 5. Using the above countries array, create an array for countries length'.
// let arrays=[]
// for (let i=0;i<countries.length;i++){
//     let countrieslength=countries[i].length
//     arrays.push(countrieslength)
// }
// console.log(arrays)
  
//6. Use the countries array to create the following array of arrays:
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]
// let array=[]
// for (let i=0;i<countries.length;i++){
//      let arrays=[]
//     let countriesindex=countries[i]
//     let sort= countriesindex.slice(0,3)
//     console.log(countriesindex)
//     let countrieslength=countriesindex.length
//     arrays.push(countriesindex,sort.toUpperCase(),countrieslength)
//     array.push(arrays)
// }
//  console.log(array)


// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// let stringarr=[]
// for (let i=0;i<countries.length;i++){
//     if (countries[i].endsWith('land')){
//         stringarr.push(countries[i])
//     }
// }
// console.log(stringarr)


//8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// let stringarr=[]
// for (let i=0;i<countries.length;i++){
//     if (countries[i].endsWith('ia')){
//         stringarr.push(countries[i])
//     }
// }
// console.log(stringarr)

// 9. Using the above countries array, find the country containing the biggest number of characters.
// let str=''
// for (let i of countries){
//     if (i.length>str.length){
//         str=i
//     }
// }
// console.log(str)

// 10. Using the above countries array, find the country containing only 5 characters.
// let array=[]
// for (let i=0;i<countries.length;i++){
//     if (countries[i].length===5){
//         array.push(countries[i])
//     }
// }
// console.log(array)

//11. Find the longest word in the webTechs array
// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// let str=''
// for (let i of webTechs){
//     if (i.length>str.length){
//         str=i
//     }
// }
// console.log(str)

// 12. Use the webTechs array to create the following array of arrays:
// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// let array2=[]
// for (let i=0;i<webTechs.length;i++){
//     let array=[]
//     let webTechslength=webTechs[i].length
//     let webTechsindex=webTechs[i]
//     array.push(webTechsindex,webTechslength)
//     array2.push(array)
// }
// console.log(array2)

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
// let programarray=["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// let emptyarray=[]
// for (let i=0;i<programarray.length;i++){
//     emptyarray.push(programarray[i])
// }
// console.log(emptyarray)

// let programarray=["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// // let emptyarray=[]
// for (const i of programarray){
//     // emptyarray.push(programarray[i])
//     console.log(i)
// }

//15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// let arr=['banana', 'orange', 'mango', 'lemon']
// let empty=[]
// for (let i=arr.length-1;i>=0;i--){
//     empty.push(arr[i])
// }
// console.log(empty)

// 16. Print all the elements of array as shown below.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (const subArray of fullStack) {
  for (const item of subArray) {
    console.log(item);
  }
}
