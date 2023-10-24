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