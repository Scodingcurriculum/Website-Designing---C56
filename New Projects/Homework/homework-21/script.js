const saveBtn = document.getElementById('saveBtn');
const out = document.getElementById('out');

function save() {
  const obj = {
    fav: document.getElementById('fav').value,
    improve: document.getElementById('improve').value,
    smiley: document.getElementById('smiley').value
  };
  localStorage.setItem('myExperience', JSON.stringify(obj));
  out.textContent = "Saved:\n" + JSON.stringify(obj, null, 2);
}

// Load existing
window.addEventListener('load', () => {
  const raw = localStorage.getItem('myExperience');
  if (!raw) return;
  const d = JSON.parse(raw);
  document.getElementById('fav').value = d.fav || 'Math';
  document.getElementById('improve').value = d.improve || '';
  document.getElementById('smiley').value = d.smiley || '😀';
  out.textContent = "Loaded previous entry.";
});

saveBtn.addEventListener('click', save);