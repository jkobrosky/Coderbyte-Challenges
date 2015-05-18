// var phrase = "This, is some crazy stuff!";

var extraction = function(phrase) {
	// This strips any punctuation from the sentence or phrase
	phrase = phrase.replace(/[.,!?:;'"-]/g, " ");
	var splitString = phrase.split(" ");
	var wordLength = 0;
	var word = null;
	for (var i = 0; i < splitString.length; i++) {
		if (wordLength <= splitString[i].length) {
			wordLength = splitString[i].length;
			word = splitString[i];
		}
	}

	return word;
};

var results = console.log(extraction(phrase));