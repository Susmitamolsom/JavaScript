// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.    
// const personAccount = {
//     firstName: "John",
//     lastName: "David",
//     incomes: [],
//     expenses: [],
//     totalIncome: function (){
//         total=0
//         for (let income of  this.incomes){
//             total+=income.amount
//         }
//         return total
//     },
//     totalExpense: function (){
//         total=0
//         for (let expense of this.expenses){
//             total+=expense.amount
//         }
//         return total
//     },
//     accountInfo: function (){
//         let balance=this.totalIncome()-this.totalExpense()
//         return `Name:${this.firstName} ${this.lastName}\nTotal income: ${this.totalIncome()}\nTotal expenses:${this.totalExpense()}\nAccount balance:${balance}`
//     },
//     addIncome: function (description,amount){
//         this.incomes.push({description,amount})
//     },
//     addExpense: function (description,amount){
//         this.expenses.push({description,amount})
//     },
//     accountBalance: function () {
//         return this.totalIncome() - this.totalExpense();
//     }
// }
// personAccount.addIncome("Salary", 5000)
// personAccount.addIncome("Freelance Work", 1000)
// personAccount.addExpense("Rent", 1500)
// personAccount.addExpense("Groceries", 300)
// console.log(personAccount.accountInfo())
// console.log("Account Balance: $" + personAccount.accountBalance())

// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ().
// Imagine you are getting the above users collection from a MongoDB database.
//  a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];
// function signUp(newUser) {
//     for (let user of users){
//         let signInemail='susmi@gmail.com'
//         if (user.email===signInemail){
//             return 'Email already exist'
//         }
//     }
//     users.push(newUser)
//     console.log(users)
    
// }
// let newUser={}
// newUser._id='dddd'
// newUser.username='susmita'
// newUser.email='susmi@gmail.com'
// newUser.password='86dgy'
// newUser.createdAt='10/06/2000 10:am'
// newUser.isLoggedIn=false
// signUp(newUser)

//b. Create a function called signIn which allows user to sign in to the application
// function signIn(email,password){
//     for (let user of users){
//         if (user.email===email && user.password===password){
//             return `Your acount ${email} is already sign in`
//         }     
//     }return 'First create a new account'
// }
// console.log(signIn('thomas@thomas.com','123333'))

// 1.The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 
const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]
// function rateProduct(productId,ratingId,ratepoint){
//     for (let product of products){
//        //console.log(product.ratings)
//         if (product._id===productId){
//             if (product.ratings.length>=1){
//                 for (let user in product.ratings){
//                     let userating=product.ratings[user]
//                     if (userating.userId===ratingId){
//                         return 'Already rated'
//                     }
//                     else{
//                         product.ratings.push({userId:ratingId,ratepoint})
//                         return product
//                     }
//                 }
//             }
//             else{
//                 product.ratings.push({userId:ratingId,ratepoint})
//                 return product
//             }
//     }
//     }
// }
// console.log(rateProduct('eedfcf','susmu',5))

// b. Create a function called averageRating which calculate the average rating of a product
// function averageRating(productId){
//     for (let product of products){
       //console.log(product.ratings)
//         if (product._id===productId){
//             let sum1=0
//             if (product.ratings.length>0){
//                 let sum=0
//                 for (let user in product.ratings){
//                     let userating=product.ratings[user]
//                     sum+=userating.rate
//                 }
//                 let avg=sum/product.ratings.length
//                 return `averageRating is :${avg}`
//             }
//             else{
//                 return `No Rating`
//             }
//     }
//     }
// }
// console.log(averageRating('hedfcg'))

// 2.Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(productId,likepro){
    for (let product of products){
        // console.log(product)
        if (product._id===productId){
            // console.log(product.likes)
            if (product.likes.includes(likepro)){
                product.likes.splice(likepro,1)
                return product
            }
            else{
                product.likes.push(likepro)
                return product
            }
        }
        // return product
    }
}
console.log(likeProduct('aegfal','fg12cy'))