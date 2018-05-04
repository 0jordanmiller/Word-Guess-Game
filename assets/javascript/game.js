
var dogBreeds = ['Golden Retriever', 'German Shepherd', 'Bichon-Frise', 'Poodle', 'Chihuahua', 'Beagle', 'Greyhound', 'Pitbull', 'Husky', 'Shiba Inu', 'Great Dane', 'Rottweiler', 'Boxer']

var dogWord = dogBreeds[Math.floor(Math.random()*dogBreeds.length)];

var dogWordLength = dogWord.length;

var underscoreArray = []

for (i = 0; i < dogWordLength; i++) {
	underscoreArray.push('_');
}

var lettersGuessed = [];
var guessesLeft = 12;
var wins = 0;
var indexes = []
var turn = false;
var keyPress;

document.onkeyup = function(event) {
	keyPress = event.key;
	var dogBreeds = ['Golden Retriever', 'German Shepherd', 'Bichon-Frise', 'Poodle', 'Chihuahua', 'Beagle', 'Greyhound', 'Pitbull', 'Husky', 'Shiba Inu', 'Great Dane', 'Rottweiler', 'Boxer']
	var dogWordLength = dogWord.length;
	lettersGuessed.push(' ' + keyPress);
	var a = false;

	for (i = 0; i < dogWordLength; i++) {
		if (dogWord[i].toLowerCase() === keyPress.toLowerCase()) {
			underscoreArray[i] = keyPress;
			a = true;
		}
	}

	if (underscoreArray.join('') === dogWord.toLowerCase()) {
		wins++;
		guessesLeft = 12;
		lettersGuessed = [];
		underscoreArray = [];
		dogWord = dogBreeds[Math.floor(Math.random()*dogBreeds.length)];
		dogWordLength = dogWord.length;
		indexes = [];
		for (i = 0; i < dogWordLength; i++) {
			underscoreArray.push('_');
		}
	}

	if (a === false) {
			guessesLeft--;
		}

	if (guessesLeft === 0 && underscoreArray.join('') !== dogWord.toLowerCase()) {
		guessesLeft = 12;
		lettersGuessed = [];
		underscoreArray = [];
		dogWord = dogBreeds[Math.floor(Math.random()*dogBreeds.length)];
		dogWordLength = dogWord.length;
		indexes = [];
		for (i = 0; i < dogWordLength; i++) {
			underscoreArray.push('_');
		}
	}	
		var body = '<h1>Current Word: ' + underscoreArray.join(' ') + '</h1>' +
	'<h1>Letters guessed: ' + lettersGuessed + '</h1>' +
	'<h1>Guesses left: ' + guessesLeft + '</h1>' +
	'<h1>Wins: ' + wins + '</h1>';
		document.querySelector("#game").innerHTML = body;
	console.log(dogWord)
}









