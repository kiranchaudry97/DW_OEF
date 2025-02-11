const themaKnop = document.getElementById('themaKnop');
const body = document.body;

themaKnop.addEventListener('click', () => {
    // de dark-mode klasse
    body.classList.toggle('dark-mode');

    
    const isDonker = body.classList.contains('dark-mode');

    // de knoptekst
    themaKnop.textContent = isDonker ? 'Licht thema' : 'Donker thema';
});
