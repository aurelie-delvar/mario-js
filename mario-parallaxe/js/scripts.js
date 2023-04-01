// aller chercher les éléments sur lesquels on intervient
let mario = document.querySelector('#mario');
let solHaut = document.querySelector('#sol-haut');
let solBas = document.querySelector('#sol-bas');
let paysage = document.querySelector('#paysage');
let ciel = document.querySelector('body');

// on garde le décalage des éléments
let decalage = 0;

window.onload = () => {
    document.addEventListener("keydown", marcher);
    document.addEventListener("keyup", stopper);
    document.addEventListener("keyup", sauter);
}

/**
 * Cette fonction fait marcher Mario
 * 
 */
function marcher(event) {

    switch(event.key) {
        case "ArrowLeft":
            mario.classList.add("mario-gauche");
            mario.classList.remove("mario-droite");
            mario.classList.remove("mario-saute");
            parallaxe();
            decalage ++;
            break;
        case "ArrowRight":
            mario.classList.add("mario-droite");
            mario.classList.remove("mario-gauche");
            mario.classList.remove("mario-saute");
            parallaxe();
            decalage --;
            break;
    }
}

/**
 * Cette fonction arrête Mario
 * 
 */
function stopper() {

    mario.classList.remove("mario-gauche");
    mario.classList.remove("mario-droite");

}

function sauter(event) {

    if(event.key == " " || event.key == "spacebar") {
        mario.classList.add("mario-saute");
    }

}

function parallaxe() {
    solBas.style.backgroundPositionX = (decalage * 4) + "px";
    solHaut.style.backgroundPositionX = (decalage * 4) + "px";
    paysage.style.backgroundPositionX = (decalage * 2) + "px";
    ciel.style.backgroundPositionX = decalage + "px";
}