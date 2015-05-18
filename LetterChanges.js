/*
********** Letter Changes - Challenge 4 **********
Replace every letter in the string with the letter following it in the
alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in
the new string. Finally, return the modified string.


var phrase = "abcdefghijklmnopqrstuvwxyz";

var letterChange = function(phrase) {
	for (var i = 0; i < phrase.length; i++) {
		console.log(phrase.charCodeAt(i));
		if (phrase.charCodeAt(i) >= 97) {
			phrase[i] = phrase.charCodeAt(i + 1);
		} else if (phrase.charCodeAt(i) === 122) {
			phrase[i] = phrase[i].charCodeAt(97);
		} else {
			console.log('Please enter a phrase');
		}
		
	}

	return phrase;
}
//letterChange(phrase);
console.log(letterChange(phrase));
*/

var phrase = "Hello World";

var letterChange = function(phrase) {
	for (var i = 0; i < phrase.length; i++) {
		if (phrase.charAt(i) === 'o') {
			phrase[i] = phrase[i].charAt(i).toUpperCase();
		}
	}

	return phrase;
}

console.log(letterChange(phrase));