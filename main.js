let dates = document.querySelectorAll(".dates div");
let notes = document.querySelectorAll(".notes .note");

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