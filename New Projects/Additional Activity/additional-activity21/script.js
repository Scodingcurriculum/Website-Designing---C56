let rating = 0;
const stars = document.querySelectorAll('.star');
stars.forEach((s, i) => s.addEventListener('click', () => {
  rating = i + 1;
  stars.forEach((t, j) => t.classList.toggle('active', j < rating));
}));

document.getElementById('saveBtn').addEventListener('click', () => {
  const data = {
    subject: document.getElementById('subject').value,
    text: document.getElementById('fb').value,
    rating: rating
  };
  localStorage.setItem('portalFeedback', JSON.stringify(data));
  document.getElementById('saved').innerText = "Saved! Reload to see it.";
});

// Load stored feedback on start
window.addEventListener('load', () => {
  const raw = localStorage.getItem('portalFeedback');
  if (!raw) return;
  const d = JSON.parse(raw);
  document.getElementById('subject').value = d.subject || 'Math';
  document.getElementById('fb').value = d.text || '';
  rating = d.rating || 0;
  stars.forEach((t, j) => t.classList.toggle('active', j < rating));
});