const numbers=[4,8,98]
const student={
    name:'Salam Khan',
    Age:55,
    study:'Mathematics'
}
//1 using a simple templet string
const templetStriing=`My Name Is ${student.name},My study On ${student.study},My Age ${student.Age},My Roll ${numbers[2]}`
// console.log(templetStriing)

// 2 Arrow function using
const getFiftyFive=()=>55

const singlePeramiter=num=>num+5665

const doublePeramiter=(num1,num2)=>num1+num2

const mutipleWork=(x,y,z)=>{
    const sum=x+y+z
    const subtraction=x-y-z
    const mutipication=sum*subtraction
    return mutipication
}
// 3 spread operator
const newNumbers=[...numbers];
newNumbers.push(55)
console.log(newNumbers)
console.log(numbers)