// 1.Create an Animal class. The class will have name, age, color, legs properties and create different methods
// class Animal{
//     constructor (name,age,color,legs){
//         this.name=name
//         this.age=age
//         this.color=color
//         this.legs=legs
//     }
// }
// const Animal1=new Animal('Rocky',2,'Brown',4)
// console.log(Animal1)

// 2.Create a Dog and Cat child class from the Animal Class.
// class Animal{
//     constructor (name,age,color,legs){
//         this.name=name
//         this.age=age
//         this.color=color
//         this.legs=legs
//     }
// }
// class Dog extends Animal{
//     constructor (name,age,color,legs){
//         super(name,age,color,legs)
//     }
// }
// class Cat extends Animal{
//     constructor(name,age,color,isIndoor){
//         super(name,age,color,4)
//         this.isIndoor=isIndoor
//     }
// }
// const Rocky=new Dog('Rocky',2,'Brown',4)
// const Nini=new Cat('Nini',1,'Red White',true)
// console.log(Rocky)
// console.log(Nini)

// LEVEL-2 EXERCISE
// 1.Override the method you create in Animal class
class Animal{
    constructor(name,age,color,legs){
        this.name=name
        this.age=age
        this.color=color
        this.legs=legs
    }
    getFulldetails(){
        return `${this.name},${this.age},${this.color},${this.legs}`
    }
}
class Dog extends Animal{
    constructor (name,age,color,legs){
        super(name,age,color,legs)
    }
    getFulldetails(){
        return `${this.name},${this.age},${this.color},${this.legs}`
    }
    bark(){
        return `${this.name},Says:bow bow!`
    }
}
class Cat extends Animal{
    constructor(name,age,color,isIndoor){
        super(name,age,color,4)
        this.isIndoor=isIndoor
    }
    getFulldetails(){
        return `${this.name},${this.age},${this.color},${this.legs}`
    }
    meow(){
        return `${this.name},Says:meow!`
    }
}
const dog=new Dog('Montu',3,'Red',4)
const cat=new Cat('Nini',2,'Brown',true)
console.log(dog.getFulldetails())
console.log(cat.getFulldetails())


// LEVEL-3 EXERCISE

// 2.Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class personAccount{
    constructor(firstname,lastname,incomes,expenses){
        this.firstname=firstname
        this.lastname=lastname
        this.incomes=[]
        this.expenses=[]
    }
    totalIncomes(){
        let total=0
        for (let income of this.incomes){
            total+=income.amount
        }
        return total
    }
    totalExpenses(){
        let total=0
        for (let expense of this.expenses){
            total+=expense.amount
        }
        return total
    }
    accountbalance(){
        const incomeTotal=this.totalIncomes()
        const expensesTotal=this.totalExpenses()
        return incomeTotal-expensesTotal
    }
    accountInfo(){
        const balance=this.accountbalance()
        return ` Account holder:${this.firstname} ${this.lastname} \n Total income:${this.totalIncomes()}\n Total Expenses:${this.totalExpenses()}\n Account balance:${balance} `
    }
    addincomes(description,amount){
        this.incomes.push({description,amount})
    }
    addExpenses(description,amount){
        this.expenses.push({description,amount})
    }
}
const person=new personAccount('Rasmi','Susmita')
person.addincomes('Salary',8000)
person.addincomes('Freelance Work',2000)
person.addExpenses('Rent',2000)
person.addExpenses('Groceries',1000)
console.log(person.accountInfo())