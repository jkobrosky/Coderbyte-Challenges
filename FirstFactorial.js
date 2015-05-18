/*
************ Challenge #2 Easy ************

Create a function - FirstFractorial that accepts an argument (num) and
returns the factorial of it. Do this for a range of 1 - 18.

Ex. if num = 4; return (4 * 3 * 2 * 1) = 24; 

*/

// Prompt user for input.
var num = prompt("Enter a number from 1 - 18:");

// Create a function that outputs the factorial.
var factor = function (num) {
	var count = num;
    for (var i = 1; i < num; i++) {
        count = count * i;
    }

	return count;
};

console.log(factor(num));