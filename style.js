	// 1 

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

//################ SOLUTION


function diamond(n){
	if (!n  || n < 0 || n % 2 === 0) return null;
	let str = '';
	for(let row = 1; row <= n; row++) {
   for(let i = 0; i < Math.abs(Math.ceil(n/2) - row); i++) str += ' ';
    for(let i = 0; i < n - Math.abs(Math.ceil(n/2) - row) * 2; i++) str += '*';      
		str += '\n';
  }
  return str;
}

	// 2 

// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

//################ SOLUTION

function solve(arr) {
	let reversArr = arr.reverse()
	let newArr = [...new Set(reversArr)];
	return newArr.reverse()
 }


 	// 3 

//  An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

//  solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
//  solve([5,4,3,2,1]) = [5,4,3,2,1]
 
//  Notice that the last element is always included. All numbers will be greater than 0.
//  More examples in the test cases.
 
//  Good luck!
 
 //################ SOLUTION


 function solve(arr){
	let res = [];
	for (let i = 0; i < arr.length - 1; i++){
	  if (arr[i] > Math.max(...arr.slice(i+1))){
		 res.push(arr[i])
	  }  
	}
	return res.concat(arr[arr.length-1])
 };

solve([104,18,37,9,36,47,28]) 


 	// 4 

// Count how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0

// example
// const arr = [1, -3, -4, 0, 5];

// 
// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |
// 

// catchSignChange(arr) == 2;


 //################ SOLUTION

function catchSignChange(arr) {
	let counter = 0
	let plus = false;
	arr.forEach((i) => {
	  if (arr[0] >= 0 && counter == 0) {
		 plus = true;
	  } else if (arr[0] < 0 && counter == 0) {
		 plus = false;
	  }
	  if (i >= 0 && !plus) {
		 plus = true;
		 counter++
	  } else if (i < 0 && plus) {
		 plus = false;
		 counter++;
	  }
	});
	return counter
 }
  catchSignChange([-7,-7,7,0])
 catchSignChange([-47,84,-30,-11,-5,74,77])
 catchSignChange([1,-3,-4,0,5])

// 5

//  Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.


 //################ SOLUTION


 function digits(n) {
	n = n.toString()
	let arr = n.split('')
	return arr.length
 }

 digits(128685)