const api_key = "api_key=4ed5aae0e5dd89775521a8ce7db46e80";
const base_url = "https://api.themoviedb.org/3";
const api_url = base_url + '/discover/movie?sort_by=popularity.desc&' + api_key + '&language=es-ES';
const image_url = 'https://image.tmdb.org/t/p/w500';
const busqueda_url = base_url + "/search/movie?" + api_key + "&language=es-ES";

const contenedorPeliculasPopulares = document.getElementById('contenedorPeliculasPopulares');
const contenedorPeliculasDeAccion = document.getElementById('contenedorPeliculasDeAccion');
const formularioDeBusqueda = document.getElementById('formularioDeBusqueda');
const busqueda = document.getElementById('busqueda');

obtenerPeliculas(api_url);

function obtenerPeliculas(url) {

    fetch(url).then(res => res.json()).then(data => {

      console.log(data.results);
      mostrarPeliculasPopulares(data.results);
    })
}

function mostrarPeliculasPopulares(data) {

  contenedorPeliculasPopulares.innerHTML = '';

    data.forEach(datosDeLaPelicula => {
       
       const {id, title, poster_path, vote_average, overview, runtime} = datosDeLaPelicula;
       const pelicula = document.createElement('div');
       pelicula.setAttribute('href', `/movie-info.html?id=${id}`)
       pelicula.classList.add('contenedorPeliculas');
       
   
      
       pelicula.innerHTML = `
       
       <div class="contenedorTrending">
       <img class="rounded-xl" src="${image_url + poster_path}" alt="${title}">
       <div class="play">
         <img src="./img/boton-de-play (3).svg" alt="Play">
       </div>
       <div class="contenedorCalificacion">
         <h1 class="textoCalificacion">${vote_average}</h1>
       </div>
     </div>

     <div class="contenedorInformacion ">
       <h1 class="nombrePelicula">${title}</h1>

       <h2 class="categoria">categoria:  ${id}</h2>

       <div class="contenedorDuracion">
         <h3 class="textoDuracion">${runtime}</h3>
       </div>

       <div class="textoInformacion overflow-hidden">
         <p> ${overview} </p>
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

       contenedorPeliculasPopulares.appendChild(pelicula);
    });
}

function mostrarPeliculasDeAccion(data) {

  contenedorPeliculasDeAccion.innerHTML = '';

    data.forEach(datosDeLaPelicula => {
       
       const {id, title, poster_path, vote_average, overview, runtime} = datosDeLaPelicula;
       const pelicula = document.createElement('div');
       pelicula.setAttribute('href', `/movie-info.html?id=${id}`)
       pelicula.classList.add('contenedorPeliculas');
       
      
      
       

       pelicula.innerHTML = `
       
       <div class="contenedorTrending">
       <img class="rounded-xl" src="${image_url + poster_path}" alt="${title}">
       <div class="play">
         <img src="./img/boton-de-play (3).svg" alt="Play">
       </div>
       <div class="contenedorCalificacion">
         <h1 class="textoCalificacion">${vote_average}</h1>
       </div>
     </div>

     <div class="contenedorInformacion ">
       <h1 class="nombrePelicula">${title}</h1>

       <h2 class="categoria">categoria:  ${id}</h2>

       <div class="contenedorDuracion">
         <h3 class="textoDuracion">${runtime}</h3>
       </div>

       <div class="textoInformacion overflow-hidden">
         <p> ${overview} </p>
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

       contenedorPeliculasDeAccion.appendChild(pelicula);
    });
}

formularioDeBusqueda.addEventListener('submit', (e) => {

  e.preventDefault();

  const peliculaABuscar = busqueda.value;

  if(peliculaABuscar){

    obtenerPeliculas(busqueda_url + '&query=' + peliculaABuscar)
  }else {

    obtenerPeliculas(api_url);
  }
})

 
