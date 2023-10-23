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

// 6

//  Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

 //################ SOLUTION

 function sortByLength (array) {
	array.sort(function (a, b) {
		return a.length - b.length;
	 });

	return array
 };

 sortByLength(["", "Moderately", "Brains", "Pizza"])



// 7

//  In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

 //################ SOLUTION

 function filter_list(l) {
	let arr = []
	for (let i = 0; i < l.length; i++) {
		if (typeof l[i]  === "number") {
			arr.push(l[i])
		}
	} 
	return arr
 }
 filter_list([1,2,'aasf','1','123',123])

// 8

// I'm afraid you're in a rather unfortunate situation. You've injured your leg, and are unable to walk, and a number of zombies are shuffling towards you, intent on eating your brains. Luckily, you're a crack shot, and have your trusty rifle to hand.

// The zombies start at range metres, and move at 0.5 metres per second. Each second, you first shoot one zombie, and then the remaining zombies shamble forwards another 0.5 metres.

// If any zombies manage to get to 0 metres, you get eaten. If you run out of ammo before shooting all the zombies, you'll also get eaten. To keep things simple, we can ignore any time spent reloading.

// Write a function that accepts the total number of zombies, a range in metres, and the number of bullets you have.

// If you shoot all the zombies, return "You shot all X zombies." If you get eaten before killing all the zombies, and before running out of ammo, return "You shot X zombies before being eaten: overwhelmed." If you run out of ammo before shooting all the zombies, return "You shot X zombies before being eaten: ran out of ammo."

// (If you run out of ammo at the same time as the remaining zombies reach you, return "You shot X zombies before being eaten: overwhelmed.".)

// Good luck! (I think you're going to need it.)

 //################ SOLUTION

function zombieShootout (zombies, range, ammo) {
	let kill = 0
	if (zombies > ammo && (range * 2) > ammo) {
		if ((range * 2) > ammo ) {
			kill = ammo
		}else{
			kill = (range * 2)
		}
		return `You shot ${kill} zombies before being eaten: ran out of ammo.`
	}
	if (zombies <= ammo && (range * 2) >= zombies) {
		kill = zombies
		return `You shot all ${kill} zombies.`
	}
	if ((range * 2) < zombies ) {
		if ((range * 2) > ammo) {
			kill = ammo
		}
		else{
			kill = (range * 2)
		}
		return `You shot ${kill} zombies before being eaten: overwhelmed.`
	}
}

zombieShootout(56, 23, 29)
zombieShootout(50, 10, 8)
zombieShootout(3, 10, 10)
zombieShootout(100, 8, 200)
zombieShootout(97, 18, 60)


// 9

// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.