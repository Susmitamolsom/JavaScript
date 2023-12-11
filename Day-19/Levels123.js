// LEVEL-1 ....Create a closure which has one inner function
function outer(){
    let count=0
    function inner(){
        count++
        return count
    }
    return inner()
}
console.log(outer())

// LEVEL-2...Create a closure which has three inner functions
function OuterFunction(){
    function checkingEven(){
        let i=1
        while (i<=10){
            if (i%2===0){
                console.log(i)
            }
            i=i+1
        }
    }
    function LastFunction(){
        console.log('I am the last function')
    }
    return {Even: checkingEven(),Last:LastFunction()}
}
const allFunc=OuterFunction()
console.log(allFunc.Even,allFunc.LastFunction)