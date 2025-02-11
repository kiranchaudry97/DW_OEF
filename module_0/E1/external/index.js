const knop = document.getElementById('begroetingKnop');

knop.addEventListener('click', () => {
    knop.textContent = knop.textContent === 'Hallo!' ? 'Tot ziens!' : 'Hallo!';
});
