const cells = document.querySelectorAll(".cell");
const status = document.querySelector("#status");
const restart = document.querySelector("#restart");

const winningCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let CurrentPlayer;

let option = ["", "", "", "", "", "", "", "", ""];
let running = false;

startGame();
cells.forEach((a, b) => {
  a.addEventListener("click", CellClicked);
});
restart.addEventListener("click", restartGame);


function startGame() {
    // option = ["", "", "", "", "", "", "", "", ""];
    CurrentPlayer = "X";
    
    running = true;
    status.textContent = `ITS ${CurrentPlayer}'s TURN`;
}

function CellClicked() { 

    if (running) {
        const cell = event.target.getAttribute("cellIndex");
        if (cells[cell].textContent == "" && running) {
          updateCell(cell);
        }
    }
    
    
}        

function updateCell(cell) {
    option[cell] = CurrentPlayer;
    cells[cell].textContent = CurrentPlayer;
    CurrentPlayer = CurrentPlayer == "X" ? "O" : "X";
    status.textContent = `ITS ${CurrentPlayer}'s TURN`;
    
    checkWinner();
}

function checkWinner() {
    console.log(option);
    for (let arr of winningCases) {
        if (
          option[arr[0]] != "" &&
          option[arr[0]] == option[arr[1]] &&
          option[arr[1]] == option[arr[2]]
        ) {
          running = false;
            status.textContent = `${option[arr[0]]} IS THE WINNER`;
            return;
        }
    }

    
    for (let x of option) {
        if (x == "") {
            return;
        }
    }
    status.textContent = `GAME OVER ITS A TIE`;
    running = false;


    
}


function restartGame() {

    option = ["", "", "", "", "", "", "", "", ""];
    for (let i = 0; i < 9; i++){
        cells[i].textContent = "";
    }
    startGame();
}
