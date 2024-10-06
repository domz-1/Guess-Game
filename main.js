const fiveLetterWords = [
    "apple", "beach", "candy", "dance", "eagle", "flame", "globe", "horse", 
    "index", "jelly", "knife", "lemon", "magic", "noble", "ocean", "piano", 
    "queen", "river", "stone", "tiger", "ultra", "vivid", "whale", "xenon", 
    "yacht", "zebra", "brain", "chess", "dream", "frank", "grape", "house", 
    "irony", "jolly", "kiosk", "laser", "mango", "night", "olive", "pearl", 
    "quick", "rusty", "smart", "trust", "unite", "value", "witty", "zonal"
];

// Selecting all relevant DOM elements
const tryOneAllInput = document.querySelectorAll('.try-1 input');
const tryTwoAllInput = document.querySelectorAll('.try-2 input');
const tryThreeAllInput = document.querySelectorAll('.try-3 input');
const tryFourAllInput = document.querySelectorAll('.try-4 input');
const tryFiveAllInput = document.querySelectorAll('.try-5 input');
const allTriesInputs = document.querySelectorAll('.row input');
const lastInput = tryFiveAllInput[4];
const attempts = document.querySelectorAll('.game p span')[0];
const switchBtn = document.querySelector('.main-container button');

// Initialize the word
let wantedWord = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
let ltrs = [...wantedWord.toLowerCase()];
console.log(ltrs); // Debugging

// Adding event listeners to each input
for (let i = 0; i < allTriesInputs.length; i++) {
    allTriesInputs[i].addEventListener('input', function() {
        let letter = this.value.toLowerCase();
        let index = i % 5;

        // Checking the letter against the word
        if (letter === ltrs[index]) {
            this.style.backgroundColor = '#06113C';
            this.style.color = 'white';
            this.disabled = true;
        } else if (ltrs.includes(letter)) {
            this.style.backgroundColor = '#FF8C32';
            this.style.color = 'white';
            this.disabled = true;
        } else {
            this.style.backgroundColor = '#DDDDDD';
            this.style.color = 'gray';
        }

        // Move to the next input box
        if (i + 1 < allTriesInputs.length) {
            allTriesInputs[i + 1].removeAttribute("disabled");
            allTriesInputs[i + 1].focus();
        }

        // Check for win after each input
        checkWin();
    });
}

// Function to decrease attempts
function decreaseAttempts() {
    attempts.textContent = parseInt(attempts.textContent) - 1;
    if (parseInt(attempts.textContent) === 0) {
        showWord();
        startOver();
    }
}

// Function to display the word if needed
function showWord() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const x = document.createElement('button');
    div.append(h1,p,x)
    document.body.append(div);

    h1.innerText = wantedWord;
    p.innerText = "The word was " + wantedWord;
    x.innerText = "Close";



    // Styling and closing functionality
    div.style.cssText = `
        background-color: #698474;
        color: white;
        position: absolute;
        width: 80%;
        height: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-size: 3rem;`
    x.style.cssText =
            `margin-top: 10px;
            font-size: 1.5rem;
            padding: 10px 20px;
            border-radius: 10px;
            border: none;
            outline: none;
            cursor: pointer;
            background-color: #B8001F;
            color: white;
            posstion : absolute;
            top: 0;`
    div.querySelector("button").addEventListener("click", function() {
        div.remove();
    });
}

// Function to reset the game
function startOver() {
    wantedWord = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
    ltrs = [...wantedWord.toLowerCase()];
    console.log("New word: ", ltrs);

    allTriesInputs.forEach(input => {
        input.value = "";
        input.disabled = true;
        input.style.backgroundColor = "white";
        input.style.color = "black";
    });
    allTriesInputs[0].disabled = false;
    allTriesInputs[0].focus();
    attempts.textContent = "5";
}

// Function to handle the winning case
function won() {
const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const x = document.createElement('button');
    div.append(h1,p,x)
    document.body.append(div);
    
    h1.innerText = "Congratulations";
    p.innerText = "you won";
    x.innerText = "Close";

    // Styling and closing functionality
    div.style.cssText = `
        background-color: #698474;
        color: white;
        position: absolute;
        width: 80%;
        height: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-size: 3rem;`
    x.style.cssText =
            `margin-top: 10px;
            font-size: 1.5rem;
            padding: 10px 20px;
            border-radius: 10px;
            border: none;
            outline: none;
            cursor: pointer;
            background-color: #B8001F;
            color: white;
            posstion : absolute;
            top: 0;`
    div.querySelector("button").addEventListener("click", function() {
        div.remove();
    });
}

// Check if any input guess matches the wanted word
function checkWin() {
    const tries = [tryOneAllInput, tryTwoAllInput, tryThreeAllInput, tryFourAllInput, tryFiveAllInput];

    for (const tryInput of tries) {
        const guessedWord = Array.from(tryInput).map(input => input.value).join('').toLowerCase();
        if (guessedWord === wantedWord) {
            console.log("sj");
            won();
            startOver();
            return;
        }
    }
}

// Add event listener to the switch button
switchBtn.addEventListener('click', startOver);

lastInput.addEventListener('input',()=>{
    startOver();
})
// Initialize the game
startOver();