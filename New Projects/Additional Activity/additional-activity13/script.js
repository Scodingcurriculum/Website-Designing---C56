function applyTheme(color) {
  document.body.style.backgroundColor = color;
}

document.getElementById('saveBtn').addEventListener('click', () => {
  const color = document.getElementById('themeColor').value;
  localStorage.setItem('themeColor', color);
  applyTheme(color);
});

// Load stored theme on start
window.addEventListener('load', () => {
  const stored = localStorage.getItem('themeColor');
  if (stored) {
    document.getElementById('themeColor').value = stored;
    applyTheme(stored);
  }
});