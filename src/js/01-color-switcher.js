const body = document.querySelector('body');
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let interval = null; 
stopBtn.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  startBtn.addEventListener("click", () => {
    interval = setInterval( ()=> {
        body.style.backgroundColor = getRandomHexColor();
        }, 1000 );
        startBtn.disabled = true;
        stopBtn.disabled = false;
  })

  stopBtn.addEventListener("click", () => {
    clearTimeout(interval);
    startBtn.disabled = false;
        stopBtn.disabled = true;
  })
