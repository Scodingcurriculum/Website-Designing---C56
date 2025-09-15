// Functionality unchanged: save name to localStorage
document.getElementById('saveBtn').addEventListener('click', () => {
  const name = document.getElementById('studentName').value.trim();
  if (name) localStorage.setItem('studentName', name);
  // Navigate to dashboard/home if you want:
  // location.href = 'home.html';
  alert('Name saved! You can proceed to the dashboard.');
});