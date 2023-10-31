// 1

// You are writing a chat room app for your company.

// Users have provided feedback that seeing everyone's full names on the screen creates too much noise, and have asked for it to be reduced. However, we still want to be able to uniquely identify everyone. The team have come up with a few rules that will hopefully help in solving this problem!

// Note: It can be assumed that names are in the format of a first name and a last name consisting solely of letters from the English alphabet, both uppercase (A-Z) and lowercase (a-z), separated by a single space and if no names are provided, we should return an empty array.

// If only one person in the chat room has a specific first name, only their first name will be written out.

//  John Smith -> John
// If two or more people have a specific first name, but don't share a second name initial, their first name and second name initial will be written out.

//  John Smith -> John S    
//  John Adams -> John A
// Finally, if two or more people have a specific first name and last name initial, their full name will be written out.

//  John Smith -> John Smith    
//  John Simms -> John Simms
// To help tidy up the output, management have also asked that the chat room list should be alphabetised, by the users screen names and should all be in Title Case.

// JOHN smith -> John Smith
// For our purposes, when we receive the names casing is not important, meaning JOHn SmiTh is equal to john smith, after we've tidied up the casings, these should be interpreted as the same name.

// Our company also has an unusual policy - we don't hire somebody if an employee already exists with the same full name, as our HR platform identifies staff by a combination of their first and last names. Due to this, we don't have to worry about multiple instances of the same full name.


//################ SOLUTION


function generateChatRoomNames(users) {
	const getName = (name) => {
		let space = name.indexOf(' ');
		return (
			name[0].toUpperCase()
			+ name.slice(1, space).toLowerCase()
			+ ' '
			+ name[space + 1].toUpperCase()
			+ name.slice(space + 2).toLowerCase()
		)
	};
	const getAlias = (name) => {
		let space = name.indexOf(' ');
		return name.slice(0, space + 2);
	}

	const getFirstName = (name) => {
		let space = name.indexOf(' ');
		return name.slice(0, space);
	}

	const correctUsers = users.map(getName);
	const cache = correctUsers.reduce((acc, user) => {
		let alias = getAlias(user);
		let firstName = getFirstName(user);
		if (!acc.withNames[firstName]) {
			acc.withAliases[alias] = 1;
			acc.withNames[firstName] = 1;
		} else {
			acc.withNames[firstName]++;
			if (!acc.withAliases[alias]) {
				acc.withAliases[alias] = 1;
			} else {
				acc.withAliases[alias]++;
			}
		}
		return acc;
	}, { withAliases: {}, withNames: {} });

	const res = [];
	correctUsers.forEach(user => {
		let alias = getAlias(user);
		let firstName = getFirstName(user);
		if (cache.withNames[firstName] === 1) {
			res.push(firstName);
		} else if (cache.withAliases[alias] === 1) {
			res.push(alias);
		} else {
			res.push(user)
		}

	});

	return res.sort();
}


generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe", "Jane Bloggs"]);

// 2

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//################ SOLUTION


function findOdd(A) {
	let namber = [...new Set(A)]
	let thisIsTheSameNumber
	let counter = 0
	for (let i = 0; i < namber.length; i++) {
		for (let k = 0; k < A.length; k++) {
			if (namber[i] === A[k]) {
				counter++
			}
		} if (counter % 2 !== 0) {
			thisIsTheSameNumber = namber[i]
			break
		}

	}
	return thisIsTheSameNumber
}


findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])


// 3

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"



//################ SOLUTION



function spinWords(string) {
	let answer = [];
	string = string.split(" ")
	let transformedArray = string.map((element) => {
		return [element];
	});
	for (let i = 0; i < transformedArray.length; i++) {
		for (let k = 0; k < transformedArray[i].length; k++) {
			if (transformedArray[i][k].length >= 5) {
				let reversedString = transformedArray[i][k].split("").reverse().join("")
				answer.push(reversedString)
			} else {
				answer.push(transformedArray[i][k])
			}
		}
	}

	return answer.join(" ");
}

spinWords("Just kidding there is still one more")


// 4

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

//################ SOLUTION

function likes(names) {
	if (names.length === 0) {
		return "no one likes this";
	} else if (names.length === 1) {
		return `${names[0]} likes this`;
	} else if (names.length === 2) {
		return `${names[0]} and ${names[1]} like this`;
	} else if (names.length === 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
	} else {
		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
	}
}

// 5

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//################ SOLUTION

function arrayDiff(a, b) {
	let transformedArray = [];
	if (a.length === 0) {
		return [];
	}
	if (b.length === 0) {
		return a;
	}
	for (let i = 0; i < a.length; i++) {
		let isDifferent = true;
		for (let k = 0; k < b.length; k++) {
			if (a[i] === b[k]) {
				isDifferent = false;
				break;
			}
		}
		if (isDifferent) {
			transformedArray.push(a[i]);
		}
	}
	return transformedArray;
}

arrayDiff([1, 2, 3], [1, 2]);

// 6

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

//################ SOLUTION


function findOutlier(integers) {
	let answerOdd = "";
	let answerOnly = "";
	let conmter = 0
	for (let i = 0; i < integers.length; i++) {
		if (integers[i] % 2 === 0) {
			answerOnly = integers[i]
			conmter = conmter + 1
		} else {
			answerOdd = integers[i]
			conmter = conmter - 1
		}

	} if (conmter >= 0) {
		return answerOdd;
	} else {
		return answerOnly;
	}
}

findOutlier([194164677,60511777,176440559,185868678,-78895983,-135863659])
findOutlier([1, 2, 3])
findOutlier([0, 1, 2])

// 7

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
	let counter = 0;
	let result = 0
	text = text.toLowerCase();
	let newString = [...new Set(text)].join('');
		for (let i = 0; i < newString.length; i++) {
			for (let k = 0; k < text.length; k++) {
				if (newString[i] === text[k]) {
					counter++
				}
			}
			if (counter >= 2) {
				result++
			}
			counter = 0
		}
	return result
 }

 duplicateCount("Indivisibilities")

// 8

//  Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)