let startTime;
let interval;
let running = false;

function startStop() {
  if (!running) {
    startTime = new Date().getTime();
    interval = setInterval(updateDisplay, 10);
    document.getElementById("startStop").textContent = "Stop";
  } else {
    clearInterval(interval);
    document.getElementById("startStop").textContent = "Start";
  }
  running = !running;
}

function updateDisplay() {
  let currentTime = new Date().getTime();
  let elapsedTime = currentTime - startTime;
  let formattedTime = formatTime(elapsedTime);
  document.getElementById("display").textContent = formattedTime;
}

function formatTime(milliseconds) {
  let hours = Math.floor(milliseconds / 3600000);
  let minutes = Math.floor((milliseconds % 3600000) / 60000);
  let seconds = Math.floor((milliseconds % 60000) / 1000);
  let centiseconds = Math.floor((milliseconds % 1000) / 10);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}

function reset() {
  clearInterval(interval);
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStop").textContent = "Start";
  running = false;
}

function lap() {
  let lapTime = document.getElementById("display").textContent;
  let lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  document.getElementById("laps").appendChild(lapItem);
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);
