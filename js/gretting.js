const form = document.querySelector(".jsForm"), 
  input = form.querySelector("input"),
  greeting = document.querySelector(".jsGreetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
  document.getElementById("jsSet").className = "setName";
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit); 
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS); 
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
    document.getElementById("jsSet").className = "setName";
  }
}

function init() {
  loadName();
}

init();
