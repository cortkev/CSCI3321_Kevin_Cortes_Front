var currentPlayer = 'X';
var currentBoardPositions = [];

function placeMarker() {
   var status = document.getElementById('status')
  var squareId = event.currentTarget.id //get the position of the box that was clicked by the id

  if (currentBoardPositions.includes(squareId)) {
    //do nothing if player select a spot that is taken
  }
  else {
    event.currentTarget.innerText = currentPlayer;//places the player's mark in the target that was clicked
    currentBoardPositions.push(squareId);//add the boxId to the array after selecting it
    //checks if there is a winner
    if (currentPlayerWon()) {
      status.innerHTML = "Player " + currentPlayer + " won!"
      resetBoard();//reset the game if there is a winner
    }
    else {
        //checks if the array is 9 which mean all boxes are marked and no winner
      if (currentBoardPositions.length == 9) {
        status.innerHTML = "Game is a Tie"
        resetBoard();
      }
      //switch player after a move
      else {
        if (currentPlayer == 'X') {
          currentPlayer = 'O';
          status.innerText = "Player O's turn"
          
        }
        else {
          currentPlayer = 'X';
          status.innerHTML = "Player X's turn"
        }
      }
    }
  }
}
//reset the board and the array
function resetBoard() {
  currentBoardPositions = [];
  document.getElementById('s1').innerText = '';
  document.getElementById('s2').innerText = '';
  document.getElementById('s3').innerText = '';
  document.getElementById('s4').innerText = '';
  document.getElementById('s5').innerText = '';
  document.getElementById('s6').innerText = '';
  document.getElementById('s7').innerText = '';
  document.getElementById('s8').innerText = '';
  document.getElementById('s9').innerText = '';
}
//chech to see if there is a winner
function currentPlayerWon(){
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');
    var s3 = document.getElementById('s3');
    var s4 = document.getElementById('s4');
    var s5 = document.getElementById('s5');
    var s6 = document.getElementById('s6');
    var s7 = document.getElementById('s7');
    var s8 = document.getElementById('s8');
    var s9 = document.getElementById('s9');

    //chech the column, the rows and diagonally if there are any winner for that player and return true
    if(s1.innerText === s2.innerText && s2.innerText == s3.innerText && s1.innerText === currentPlayer){
        return true;
    }
    else if(s4.innerText === s5.innerText && s5.innerText== s6.innerText && s4.innerText === currentPlayer){
      return true;
    }
    else if(s7.innerText === s8.innerText && s8.innerText == s9.innerText && s7.innerText === currentPlayer){
      return true;
    }
    else if(s1.innerText === s5.innerText && s5.innerText == s9.innerText && s1.innerText === currentPlayer){
      return true;
    }
    else if(s3.innerText === s5.innerText && s5.innerText == s7.innerText && s3.innerText === currentPlayer){
      return true;
    }
    else if(s1.innerText === s4.innerText && s4.innerText == s7.innerText && s1.innerText === currentPlayer){
      return true;
    }
    else if(s2.innerText === s5.innerText && s5.innerText == s8.innerText && s2.innerText === currentPlayer){
      return true;
    }
    else if(s3.innerText === s6.innerText && s6.innerText == s9.innerText && s3.innerText === currentPlayer){
      return true;
    }
    //no winner return false
    else {
      return false;
    }
}