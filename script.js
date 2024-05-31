const work = document.querySelector("#work");
const shortBreak = document.querySelector("#short");
const longBreak = document.querySelector("#long");
const countDown = document.querySelector("#timer");
const workTime = document.querySelector("#workTime");
const shortTime = document.querySelector("#shortTime");
const longTime = document.querySelector("#longTime");


work.addEventListener("click", function() {
    document.body.style.backgroundColor = "#db6a51";
    workTime.style.color = "#db6a51";
    shortTime.style.color = "#db6a51";
    longTime.style.color = "#db6a51";
    countDown.textContent = "25:00";
    stopTimer();
    document.querySelector("#audio").pause();
})

shortBreak.addEventListener("click", function() {
    document.body.style.backgroundColor = "#639488";
    workTime.style.color = "#639488";
    shortTime.style.color = "#639488";
    longTime.style.color = "#639488";
    countDown.textContent = "5:00";
    stopTimer();
    document.querySelector("#audio").pause();
})

longBreak.addEventListener("click", function() {
    document.body.style.backgroundColor = "#6176a4";
    workTime.style.color = "#6176a4";
    shortTime.style.color = "#6176a4";
    longTime.style.color = "#6176a4";
    countDown.textContent = "15:00";
    stopTimer();
    document.querySelector("#audio").pause();
})

let timer;
let amountTime = timer * 60;
let timerID;

function calculateTime() {
    const countDown = document.querySelector("#timer");
    
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    countDown.textContent = `${minutes}:${seconds}`;
    amountTime --;
    
    if (amountTime < 0) {
        stopTimer();
        amountTime = 0;
        document.querySelector("#audio").play();
    }
}

function stopTimer() {
    clearInterval(timerID);
}

function startTimer(time) {
    stopTimer();
    timer = time;
    amountTime = timer * 60;
    timerID = setInterval(calculateTime, 1000);
}

workTime.addEventListener("click", () => startTimer(25));
shortTime.addEventListener("click",() => startTimer(5));
longTime.addEventListener("click",() => startTimer(15));







