const api_key = "api_key=4ed5aae0e5dd89775521a8ce7db46e80";
const base_url = "https://api.themoviedb.org/3";
const api_url = base_url + '/discover/movie?sort_by=popularity.desc&' + api_key;
const image_url = 'https://image.tmdb.org/t/p/w500';

obtenerPelicula(api_url);

function obtenerPelicula(url) {

    fetch(url).then(res => res.json()).then(data => {

      console.log(data.results);
      mostrarPelicula(data.results);
    })
}

function mostrarPelicula(data) {

    data.forEach(pelicula => {
       
       const {Titulo, imagen, calificacion, informacion_general} = pelicula;
       const peliculaE1 = document.createElement('div');
       peliculaE1.classList.add('contenedorPeliculas');
       peliculaE1.innerHTML = `
       
       <div class="contenedorTrending">
       <img class="rounded-xl" src="" alt="Pinocho">
       <div class="play">
         <img src="./img/boton-de-play (3).svg" alt="Play">
       </div>
       <div class="contenedorCalificacion">
         <h1 class="textoCalificacion">3.1</h1>
       </div>
     </div>

     <div class="contenedorInformacion">
       <h1 class="nombrePelicula">PINOCCHIO</h1>

       <h2 class="categoria">Ciencia Ficción y Fantasía</h2>

       <div class="contenedorDuracion">
         <h3 class="textoDuracion">125 min</h3>
       </div>

       <div class="textoInformacion">
         <p>(2019) Relata la historia de uno de los cuentos más truculentos con un enfoque neorrealista con un
           toque
           tenebroso
           (...) <a class="text-blue-400">Detalles</a> </p>
       </div>

       <div class="favorito">
         <img src="./img/estrella.svg" alt="Favorito">
       </div>
       <div class="descargar">
         <a href="#">
           <img src="./img/descargar.svg" alt="Descargar"></a>
       </div>

     </div>

       `
    });
}