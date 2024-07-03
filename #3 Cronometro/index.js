// Função que coloca 0 antes do número caso seja menor que 10;
function formatNumber(number) {
  return number < 10 ? '0' + number : number;
}
// Declaração dos elementos html usados.
const divTimer = document.querySelector('.panel__timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
// Declaração dos 3 parametros necessário para o cronômetro
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;
let test;

function updateTimerDisplay() {
  const formattedTime = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
  divTimer.textContent = formattedTime;
}

function startTimer() {
  clearInterval(interval);

  interval = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimerDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);