import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
const input = document.getElementById("datetime-picker");
const startBtn = document.querySelector("[data-start]");
const daysx = document.querySelector("[data-days]");
const minutesx = document.querySelector("[data-minutes]");
const hoursx = document.querySelector("[data-hours]");
const secondsx = document.querySelector("[data-seconds]");
let intervalX = null;
startBtn.disabled = true;
let timeback = 0;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0].getTime());
      
      if(Date.now() < selectedDates[0].getTime()) {
        startBtn.disabled = false;
        timeback = selectedDates[0].getTime();
      }
      else {
        Notiflix.Notify.warning('Please choose a date in the future');
        
      }
      
    },
};
function addLeadingZero(value) {
    return String(value).padStart(2, "0");    
}
flatpickr(input, options);
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    hoursx.textContent = addLeadingZero(hours);
    daysx.textContent = addLeadingZero(days);
    minutesx.textContent = addLeadingZero(minutes);
    secondsx.textContent = addLeadingZero(seconds);
  }
  
  startBtn.addEventListener("click", () => {
    
   intervalX = setInterval(()=> {
        let timeX = timeback - Date.now();
        if(timeX >= 0) {convertMs(timeX);}
        else {
            Notiflix.Notify.info('The End');
            clearTimeout(intervalX);
            
        }
        
        
        }, 1000);
  })
  