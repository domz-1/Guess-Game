
# Guess The Word Game

## Live Demo

Check out the live demo of the Guess Game:  
[Guess The Word Live Demo](https://domz-guess-game.netlify.app/)

## Features

- A fun word-guessing game where the player has 5 attempts to guess a 5-letter word.
- Players can guess one letter at a time in each row.
- Visual feedback provided with colors:
  - **Green**: Correct letter in the correct position.
  - **Orange**: Correct letter but in the wrong position.
  - **Red**: The letter is not in the word.
  
## How to Play

1. Start by typing the first letter of your guess in the first input box.
2. Continue guessing the word, one letter at a time, across the 5 rows.
3. After each attempt, the letters will change color based on how close the guess was:
   - **Green** means the letter is correct and in the right position.
   - **Orange** means the letter is correct but in the wrong position.
   - **Red** means the letter is not in the word at all.
4. If you guess the word before all attempts are used, you win!

## Technologies Used

- **HTML**: For the structure of the game interface.
- **CSS**: For styling and the visual feedback based on the color of guessed letters.
- **JavaScript**: For game logic, handling user inputs, and dynamically updating the game state.
- **Font Awesome**: For icons (via CDN).

## Project Structure

```
|-- index.html      # Main HTML file for the structure of the page
|-- style.css       # CSS file for styling the webpage
|-- main.js         # JavaScript file for game functionality
```

## How to Use

1. Click "Switch Word" to start a new game with a different word.
2. Enter your guesses by typing one letter in each box.
3. After entering 5 letters, the game will give feedback based on your guess.
4. Try to guess the word within 5 attempts!

---

You can adjust this README as needed for your project!
