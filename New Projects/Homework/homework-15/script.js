const welcomeEl = document.getElementById('welcome');
const hintEl = document.getElementById('noNameHint');
const startBtn = document.getElementById('startBtn');

function getTimeGreeting(hours) {
  if (hours < 12) return 'Good Morning';
  if (hours < 17) return 'Good Afternoon';
  return 'Good Evening';
}

function setGreeting() {
  const hours = new Date().getHours();
  const prefix = getTimeGreeting(hours);

  const stored = (localStorage.getItem('studentName') || '').trim();
  if (stored) {
    welcomeEl.textContent = `${prefix}, ${stored}!`;
    hintEl.classList.add('hidden');
  } else {
    welcomeEl.textContent = `${prefix}, Friend!`;
    hintEl.classList.remove('hidden');
  }
  startBtn.textContent = 'Start';
}

setGreeting();