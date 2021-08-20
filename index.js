/* 1. Counting sheep

Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. That number should be the number of sheep you have.
 The function should display the number along with the message 
 "Another sheep jumps over the fence" until no more sheep are left.

 */

 const sheep = function(n) {
    if (n === 0) {
        console.log('All sheep have jumped over the fence')
    }
    else {
        console.log(`${n}: Another sheep jumps over the fence`)
        return sheep(n-1)
    }
}

sheep(3)

/* 2. Power Calculator

Write a function called powerCalculator() that takes two parameters, 
an integer as a base, and another integer as an exponent. The function returns the 
value of the base raised to the power of the exponent. 
Use only exponents greater than or equal to 0 (positive numbers).

*/

const powerCalc = function(base, exp) {
    if (exp <= 0) {
        return (`exponent should be >= 0`)
    }
    if (exp === 1) {
        return base
    }
    else {
        return base * powerCalc(base, exp - 1)
    }
}
console.log(powerCalc(3, 1))
console.log(powerCalc(10, 3))
console.log(powerCalc(2, 3))
console.log(powerCalc(3, 0))