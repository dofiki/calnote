let dates = document.querySelectorAll(".dates div");
let notes = document.querySelectorAll(".notes .note");
let noteContent = document.querySelectorAll(".noteContent");
let saveBtn = document.querySelectorAll('.noteMenu img');

function showContent() {
    noteContent.forEach((content, index) => {
        let storedNote = localStorage.getItem(`note_${index}`);
        if (storedNote) {
            content.innerHTML = storedNote;
        }
    });
}

showContent();

dates.forEach((date, index) => {
    date.addEventListener('click', () => {
        notes.forEach((note, noteIndex) => {
            if (noteIndex === index) {
                note.classList.add('active');
            } else {
                note.classList.remove('active');
            }
        });
    });
});

saveBtn.forEach((btn, btnIndex) => {
    btn.addEventListener('click', () => {
        let content = noteContent[btnIndex].innerHTML;
        localStorage.setItem(`note_${btnIndex}`, content);
    });
});