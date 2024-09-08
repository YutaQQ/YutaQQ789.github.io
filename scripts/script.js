const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const wordTypeElement = document.querySelector(".word-type-text b");

// Audio elements for sound effects
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const winSound = document.getElementById("win-sound");
const loseSound = document.getElementById("lose-sound");

// Initializing game variables
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const leaderboard = [];
const leaderboardList = document.getElementById('leaderboard-list');

function updateLeaderboard(playerName, score) {
    leaderboard.push({ name: playerName, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard.splice(5); // Keep top 5 scores

    displayLeaderboard();
}

function displayLeaderboard() {
    leaderboardList.innerHTML = leaderboard.map(entry =>
        `<li>${entry.name}: ${entry.score}</li>`
    ).join('');
}


const resetGame = () => {
    // Resetting game variables and UI elements
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

const getRandomWord = () => {
    // Selecting a random word and hint from the wordList
    const { word, hint, type } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word; // Setting the current word
    document.querySelector(".hint-text b").innerText = hint;
    wordTypeElement.innerText = type; // Displaying the word type
    resetGame();
}

const gameOver = (isVictory) => {
    // Game over: showing modal and playing the appropriate sound effect
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");

    if (isVictory) {
        winSound.play();
    } else {
        loseSound.play();
    }
}

const initGame = (button, clickedLetter) => {
    // Check if clickedLetter exists in the currentWord
    if (currentWord.includes(clickedLetter)) {
        // Play correct guess sound
        correctSound.play();
        
        // Show all correct letters on the word display
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                const letterElement = wordDisplay.querySelectorAll("li")[index];
                letterElement.innerText = letter;
                letterElement.classList.add("guessed"); // Add animation class
            }
        });
    } else {
        // Play wrong guess sound
        wrongSound.play();
        
        // Update the wrongGuessCount and hangman image
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
    
    // Disable the clicked button so the user can't click it again
    button.disabled = true; 
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Check for game over conditions
    if (wrongGuessCount === maxGuesses) {
        return gameOver(false);
    }
    if (correctLetters.length === currentWord.length) {
        return gameOver(true);
    }
}

// Creating keyboard buttons and adding event listeners
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);

// Add variables for the new modal and buttons
const infoButton = document.querySelector(".info-button");
const infoModal = document.querySelector(".info-modal");
const closeInfoButton = infoModal.querySelector(".close-info");
const wordTypeButtons = infoModal.querySelector(".word-type-buttons");
const prefixList = infoModal.querySelector(".prefix-list");
const suffixList = infoModal.querySelector(".suffix-list");

// Define prefixes and suffixes
const prefixes = {
    Noun: ["anti-", "auto-", "bi-", "co-", "de-", "dis-", "ex-", "extra-", "in-", "inter-", "mid-", "mis-", "non-", "over-", "pre-", "pro-", "re-", "semi-", "sub-", "super-", "trans-", "un-", "under-"],
    Verb: ["anti-", "auto-", "co-", "de-", "dis-", "en-", "ex-", "in-", "inter-", "mis-", "pre-", "re-", "un-", "under-"],
    Adjective: ["anti-", "auto-", "bi-", "co-", "de-", "dis-", "extra-", "in-", "inter-", "mis-", "non-", "over-", "pre-", "re-", "semi-", "super-", "trans-", "un-"],
    Adverb: ["anti-", "auto-", "bi-", "co-", "de-", "dis-", "extra-", "in-", "inter-", "mis-", "non-", "over-", "pre-", "re-", "semi-", "super-", "trans-", "un-"]
};

const suffixes = {
    Noun: ["-able", "-al", "-ance", "-ant", "-ary", "-dom", "-er", "-est", "-hood", "-ing", "-ion", "-ism", "-ist", "-ity", "-ment", "-ness", "-or", "-ship", "-tion", "-ty", "-ure"],
    Verb: ["-ate", "-ed", "-en", "-ify", "-ing", "-ize", "-ise"],
    Adjective: ["-able", "-al", "-an", "-ary", "-ful", "-ic", "-ish", "-ive", "-less", "-ly", "-ous", "-y"],
    Adverb: ["-ably", "-edly", "-ily", "-ly", "-ward", "-wise"]
};

// Function to display prefixes and suffixes
const showPrefixSuffix = (type) => {
    prefixList.innerText = prefixes[type].join(", ");
    suffixList.innerText = suffixes[type].join(", ");
}

// Event listener for info button
infoButton.addEventListener("click", () => {
    infoModal.classList.add("show");
});

// Event listener for close button
closeInfoButton.addEventListener("click", () => {
    infoModal.classList.remove("show");
});

// Event listeners for word type buttons
wordTypeButtons.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", (e) => {
        showPrefixSuffix(e.target.dataset.type);
    });
});
