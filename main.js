let PlayerName = document.getElementById("player-name");

/*

// Display name on page 2
let PName = document.getElementById("p-name");
if(PName){
  let savedName = localStorage.getItem("name");
  PName.textContent = "Player name: " + savedName;
}
 */
//    PlayerName.placeholder = "Please enter your name ! ";

function checkPlayerName() {
  if (PlayerName.value == "") {
    return false;
  } else {
    return true;
  }
}

function launch_game() {
  if (!checkPlayerName()) {
    PlayerName.placeholder = "Please enter your name ! ";
    PlayerName.style.border = "1px solid red";
    return false; // stay at welcome page
  } else {
    localStorage.setItem("playername", PlayerName.value);
    window.location.href = "game.html"; // go to game.html
  }
}
