let hS = document.createElement("h2");
let gameSeq = [];
let userSeq = [];
let highScore = 0;
let btns = ["one", "two", "three", "four"];

let h2 = document.querySelector("h2");
let startGame = false;
let level = 0;

function NewGame() {
  if (startGame == false) {
    console.log("game is started");
    startGame = true;
    levelUp();
  }
}
document.addEventListener("keypress", NewGame);

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randomIndex = Math.floor(Math.random() * btns.length);
  let randomBox = btns[randomIndex];
  let randomBtn = document.querySelector(`.${randomBox}`);
  btnFlash(randomBtn);
  gameSeq.push(randomBtn.getAttribute("id"));
  console.log(gameSeq);
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function UserBtnPress(btn) {
  btn.classList.add("clickFlash");
  setTimeout(function () {
    btn.classList.remove("clickFlash");
  }, 150);
}

function btnPress() {
  let btn = this;
  UserBtnPress(btn);
  userColor = btn.getAttribute("id");

  userSeq.push(userColor);
  console.log(userSeq);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    h2.innerHTML = `Game Over! Your Score was <b>${level}</b><br />Press any key to Start`;
    if (highScore <= level) {
      highScore = level;
    }

    hS.innerHTML = `High-Score is ${highScore}`;

    document.querySelector("body").style.backgroundColor = "#ff0000";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "#fff";
    }, 150);
    document.addEventListener("keypress", restart);
  }
}

document.querySelector("body").appendChild(hS);
function restart() {
  userSeq = [];
  gameSeq = [];
  startGame = false;
  level = 0;
  // document.addEventListener("keypress", NewGame);
  NewGame();
}
