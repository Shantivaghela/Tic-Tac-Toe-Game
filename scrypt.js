let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#btn1");
let playAgainBtn = document.querySelector("#btn2");
let winnerIs = document.getElementById("#win");
let winner = document.querySelector(".winner");
let preMsg = document.querySelector(".preMessage");
let count = 0;
let turnO = true;

preMsg.classList.remove("hide");
const winCodes = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    preMsg.classList.remove("hide");
    enavbleBtns();
}
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turnO) {
            btn.innerText = "O";
            turnO = false;
            btn.style.color = "blue";
        } else {
            btn.innerText = "X";
            turnO = true;
            btn.style.color = "red";
        }
        btn.disabled = true;
        let isWinner = checkWinner();
        if (count === 9 && isWinner != true) {
            var audioDrow = new Audio('sounds/drow.mp3');
            audioDrow.play();
            setTimeout(drow,300);
      
        }
        moveSound();
       
    });

});

const disableBtns = () => {
    for (let btn of btns) {
        btn.disabled = true;

    }
}
const moveSound = () => {
    var audio = new Audio('sounds/ClickSound.mp3');
    audio.play();

}
const drowSound =() =>{
    var audio = new Audio('sounds/drow.mp3');
    audio.play();
}

const enavbleBtns = () => {
    for (let btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
        winner.classList.add("hide");
        count = 0;


    }
    playAgainBtn.addEventListener("click", () => {
        var audio = new Audio('sounds/replay.mp3');
        audio.play();
    });
}
const winMsg = (winnerName) => {
    winnerIs.innerText = `Winner is : ${winnerName}`;
    winner.classList.remove("hide");
    preMsg.classList.add("hide");
    var audio = new Audio('sounds/win.mp3');
    audio.play();
    Brring();
}
const checkWinner = () => {
    count++;
    for (let val of winCodes) {
        let pos1 = btns[val[0]].innerText;
        let pos2 = btns[val[1]].innerText;
        let pos3 = btns[val[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                winMsg(pos1);
                disableBtns();
                return true;
            }

        }

    }
}

resetBtn.addEventListener("click", resetGame);
playAgainBtn.addEventListener("click", resetGame);

const drow = () => {
 if (confirm("This match is drow do you play again!!")) {
        for (let btn of btns) {
            btn.disabled = false;
            btn.innerText = "";
            turnO = true;
            count = 0;
        }
    }
}
//For confetti........
const Brring = () =>{
var countf = 300;
var defaults = {
  origin: { y: 0.7 }
};
function fire(particleRatio, opts) {
  confetti({
    spread: 360,
    scalar: 1.5,
    ...defaults,
    ...opts,
    particleCount: Math.floor(countf * particleRatio)
  });
}

fire(0.25, {
  spread: 100,
  startVelocity: 55,
});
fire(0.2, {
  spread: 200,
});
fire(0.35, {
  spread: 250,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 270,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 270,
  startVelocity: 45,
});
}