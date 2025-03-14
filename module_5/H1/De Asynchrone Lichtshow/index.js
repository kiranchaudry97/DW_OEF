// Functie om te wachten voor een bepaald aantal milliseconden
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function verlichtBlok(blok) {
    const origineleKleur = blok.style.backgroundColor;
    blok.style.backgroundColor = '#ffffff';  
    await wait(500);  
    blok.style.backgroundColor = origineleKleur;  
}

async function startLichtshow() {
    const blokken = document.querySelectorAll('.block');
    
    for (let i = 0; i < blokken.length; i++) {
        await verlichtBlok(blokken[i]);
        await wait(300);  
    }

    await wait(500);  

    for (let i = blokken.length - 1; i >= 0; i--) {
        await verlichtBlok(blokken[i]);
        await wait(300);  
    }
}

document.getElementById('startBtn').addEventListener('click', () => {
    startLichtshow();
});