const clues = document.getElementById('clues');
const clueTitle = document.getElementById('clue-title');
const clueAnswer = document.getElementById('clue-answer');

clues.addEventListener('change', () => {
    const selectedClue = clues.value;

    switch (selectedClue) {
        case 'teacher':
            clueAnswer.textContent = "Teacher";
            break;
        case 'principal':
            clueAnswer.textContent = "Principal";
            break;
        case 'librarian':
            clueAnswer.textContent = "Librarian";
            break;
        default:
            clueAnswer.textContent = "Please select a clue to reveal the answer.";
    }
});