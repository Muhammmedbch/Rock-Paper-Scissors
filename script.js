let playername = localStorage.getItem("playername");
let playerspan = document.getElementById("player-span");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const computer_image = document.getElementById("c_choice");
let result_text = document.getElementById("result-text");
let result_detail = document.querySelector("#result span");

let playerScoreElem = document.querySelector("#score-div h2:first-child span:last-child");
let computerScoreElem = document.querySelector("#score-div h2:last-child span");
let actionButtons = document.querySelectorAll("#butts button");
let resetBtn = actionButtons[1];
let playBtn = actionButtons[0];

let pScore = 0;
let cScore = 0;

if(playername) {
    playerspan.innerText = playername;
} else {
    playerspan.innerText = "Player";
}

let u_choices = [rock, paper, scissor];
let c_choices_images = ["rock.svg", "paper.svg", "scissor.svg"];

u_choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        DecideWinner(choice.id);
    });
});

resetBtn.addEventListener("click", ResetGame);
playBtn.addEventListener("click", () => {
    location.reload();
});

function GetRandomIndex() {
    return Math.floor(Math.random() * 3);
}

function GetandSetComputerChoice() {
    let index = GetRandomIndex();
    let choice_value = "";

    if (index === 0) {
        choice_value = "rock";
        computer_image.setAttribute("src", c_choices_images[0]);
    } else if (index === 1) {
        choice_value = "paper";
        computer_image.setAttribute("src", c_choices_images[1]);
    } else {
        choice_value = "scissor";
        computer_image.setAttribute("src", c_choices_images[2]);
    }
    return choice_value;
}

function DecideWinner(user_choice) {
    if (!user_choice) return; 

    let computer_choice = GetandSetComputerChoice();

    if (user_choice === computer_choice) {
        result_text.innerText = "Draw";
        result_text.style.color = "#808080";
        result_detail.innerText = "You both chose " + user_choice;
    } else if (
        (user_choice === "rock" && computer_choice === "scissor") ||
        (user_choice === "paper" && computer_choice === "rock") ||
        (user_choice === "scissor" && computer_choice === "paper")
    ) {
        result_text.innerText = "You Win!";
        result_text.style.color = "#1f8cff";
        result_detail.innerText = user_choice + " beats " + computer_choice;
        UpdateScore("player");
    } else {
        result_text.innerText = "Computer Wins!";
        result_text.style.color = "red";
        result_detail.innerText = computer_choice + " beats " + user_choice;
        UpdateScore("computer");
    }
}

function UpdateScore(winner) {
    if (winner === "player") {
        pScore++;
        playerScoreElem.innerText = pScore;
    } else if (winner === "computer") {
        cScore++;
        computerScoreElem.innerText = cScore;
    }
}

function ResetGame() {
    pScore = 0;
    cScore = 0;
    playerScoreElem.innerText = 0;
    computerScoreElem.innerText = 0;
    result_text.innerText = "Result";
    result_text.style.color = "#1f8cff";
    result_detail.innerText = "Result details";
    computer_image.setAttribute("src", "robot.svg");
}