const ticket=new Promise((resolve, reject) => {//This code is synchronous
    const isBooked=true
    if (isBooked){
        resolve('Your ticket is confirmed')
    }
    else{
        reject('You have not book any ticket')
    }
})
ticket
    .then((data)=>{
        console.log('Woo hoo',data)
    })
    .catch((data)=>{
        console.log('oh no',data)
    })
    .finally((data)=>{
        console.log('I will be always executed')
    })