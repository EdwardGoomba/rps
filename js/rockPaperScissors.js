var userInput = '';
userInput = userInput.toLowerCase();

function getComputerChoice() {
	Math.floor( Math.random() * 3 );
	switch ( randomNumber ) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors';
	}
}

function determineWinner( userChoice, computerChoice ) {
	if ( userChoice === computerChoice ) {
		return 'The game is a tie!';
	}
	if ( userChoice === 'rock' ) {
		if ( computerChoice === 'paper' ) {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	}
	if ( userChoice === 'paper' ) {
		if ( computerChoice === 'scissors' ) {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	}
	if ( userChoice === 'scissors' ) {
		if ( computerChoice === 'rock' ) {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	}
}