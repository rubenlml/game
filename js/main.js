window.addEventListener('load',init);

function init(){
    var lienzo = document.querySelector('#videojuego');
    var contexto = lienzo.getContext('2d');
    contexto.fillRect('20,20,50,50');
    contexto.fillStyle = 'red';
}