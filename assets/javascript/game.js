
// Possible breeds to be chosen
var dogBreeds = ['Golden Retriever', 'German Shepherd', 'Bichon-Frise', 'Poodle', 'Chihuahua', 'Beagle', 'Greyhound', 'Pitbull', 'Husky', 'Shiba Inu', 'Great Dane', 'Rottweiler', 'Boxer']

// Choose random dog breed from array
var dogWord = dogBreeds[Math.floor(Math.random()*dogBreeds.length)];

// Store array length
var dogWordLength = dogWord.length;

// Create underscores matching the character length of dog breed
var dogWordUnderscores = '_ '.repeat(dogWordLength);
 
// Array containing the letters already guessed by player
var lettersGuessed = [];
// Indicates how many guesses player has left
var guessesLeft = 12;
// Indicates player wins
var wins = 0;

document.onkeyup = function(event) {
	var keyPress = event.key;
	lettersGuessed.push(' ' + keyPress);
	

	if (guessesLeft > 0) {
		guessesLeft--
	} else if ( guessesLeft === 0) {

	}


	var body = '<h1>Current Word: ' + dogWordUnderscores + '</h1>' +
			'<h1>Letters guessed: ' + lettersGuessed + '</h1>' +
			'<h1>Guesses left: ' + guessesLeft + '</h1>' + 
			'<h1>Wins: ' + wins + '</h1>';
	document.querySelector("#game").innerHTML = body;
	
}









