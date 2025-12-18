window.addEventListener('DOMContentLoaded', () => {
  const notes = document.querySelectorAll('.note');
  notes.forEach(note => {
    const angle = Math.floor(Math.random() * 10) - 5; // -5 to +5 degrees
    note.style.transform = `rotate(${angle}deg)`;
  });
});
