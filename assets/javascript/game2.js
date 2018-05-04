var dogBreeds = ['Golden Retriever', 'German Shepherd', 'Bichon-Frise', 'Poodle', 'Chihuahua', 'Beagle', 'Greyhound', 'Pitbull', 'Husky', 'Shiba Inu', 'Great Dane', 'Rottweiler', 'Boxer']
var dogWord = dogBreeds[Math.floor(Math.random()*dogBreeds.length)];
var dogWordLength = dogWord.length;
var underscoreArray = [];
var lettersGuessed = [];
var guessesLeft = 12;
var wins = 0;
var indexes = []
var turn = false;
var keyPress;

for (i = 0; i < dogWordLength; i++) {
	underscoreArray.push('_');
}

document.onkeyup = function() {
	lettersGuessed = [];
	var body = '<h1>Current Word: ' + underscoreArray.join(' ') + '</h1>' +
	'<h1>Letters guessed: ' + lettersGuessed + '</h1>' +
	'<h1>Guesses left: ' + guessesLeft + '</h1>' +
	'<h1>Wins: ' + wins + '</h1>';
	var keyPress = event.key;
	lettersGuessed.push(' ' + keyPress);

	var dogBreeds = ['Golden Retriever', 'German Shepherd', 'Bichon-Frise', 'Poodle', 'Chihuahua', 'Beagle', 'Greyhound', 'Pitbull', 'Husky', 'Shiba Inu', 'Great Dane', 'Rottweiler', 'Boxer']
	var dogWordLength = dogWord.length;

		document.querySelector("#game").innerHTML = body;







}