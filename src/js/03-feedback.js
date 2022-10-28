const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");
const form = document.querySelector('.feedback-form');

const throttle = require('lodash.throttle');
const objectForm  = {};
const objectSubmit = {};
form.addEventListener("input", throttle(() =>{
    objectForm.email = emailInput.value;
    objectForm.message = messageInput.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(objectForm)); 
    console.log("Save local");
}, 500)
);

let localForm = JSON.parse (localStorage.getItem("feedback-form-state"));

function outputText() {
    if(localForm != null){
    messageInput.textContent = localForm.message;
    emailInput.value = localForm.email;}
    else {
        return "No local form"
    }
}
console.log(outputText());

form.addEventListener("submit", (e) => {
  e.preventDefault();
  objectSubmit.email = emailInput.value;
  objectSubmit.message = messageInput.value;
  console.log(objectSubmit);
  e.currentTarget.reset();
  localStorage.clear();
  emailInput.value = " ";
  messageInput.value = " ";
});

