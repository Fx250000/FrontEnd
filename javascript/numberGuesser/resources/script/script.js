let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, target) 
    {
    if (Math.abs(humanGuess - target) < Math.abs(computerGuess - target)) {
        return true;
    }
    else if ((Math.abs(humanGuess - target) > Math.abs(computerGuess - target))) 
        {
        return false;
    }
};

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    }
    else if (winner === 'computer') {
        computerScore += 1;
    }
};

function advanceRound() {
    currentRoundNumber ++;
}

console.log(generateTarget());
console.log(compareGuesses());
console.log(updateScore());
console.log(advanceRound());
