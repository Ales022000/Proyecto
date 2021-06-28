const api_key = "api_key=4ed5aae0e5dd89775521a8ce7db46e80";
const base_url = "https://www.themoviedb.org/";
const api_url = base_url + '/discover/movie?sort_by=popularity.desc' + api_key;

obtenerPelicula(api_url);

function obtenerPelicula(url) {

    fetch(url).then(res => res.json()).then(data => {

      console.log(data);
    })
}