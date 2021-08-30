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

// Reverse String
const reverseString = function(string, i=1, result='') {
	if (result.length === string.length) {
  return result
  }
  if (i < string.length + 1) {
  let x = string.length - i
  i++
  result = result + string[x]
  return reverseString(string, i, result)
  }
}

console.log(reverseString('dog'))
console.log(revereString('happydays'))

//nth Triangular Number
const triangularNumber = function(n) {
	if (n === 0) {
  	return n
  }
  
	return n = n + triangularNumber(n-1)
}

console.log(triangularNumber(4))

//String Splitter

const stringSplitter = function(string, splitter) {
	if (string.indexOf(splitter) === -1) {
  	return [string.slice(0, string.length)]   
  }
  return [string.slice(0, string.indexOf(splitter)), ...stringSplitter(string.slice(string.indexOf(splitter) + 1), splitter)]
  }
  

console.log(stringSplitter('02/20/2020', '/'))

//fibonacci

const fibonacci = function(n) {
	if (n < 1) {
  	console.log('done')
  	return 0
  }
  if (n <= 2) {
  	return 1
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(20))


//maze solver//

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];


const mazeSolver = function(maze, row=0, col=0, directions='') {
	if(row < 0 || col < 0) {
  	console.log('input out of bounds')
  	return directions;
  }
  
	if (maze[row][col] === 'e') {
  	console.log('solved')
    return directions
  }
  
  if (col + 1 < maze[0].length && maze[row][col + 1] !== '*') {
  	let newrow = row
    let newcol = col + 1
    directions = directions + 'R'
    return mazeSolver(maze, newrow, newcol, directions)
  }
  
  if (row + 1 < maze.length && maze[row + 1][col] !== '*' ) {
  	let newrow = row + 1
    let newcol = col 
    directions = directions + 'D'
    return mazeSolver(maze, newrow, newcol, directions)
  }
  
  if (row - 1 < maze.length && maze[row - 1][col] !== '*' ) {
  	let newrow = row - 1
    let newcol = col 
    directions = directions + 'U'
    return mazeSolver(maze, newrow, newcol, directions)
  }
  
  if (col - 1 < maze[0].length && maze[row][col - 1] !== '*' ) {
  	let newrow = row
    let newcol = col - 1
    directions = directions + 'L'
    return mazeSolver(maze, newrow, newcol, directions)
  }
}

console.log(mazeSolver(maze, 0, 0, ''));

//refactor maze not sure

let maze = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', 'e']
];

const mazeSolver = function(maze, row=0, col=0, directions='', path=[]) {
if (row >= (maze.length) || col >= maze[0].length) {
  return;
}

if (row < 0 || col < 0) {
  return;
}

if (maze[row][col] === 'e') {
  path.push(directions)
  console.log(`this is a path: ${directions}`)
  return path
}

if (maze[row][col] === ' ') {
  maze[row][col] = 'v'
  mazeSolver(maze, row, col - 1, directions + 'L'),
  mazeSolver(maze, row, col + 1, directions + 'R'),
  mazeSolver(maze,row - 1, col, directions + 'U'),
  mazeSolver(maze, row + 1, col, directions + 'D')
  maze[row][col] = ' ';
}

if (maze[row][col] === '*') {
  return;
  }
}

mazeSolver(maze, 0, 0, '')

//anagrams



const permutations = function(string1) {
	if (string1.length < 2) {
  	return string1
  }
  let perms = []
	for (let i=0; i < string1.length; i++) {
   	let char = string1[i]
    let rem = string1.slice(0, i) + string1.slice(i+1, string1.length)
    for (let permutation of permutations(rem)) {
    	perms.push(char + permutation)
    }
   }
   return perms
}

console.log(permutations('abcd'))

//binary

const binaryRep = int => {
  if (int === 0) {
    return '';
  }
  
  const quotient = Math.floor(int/2)
  const binDigit = int % 2;
  return binDigit + binaryRep(quotient)
}