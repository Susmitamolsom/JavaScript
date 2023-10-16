// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
let now=new Date()
let year=now.getFullYear()
let month=now.getMonth()+1
let date=now.getDate()
let hours=now.getHours()
let minute=now.getMinutes()
month<10
?month='0'+month
:month
date<10
?date='0'+date
:date
hours<10
?hours='0'+hours
:hours
minute<10
?minute='0'+minute
:minute
console.log(`${year}-${month}-${date}-${hours}:${minute}`)