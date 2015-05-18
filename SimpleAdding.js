/*
**********  Challenge 5 **********
Have user input a number from 1 - 1000. Add all the numbers from 1 to that number.
Ex. input = 12 would result in an answer of 78.
*/

var num = prompt("Enter a number from 1 - 1000:");

var simpleAdding = function(num) {
	var count = 0;
	for (var i = 0; i <= num; i++) {
		count += i;		
	}

	return count;
}

console.log(simpleAdding(num));