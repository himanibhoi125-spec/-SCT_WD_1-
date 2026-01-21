let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusText = document.getElementById("status");
const cells = document.getElementsByClassName("cell");

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function makeMove(index) {
    if (board[index] !== "" || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    cells[index].innerText = currentPlayer;

    checkWinner();
}

function checkWinner() {
    for (let condition of winConditions) {
        let a = condition[0];
        let b = condition[1];
        let c = condition[2];

        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            statusText.innerText = `Player ${currentPlayer} Wins!`;
            gameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        statusText.innerText = "Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerText = `Player ${currentPlayer} Turn`;
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    statusText.innerText = "Player X Turn";

    for (let cell of cells) {
        cell.innerText = "";
    }
}