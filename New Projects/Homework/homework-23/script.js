const ref = document.getElementById('ref');
const out = document.getElementById('out');

document.getElementById('saveBtn').addEventListener('click', () => {
  const text = ref.value.trim();
  localStorage.setItem('launchReflection', text);
  out.textContent = "Saved:\n" + text;
});

window.addEventListener('load', () => {
  const saved = localStorage.getItem('launchReflection');
  if (saved) {
    ref.value = saved;
    out.textContent = "Loaded previous reflection.";
  }
});