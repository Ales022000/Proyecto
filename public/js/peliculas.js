const api_key = "api_key=4ed5aae0e5dd89775521a8ce7db46e80";
const base_url = "https://api.themoviedb.org/3";

const api_popularity_url = base_url + '/discover/movie?sort_by=popularity.desc&' + api_key + '&language=es-ES';
const api_top_rated_url = base_url + '/movie/top_rated?' + api_key + '&language=es-ES';
const api_upcoming_url = base_url + '/movie/upcoming?' + api_key + '&language=es-ES';

const image_url = 'https://image.tmdb.org/t/p/w500';
const busqueda_url = base_url + "/search/movie?" + api_key + "&language=es-ES";

const contenedorPeliculas = document.getElementById('contenedorPeliculas');
const busqueda = document.getElementById('busqueda');
const botonBuscar = document.getElementById('botonBuscar');

obtenerPeliculas(api_popularity_url);

const categorias = document.querySelector('.CategoriasPeliculas');

categorias.addEventListener('change', (event) => {

  if (event.target.value == "Populares") {
    obtenerPeliculas(api_popularity_url);
  } else
    if (event.target.value == "Mejor Valoradas") {
      obtenerPeliculas(api_top_rated_url);
    }
    else
    if (event.target.value == "Próximamente") {
      obtenerPeliculas(api_upcoming_url);
    }
});






function obtenerPeliculas(url) {
  fetch(url).then(res => res.json()).then(data => {
    console.log(data.results);
    mostrarPeliculas(data.results);
  })
}

function mostrarPeliculas(data) {

  contenedorPeliculas.innerHTML = '';

  data.forEach(datosDeLaPelicula => {

    const { id, title, poster_path, vote_average, overview, original_title } = datosDeLaPelicula;
    const pelicula = document.createElement('div');
    pelicula.classList.add('contenedorPeliculas');
    const urlPelicula = `./informacion.html?id=${id}`;

    pelicula.innerHTML = `
       <div class="contenedorTrending">
       <img class="rounded-xl border" src="${image_url + poster_path}" alt="${title}">
       <div class="play">
      
       <a href="${urlPelicula}">  <img src="./img/boton-de-play (3).svg" alt="Play"></a>
       </div>

       <div class="contenedorCalificacion">
         <h1 class="textoCalificacion">${vote_average}</h1>
       </div>
     </div>

     <div class="contenedorInformacion">
       <h1 class="nombrePelicula">${title}</h1>

       <div class="contenedorDuracion">
         <h3 class="textoDuracion">${original_title}</h3>
       </div>

       <div class="textoInformacion">
         <p class="text-sx leading-none"> ${ajustarTamaño(overview)} </p>
       </div>
       
       <div class="favorito">
       <img src="./img/estrella.svg" alt="Favorito">
     </div>
     <div class="descargar">
       <a href="#">
         <img src="./img/descargar.svg" alt="Descargar"></a>
     </div>

     </div>
       `;
    contenedorPeliculas.appendChild(pelicula);
  });
}


botonBuscar.addEventListener("click", function (e) {

  e.preventDefault();

  const peliculaABuscar = busqueda.value;

  if (busqueda.value == "") {

    alert("Lo sentimos, debe ingresar algún nombre de pelicula");
    obtenerPeliculas(api_url);

  } else {

    if (peliculaABuscar) {

      obtenerPeliculas(busqueda_url + '&query=' + peliculaABuscar)

    }
  }
});

function ajustarTamaño(texto) {
  let palabras = texto.split(' ');
  let contador = 0;
  let textoAlternativo = '';
  palabras.forEach(element => {
    contador++;
    if (contador < 70) {
      textoAlternativo += element + ' ';
    }
    if (contador == 71) {
      textoAlternativo += '(...) ';
    }
  });
  return textoAlternativo;
}

