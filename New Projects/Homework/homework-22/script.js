const text = document.getElementById('changes');
const msg = document.getElementById('msg');

document.getElementById('saveBtn').addEventListener('click', () => {
  localStorage.setItem('polishChanges', text.value);
  msg.textContent = 'Saved!';
});

// Load existing on start
window.addEventListener('load', () => {
  text.value = localStorage.getItem('polishChanges') || '';
});