let startTime = 0;
let stopTime = null;
let timeOut = null;
let running = false;

function startTimer() {
    if (!running) {
        startTime = Date.now();
        stopTime = null;
        timeOut = setInterval(updateTimer, 50);
        running = true;
    }
}

function stopTimer() {
    if (running) {
        stopTime = Date.now();
        window.clearInterval(timeOut);
        running = false;
    }
}

function resumeTimer() {
    if (!running) {
        if (stopTime != null) {
            startTime += (Date.now() - stopTime);
            stopTime = null;
        }
        timeOut = setInterval(updateTimer, 50);
        running = true;
    }
}

function resetTimer() {
    startTime = Date.now();
    stopTime = null;
    updateTimer();
}

function setTime(minutes, seconds, milliseconds) {
    document.getElementById("timer").innerText = "Timer: " +
        twoDigits(minutes) + ":" +
        twoDigits(seconds) + ":" +
        twoDigits(milliseconds);
}

function updateTimer() {
    let ms = Date.now() - startTime;
    let minutes = parseInt(Math.floor(ms / 60 / 1000));
    ms -= minutes * 60 * 1000;
    let seconds = parseInt(Math.floor(ms / 1000));
    ms -= seconds * 1000;
    let millis = parseInt(Math.floor(ms / 10));
    setTime(minutes, seconds, millis);
}

function twoDigits(number) {
    if (number < 10) {
        return "0" + number;
    } else {
        return "" + number;
    }
}