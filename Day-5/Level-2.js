// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file.

// 2. First remove all the punctuations and change the string to array and count the number of words in the array.
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let word=text.replace(/['!@#%&*.,''']/g,'')
let word1=word.split(' ')
console.log(word1)
console.log(word1.length)

// 3. In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.splice(2,1)

// 4. add 'Meat' in the beginning of your shopping cart if it has not been already added
// shoppingCart.push('Meat')

// 5. add Sugar at the end of you shopping cart if it has not been already added
// shoppingCart.unshift('Sugar')

// 6. remove 'Honey' if you are allergic to honey
// shoppingCart.pop()

// 7. modify Tea to 'Green Tea'
// shoppingCart[2]='Green Tea'
// console.log(shoppingCart)

// 8. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// const countries = [
//         'Albania',
//         'Bolivia',
//         'Canada',
//         'Denmark',
//         'Ethiopia',
//         'Finland',
//         'Germany',
//         'Hungary',
//         'Ireland',
//         'Japan',
//         'Kenya'
//       ]
// if (countries.includes('ETHIOPIA')){
//     console.log('ETHIOPIA')
// }
// else{
//     countries.push('Ethiopia')
//     console.log(countries)
// }

// 9. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
// if (webTechs.includes('Sass')){
//     console.log('Sass')
// }
// else{
//     webTechs.push('Sass')
//     console.log(webTechs)
// }

// 10. Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const fullStack=frontEnd.concat(backEnd)
// console.log(fullStack)