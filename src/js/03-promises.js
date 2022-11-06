import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
const form = document.querySelector('.form');

function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } 
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay)
    
  })
  
}

 form.addEventListener("submit", e => {
  e.preventDefault();
  let delay = parseInt(form.delay.value) ;
  let step = parseInt(form.step.value);
  let amount = parseInt(form.amount.value);
  console.log(typeof(amount));
  for (let i = 0; i < amount; i++) {
    let time = delay + step*i;
    let positions = i + 1;
    console.log(time, positions)
    createPromise(positions, time).then(promgood).catch(promerror);
    
  }
 })

 function promgood(result) {
  Notiflix.Notify.success(result);
 }
 function promerror(result) {
  Notiflix.Notify.failure(result);
 }
 