/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

/* const winning4combos = [ 
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [0,5,10,15],
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [3,6,9,12],
] 
/*---------------------------- Variables (state) ----------------------------*/
let board = [
  "", "", "",
  "", "", "",
  "", "", "",
] // Keeps track of the board state
let turn = "X"
let winner = false //to check who won the game its false since it just started
let tie = false //again the tie is set to false since the game just started it cant be a tie

let f4board = [
  "", "", "", "",
  "", "", "", "",
  "", "", "", "",
  "", "", "", "",
]
/*------------------------ Cached Element References ------------------------*/
const sqrElem = document.querySelectorAll(".sqr") //select elements from the class square
const msgElem = document.querySelector("#message") //select elements with id message (win or tie)
const resetBtnElem = document.querySelector('#reset') //selectin it so u can restart
/*-------------------------------- Functions --------------------------------*/
function init(){
  board = [
    "", "", "",
    "", "", "",
    "", "", "",
  ]
  turn = "X"
  winner = false
  tie = false
  render()
} //This function starts or resets the game

function render(){
  updateBoard()
  updateMessage()
} 

// Updates the square contents based on the board array
function updateBoard(){
  board.forEach((elem, index) => {
    sqrElem[index].textContent = elem
    if (board[index] === ''){
      sqrElem[index].style.backgroundColor = ''
      msgElem.style.color = ''
    }
  })
}
// Updates the square contents based on the board array
function updateMessage(){
  if (winner === false && tie === false){
    msgElem.textContent = `It's ${turn}'s turn`
  } else if (winner === false && tie === true){
    msgElem.textContent = `It's tie!`
    msgElem.style.color = ''
  } else if (winner === true) {
    msgElem.textContent = `${turn} wins!`
    msgElem.style.color = 'yellow'
  }
}

// Runs when a player clicks a square

function handleClick(event){
  const sqrIndex = event.target.id
  if (board[sqrIndex] || winner === true){
    return
  }

  // Places an "X" or "O" on the board

  placePiece(sqrIndex)
  checkForWinner()
  checkForTie()
  switchPlayerTurn()
  if (board[sqrIndex] === 'X'){
      event.target.style.backgroundColor = '#702246ff'
      console.log('hi')
    } else if (board[sqrIndex] === 'O'){
      event.target.style.backgroundColor = '#89621fff'
    }
  render()
}
//put x or o
function placePiece(index){
  board[index] = turn  
}
// Checks if there is a winner using winningCombos
function checkForWinner(){ 
  for (let i = 0; i < 8; i++){
    let combo = winningCombos[i]
    let a = board[combo[0]]
    let b = board[combo[1]]
    let c = board[combo[2]]
    if (a !== '' && a === b && a === c){
      winner = true
    }
  }
}

function checkForTie(){
  for (let i = 0; i < 9; i++)
    if (winner === true){
      return
    } else if (board[i] === ''){
      tie = false
      return
    } else {
      tie = true
    } //baiscally saying if the board is full it cant be a tie 
}

function switchPlayerTurn(){
  if (winner === true){
    return
  } else if (winner === false && turn === 'X'){
    turn = 'O'
  } else if (turn === 'O'){
    turn = 'X'
  }
}
/*----------------------------- Event Listeners ----------------------------*/
// Adds click events to each square
for (let i = 0;  i < 9; i++){
  sqrElem[i].addEventListener('click', handleClick)
}

resetBtnElem.addEventListener('click', init)
  
document.add

//this part for the 4x4

function f4updateBoard(){
  board.forEach((elem, index) => {
    sqrElem[index].textContent = elem
    if (f4board[index] === ''){
      sqrElem[index].style.backgroundColor = ''
      msgElem.style.color = ''
      //if msgElem.style.color = '#946927ff'
      //if msgElem.style.color = '#702246ff'
    }
  })
}

function f4handleClick(event){
  const sqrIndex = event.target.id
  if (f4board[sqrIndex] || winner === true){
    return
  }
  f4placePiece(sqrIndex)
  checkForWinner()
  checkForTie()
  switchPlayerTurn()
  if (f4board[sqrIndex] === 'X'){
      event.target.style.backgroundColor = '#702246ff'
      console.log('hi')
    } else if (f4board[sqrIndex] === 'O'){
      event.target.style.backgroundColor = '#89621fff'
    }
  render()
}

function f4placePiece(index){
  f4board[index] = turn  
}

function f4checkForWinner(){ 
  for (let i = 0; i < 16; i++){
    let combo = winningCombos[i]
    let a = f4board[combo[0]]
    let b = f4board[combo[1]]
    let c = f4board[combo[2]]
    let d = f4board[combo[3]]
    if (a !== '' && a === b && a === c && a == d){
      winner = true
    }
  }
}
function f4checkForTie(){
  for (let i = 0; i < 16; i++)
    if (winner === true){
      return
    } else if (f4board[i] === ''){
      tie = false
      return
    } else {
      tie = true
    } //baiscally saying if the board is full it cant be a tie 
}

for (let i = 0;  i < 16; i++){
  sqrElem[i].addEventListener('click', handleClick)
}

resetBtnElem.addEventListener('click', init)
  
document.add
