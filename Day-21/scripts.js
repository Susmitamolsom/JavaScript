// 1.Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
let allCenter=document.querySelector('.wrapper')
allCenter.style.display='flex'
allCenter.style.alignItems='center'
allCenter.style.justifyContent='center'
allCenter.style.flexDirection='column'
let heading=document.querySelector('h1')
heading.style.fontSize='18px'

// 2.The year color is changing every 1 second
let yearElement=document.getElementById('year')
yearElement.style.fontSize='55px'
function changeYearcolor(){
    const colors=['lightred','green','blue','orange','lightpurple']
    let colorIndex=0
    setInterval(()=>{
        yearElement.style.color=colors[colorIndex]
        colorIndex=(colorIndex+1)%colors.length
    },1000)
}
changeYearcolor()

// 3.The date and time background color is changing every on seconds
let secondHead=document.querySelector('h2')
secondHead.style.fontSize='16px'
secondHead.style.textDecoration='underline'

let now=new Date()
let year=now.getFullYear()
let month=now.getMonth()
let monthInwords=['January','February','March','April','May','June','July','August','September','October','November','December']
let date=now.getDate()
let hour=now.getHours()
let minute=now.getMinutes()
let second=now.getSeconds()
if (month<10){
    month='0'+month
}
if (hour<10){
    hour='0'+hour
}
if (minute<10){
    minute='0'+minute
}
if (second<10){
    second='0'+second
}
let yearDatetime=(`${monthInwords[month]} ${date},${year} ${hour}:${minute}:${second}`)
console.log(yearDatetime)
let getTimes=document.querySelector('h3')
getTimes.style.display='flex'
getTimes.style.justifyContent='center'
getTimes.style.fontSize='15px'
getTimes.style.width='200px'
getTimes.style.height='25px'
getTimes.style.alignItems='center'
getTimes.innerText=yearDatetime
function dateTime(){
    const colors=['red','lightgreen','lightblue','orange','purple']
    let colorIndex=0
    setInterval(()=>{
        getTimes.style.backgroundColor=colors[colorIndex]
        colorIndex=(colorIndex+1)%colors.length
    },1000)
}
dateTime()

// 4.Completed challenge has background green

let items=document.querySelectorAll('li')
for (let i=0;i<items.length;i++){
    if (items[i].textContent.includes('Done')){
        items[i].style.backgroundColor='green'
        items[i].style.listStyle='none'
        items[i].style.padding='10px'
        items[i].style.width='370px'
        items[i].style.paddingLeft='25px'
        items[i].style.marginBottom='4px'
    }

// 5.Ongoing challenge has background yellow

    if (items[i].textContent.includes('Ongoing')){
        items[i].style.backgroundColor='yellow'
        items[i].style.listStyle='none'
        items[i].style.padding='10px'
        items[i].style.paddingLeft='25px'
        items[i].style.width='370px'
        items[i].style.marginBottom='4px'
    }

// 6.Coming challenges have background red

    if (items[i].textContent.includes('Coming')){
        items[i].style.backgroundColor='red'
        items[i].style.listStyle='none'
        items[i].style.padding='10px'
        items[i].style.paddingLeft='25px'
        items[i].style.width='370px'
        items[i].style.marginBottom='4px'
    }
}