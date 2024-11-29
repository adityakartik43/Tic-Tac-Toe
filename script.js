let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winner = document.querySelector("#winner");

let turn = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    if (turn == true) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        console.log("Winner");
        showWinner(pos1Val);
      }
    }
  }
};

const showWinner = (winner) => {
    winner.innerText = `Congrats, Winner is ${winner}`;
}