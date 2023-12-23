var daysEl = document.getElementById("days");
var hoursEl = document.getElementById("hours");
var mintsEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");

var newYears = "1 Jan 2024";

function countdown() {
  var newYearDate = new Date(newYears);
  var currentDate = new Date();

  var totalSeconds = (newYearDate - currentDate) / 1000;

  var days = Math.floor(totalSeconds / 3600 / 24);
  var hours = Math.floor(totalSeconds / 3600) % 24;
  var minutes = Math.floor(totalSeconds / 60) % 60;
  var seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  mintsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
