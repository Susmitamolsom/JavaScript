// The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// let age_sort=ages.sort()
// let min=age_sort[0]
// let max=age_sort[age_sort.length-1]
//  console.log(age_sort)
// console.log(min)
// console.log(max)

// Find the median age(one middle item or two middle items divided by two)
// let mid_item=age_sort[age_sort.length/2]
// let secondvalue=age_sort[age_sort.length/2-1]
// console.log(`${mid_item} ${secondvalue}`)

// Find the average age(all items divided by number of items)
// let sum=age_sort[0]+age_sort[1]+age_sort[2]+age_sort[3]+age_sort[4]+age_sort[5]+age_sort[6]+age_sort[7]+age_sort[8]+age_sort[9]
// let avg=sum/age_sort.length
// console.log(avg)

// Find the range of the ages(max minus min)
// let range=max-min
// console.log(range)

// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
// let range1=Math.abs(min-avg)
// let range2=Math.abs(max-avg)
// console.log(`Average min ${range1}`)
// console.log(`Average max ${range2}`)

// Find the middle country(ies) in the countries array
const countries = [
            'Albania',
            'Bolivia',
            'Canada',
            'Denmark',
            'Ethiopia',
            'Finland',
            'Germany',
            'Hungary',
            'Ireland',
            'Japan',
            'Kenya'
          ]
let middle=countries.length
let middle1=Math.floor(middle/2)
console.log(countries[middle1])

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let divide=countries.slice(0,middle1)
let divide1=countries.slice(middle1,countries.length-1+1)
console.log(divide,divide1)