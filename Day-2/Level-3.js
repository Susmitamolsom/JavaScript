// 1. Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
// let word='Love is the best thing in this world. Some found their love and some are still looking for their love.Count the number of word love in this sentence.'
// let word2=word.match(/love/gi).length
// console.log(word2)

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// let word='Use match() to count the number of all because in the following sentence: You cannot end a sentence with because because because is a conjunction'
// console.log(word.match(/because/gi).length)

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// console.log(sentence.replace(/['!@#$%^&*;']/gi,''))

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let txt='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let num=txt.match(/\d+/g)
let salarypermonth=parseInt(num[0])
let annualbonus=parseInt(num[1])
let online_permonth=parseInt(num[2])
console.log(salarypermonth*12+online_permonth*12+annualbonus)

// var text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// // Extract numbers from the text
// var numbers = text.match(/\d+/g);

// // Assuming monthly salary, convert it to annual salary
// var monthlySalary = parseInt(numbers[0]);
// var annualSalary = monthlySalary * 12;

// // Extract the annual bonus
// var annualBonus = parseInt(numbers[1]);

// // Assuming monthly online course income, convert it to annual income
// var monthlyOnlineCourses = parseInt(numbers[2]);
// var annualOnlineCourses = monthlyOnlineCourses * 12;

// Calculate the total annual income
// var totalAnnualIncome = annualSalary + annualBonus + annualOnlineCourses;

// console.log("The total annual income is " + totalAnnualIncome + " euro.");
