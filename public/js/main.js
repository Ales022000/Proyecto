    
    var arrayImagenes = [ 'fondo1.jpg','fondo1.jpg', 'fondo2.jpg', 'fondo3.jpg', 'fondo4.jpg'];
    var imagenActual = 'fondo1.jpg';
    var contenedor = $('.fondoPantalla');
    contenedor.css('backgroundImage', 'url(./img/fondo1.jpg)');

$( function(){
    setInterval( function(){
        do{
            var randImage = arrayImagenes[Math.ceil(Math.random()*(arrayImagenes.length-1))];
        } while(randImage == imagenActual)
        imagenActual = randImage;
        cambiarImagenFondo(imagenActual);
    }, 10000)
})
 
function cambiarImagenFondo(nuevaImagen){
    var tempImagen = new Image();
    $(tempImagen).load( function(){
        contenedor.css('backgroundImage', 'url('+tempImagen.src+')');
    });
    tempImagen.src = './img/' + nuevaImagen;
}