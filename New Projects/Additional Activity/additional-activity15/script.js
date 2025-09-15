// Retrieve name and update greeting. If missing, show default + hint.
const welcomeEl = document.getElementById('welcome');
const hintEl = document.getElementById('noNameHint');
const startBtn = document.getElementById('startBtn');

function setGreeting() {
  const name = localStorage.getItem('studentName');

  if (name && name.trim()) {
    welcomeEl.textContent = `Welcome, ${name}!`;
    startBtn.textContent = 'Start'; // optional change from “Login” to “Start”
    hintEl.classList.add('hidden');
  } else {
    welcomeEl.textContent = 'Welcome, Friend!';
    hintEl.classList.remove('hidden');
    startBtn.textContent = 'Start';
  }
}

setGreeting();