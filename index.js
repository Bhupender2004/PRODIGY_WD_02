let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

// Display elements
const display = document.getElementById('display');
const laps = document.getElementById('laps');

function timeToString(time) {
    let date = new Date(time);
    let hours = date.getUTCHours().toString().padStart(2, '0');
    let minutes = date.getUTCMinutes().toString().padStart(2, '0');
    let seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function startStop() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 1000);
        document.getElementById('startStopBtn').textContent = 'Pause';
        running = true;
    } else {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
        document.getElementById('startStopBtn').textContent = 'Start';
        running = false;
    }
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
}

function reset() {
    clearInterval(timerInterval);
    display.textContent = '00:00:00';
    elapsedTime = 0;
    running = false;
    document.getElementById('startStopBtn').textContent = 'Start';
    laps.innerHTML = '';
}

function lap() {
    if (running) {
        let lapTime = timeToString(elapsedTime);
        let li = document.createElement('li');
        li.textContent = `Lap: ${lapTime}`;
        laps.appendChild(li);
    }
}
