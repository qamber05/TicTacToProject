//1) Define the required variables used to track the state of the game.
let board;
let turn;
let winner;
let tie;

//2) Store cached element references.

const squareEls = document.querySelectorAll('.sqr')
const messageEls = document.querySelector('.board')

console.log("square:",squareEls)
console.log("message:", messageEls)

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.
function startGame() {
    console.log("the game is rendering")
}

startGame()

board = ['','','','','','','','','',''];
turn = 'X';
winners = false;
tie= false;
function render() {

}

//4) The state of the game should be rendered to the user.
function updateBoard() {
  board.forEach((cell, index) => {
    squareEls[index].textContent = cell;
  });
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.textContent = `It's ${turn}'s turn!`;
  } else if (winner === false && tie === true) {
    messageEl.textContent = "It's a tie!";
  } else {
    messageEl.textContent = `Congratulations, ${turn} wins!`;
  }
}

function render() {
  updateBoard();
  updateMessage();
}


//5) Define the required constants.


const winningCombos = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal from top-left to bottom-right
  [2, 4, 6]  // diagonal from top-right to bottom-left
];

//6) Handle a player clicking a square with a `handleClick` function.

function handleClick(Event) {
  const squareIndex = parseInt(event.target.id);
  if (board[squareIndex] !== '' || winner) return;

  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

function placePiece(index) {
  board[index] = turn;       // Set board at the given index to 'X' or 'O'
  console.log(board);        // Show the updated board in the console (for testing)
}

function checkForWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    const combo = winningCombos[i];
    const a = combo[0];
    const b = combo[1];
    const c = combo[2];

    if (
      board[a] !== '' &&      // first spot not empty
      board[a] === board[b] && // first spot equals second spot
      board[a] === board[c]    // first spot equals third spot
    ) {
      winner = true;
      return; // stop checking after finding a winner
    }
  }
  winner = false; // no winner found
}

function checkForTie() {
  if (winner) return;  // If someone already won, no tie possible
  
  // Check if the board has any empty spots
  if (!board.includes('')) {
    tie = true;  // No empty spots and no winner means it's a tie
  } else {
    tie = false; // There are still empty spots, no tie yet
  }
  
  console.log('Tie?', tie); // For testing — remove later
}

 function switchPlayerTurn() {
  if (winner) return;
  turn = turn === 'X' ? 'O' : 'X';
  console.log('Turn:', turn); // for testing, remove later
}

squareEls.forEach(square => {
  square.addEventListener('click', handleClick);
});


//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/


