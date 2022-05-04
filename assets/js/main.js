// Array to Get Random  Computer Choise 
const gameArray = ["paper", "scissors", "rock"];

let rulesMsg = document.querySelector(".rules-msg"); // select rules-msg element
let rulesMsgOverlay = document.querySelector(".overlay");
let closeBtn = document.querySelector(".close");
let rulesMsgBtn = document.querySelector(".rules-btn");
let step1 = document.querySelector(".step-1");
let gameBtns = document.querySelectorAll(".step-1 div");
let score = document.querySelector(".score h3");
let step2 = document.querySelector(".step-2");
let stepTwoUser = document.querySelector(".step-2 .user");
let stepTwoComputer = document.querySelector(".step-2 .computer");
let resultParent = document.querySelector(".result");
let result = document.querySelector(".result h3");
let playAginBtn = document.querySelector(".result button");
let sectionBtns = document.querySelector(".step-2 .computer section");
let btn1 = document.querySelector(".step-2 .computer section .paper");
let btn2 = document.querySelector(".step-2 .computer section .scissors");
let btn3 = document.querySelector(".step-2 .computer section .rock");

window.onload = function () {
  rulesMsg.classList.add("show-rules");
  rulesMsgOverlay.style.display = "block";
};

closeBtn.onclick = function () {
  rulesMsg.classList.remove("show-rules");
  rulesMsgOverlay.style.display = "none";
};

rulesMsgBtn.onclick = function () {
  rulesMsg.classList.add("show-rules");
  rulesMsgOverlay.style.display = "block";
};

gameBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if(e.target == e.currentTarget) {
      console.log("not this")
    }

    let userChiocesClass = e.currentTarget.getAttribute("class");
    let randomNumber = Math.floor(Math.random() * gameArray.length);
    let compChoice = gameBtns[randomNumber].cloneNode(true);
    let userChioces = e.currentTarget.cloneNode(true);
    let gameScore = Number(score.textContent);

      if (
        (userChiocesClass == "paper" && gameArray[randomNumber] == "rock") ||
        (userChiocesClass == "rock" && gameArray[randomNumber] == "scissors") ||
        (userChiocesClass == "scissors" && gameArray[randomNumber] == "paper")
      ) {

        handleWinAndLose("YOU WIN", "win", userChioces, gameScore);

      } 
      else if (userChiocesClass === gameArray[randomNumber]) {

        handleWinAndLose("TRY AGAIN", "no one win", userChioces, gameScore);

      } 
      else if (
        (gameArray[randomNumber] == "paper" && userChiocesClass == "rock") ||
        (gameArray[randomNumber] == "rock" && userChiocesClass == "scissors") ||
        (gameArray[randomNumber] == "scissors" && userChiocesClass == "paper")
      ){

        handleWinAndLose("YOU LOSE", "you lose", compChoice, gameScore);

      }

      step1.style.display = "none";
      step2.style.display = "flex";

      setTimeout(function () {

        stepTwoComputer.appendChild(compChoice);

      }, 3000);


    stepTwoUser.appendChild(userChioces);
    score.innerHTML = gameScore;
    setTimeout(function () {
    btn1.classList.add("show");
    },500)

    setTimeout(function () {
    btn2.classList.add("show");
  },1200)
  
  setTimeout(function () {
    btn3.classList.add("show");
  },1700)

  setTimeout(function () {
    sectionBtns.remove();
      stepTwoComputer.style.overflow = "unset"
    },2950)

  }, true);
});


playAginBtn.onclick = () => {
  location.reload();
};

function handleWinAndLose(message, resultgame, winChoice, gameScore) {
  
  setTimeout(function () {
    result.innerHTML = message;
    
    resultParent.classList.add("show-result");
    
    let span = document.createElement("span");
    span.className = "win";

    if (resultgame == "win") {
      ++gameScore;
      score.innerHTML = gameScore;
      
      winChoice.appendChild(span);
      
    } else if (resultgame == "you lose") {
      --gameScore;
      score.innerHTML = gameScore;

      winChoice.appendChild(span);
    }
    localStorage.setItem("score", gameScore);
    
  }, 3000);
}

let storageScore = localStorage.getItem("score");

if (storageScore != null) {
  score.innerHTML = storageScore;
}