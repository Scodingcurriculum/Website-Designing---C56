function displayMessage() {
  const name = localStorage.getItem('schoolName');
  const subject = localStorage.getItem('favSubject');
  const msg = document.getElementById('message');
  if (name && subject) {
    msg.textContent = `Welcome ${name}! Your favorite subject is ${subject}.`;
  } else {
    msg.textContent = '';
  }
}

document.getElementById('saveBtn').addEventListener('click', () => {
  localStorage.setItem('schoolName', document.getElementById('name').value);
  localStorage.setItem('favSubject', document.getElementById('subject').value);
  displayMessage();
});

// Prefill + show on load
window.addEventListener('load', () => {
  document.getElementById('name').value = localStorage.getItem('schoolName') || '';
  document.getElementById('subject').value = localStorage.getItem('favSubject') || '';
  displayMessage();
});