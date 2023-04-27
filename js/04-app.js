const botonAbrir = document.querySelector('#abrir-pantalla-completa');
const botonSalir = document.querySelector('#salir-pantalla-completa');

botonAbrir.addEventListener('click', abrirPantallaCompleta);
botonSalir.addEventListener('click', salirPantallaCompleta);

function abrirPantallaCompleta(){
    document.documentElement.requestFullscreen();
}

function salirPantallaCompleta(){   
    document.exitFullscreen();
}