// LEVEL-1

// 1.Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
let paragraph=document.querySelector('p')
console.log(paragraph)

// 2.Get each of the the paragraph using document.querySelector('#id') and by their id
let gettingId=document.getElementById('second')
console.log(gettingId)

// 3.Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
let allParagraph=document.querySelectorAll('p')
console.log(allParagraph)

// 4.Loop through the nodeList and get the text content of each paragraph
let looping=document.querySelectorAll('p')
for (let i=0;i<looping.length;i++){
    console.log(`Paragraph ${i+1}:${looping[i].textContent}`)
}

// 5.Set a text content to paragraph the fourth paragraph,Fourth Paragraph
let textContent=document.querySelectorAll('p')
textContent[3].textContent='Fourth paragraph'
console.log(textContent)

// 6.Set id and class attribute for all the paragraphs using different attribute setting methods
let addAttri=document.querySelectorAll('p')
addAttri[2].setAttribute('class','para')
console.log(addAttri)

// LEVEL-2

// 1.Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// let styleChange=document.querySelectorAll('p')
// addAttri[0].style.color='blue'
// addAttri[1].style.backgroundColor='red'
// addAttri[2].style.fontSize='24px'
// addAttri[3].style.fontFamily='bold'
// console.log(addAttri)

// 2.Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
let colorStyle=document.querySelectorAll('p')
for (let i=0;i<colorStyle.length;i++){
    if (i%2==0){
        colorStyle[i].style.color='green'
    }
    else{
        colorStyle[i].style.color='red'
    }
}

// 3.Set text content, id and class to each paragraph
