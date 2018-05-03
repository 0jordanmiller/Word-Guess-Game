
// Possible breeds to be chosen
var dogBreeds = ['Golden Retriever', 'German Shepherd', 'Bichon-Frise', 'Poodle', 'Chihuahua', 'Beagle', 'Greyhound', 'Pitbull', 'Husky', 'Shiba Inu', 'Great Dane', 'Rottweiler', 'Boxer']


// Choose random dog breed from array
var dogWord = dogBreeds[Math.floor(Math.random()*dogBreeds.length)];

// Store array length
var dogWordLength = dogWord.length;

// Create underscores matching the character length of dog breed
// var dogWordUnderscores = '_ '.repeat(dogWordLength);
var underscoreArray = []

for (i = 0; i < dogWordLength; i++) {
	underscoreArray.push('_');
}

// Array containing the letters already guessed by player
var lettersGuessed = [];

// Indicates how many guesses player has left
var guessesLeft = 12;

// Indicates player wins
var wins = 0;
var indexes = []
var turn = false;
var keyPress;

document.onkeyup = function(event) {
	var body = '<h1>Current Word: ' + underscoreArray.join(' ') + '</h1>' +
	'<h1>Letters guessed: ' + lettersGuessed + '</h1>' +
	'<h1>Guesses left: ' + guessesLeft + '</h1>' +
	'<h1>Wins: ' + wins + '</h1>';
	var keyPressInit = event.which;
	console.log('this is', keyPressInit);
	if (keyPressInit === 32) {
		turn = true;
	}
	if (turn === true) {
		document.querySelector("#game").innerHTML = body;
		keyPress = event.key;
	} else {
		keyPress = '';
	}


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

	console.log(underscoreArray);

	// for (k = 0; k < keyPress.length; k++) {
	// 	if (dogWord[i].toLowerCase() !== keyPress.toLowerCase())
	// }


	

	console.log(dogWord)
	console.log(underscoreArray.join(''))
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
			guessesLeft--
		} 
	if (guessesLeft === 0 || dogWord === 0) {
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
	
	

	
}









