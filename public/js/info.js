document.addEventListener("DOMContentLoaded", () => {
    const id = getUrlVars().id;
    const api_key = "?api_key=4ed5aae0e5dd89775521a8ce7db46e80";
    const base_url = "https://api.themoviedb.org/3/movie/";
    const api_url = base_url + id + api_key + '&language=es-ES';
    console.log(api_url );
    verDetalles(api_url );
});
     
const getUrlVars = () => {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;

    });
    return vars;
}
    function verDetalles(url) {
        fetch(url).then(res => res.json())
        .then(function(data){

          insertarFondo(data);
           insertarImagen(data);
           insertarTitulo(data);
           insertarDuracion(data);
           insertarGeneros(data);
           insertarDescripcion(data);
    });
    }

    function insertarFondo(data){
        const urlFondo = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;
        var contenedor = $('.Fondo');
        contenedor.css('backgroundImage', 'url('+urlFondo+')');
        var contenedor = $('.Opacidad');
        contenedor.css('background-color', 'rgba(0,0,0,0.75)');
    }
 
    function insertarImagen(data){
        const urlImagen = `https://image.tmdb.org/t/p/original${data.poster_path}`;
        const html = `<img src="${urlImagen}" width="45%" class="shadow-2xl rounded-xl"  alt="${data.title}"/>`;
        document.getElementsByClassName('ImagenJs')[0].innerHTML = html;
        
    }
    function insertarTitulo(data){
        const html = `${data.title}`;
        document.getElementsByClassName('Titulo')[0].innerHTML = html;        
    }
    
    function insertarDuracion(data){
        const html = `${data.runtime} min`;
        document.getElementsByClassName('Duracion')[0].innerHTML = html;        
    }
    
       function insertarGeneros(data){
        let genres = data.genres;
        let texto = '';
         genres.forEach(element => {
             texto += " ["+element.name+ "] ";
         });
         const html =`${texto}`; 
         document.getElementsByClassName('Generos')[0].innerHTML = html;

    }
    function insertarDescripcion(data){
        const html= `${data.overview}`;
        document.getElementsByClassName('InformacionPelicula')[0].innerHTML = html;
    }
let bntMoverDerecha = document.querySelector(".moverDerecha")

bntMoverDerecha.addEventListener("click", function(e) {
    moverSliderDerecha();
});
    
function moverSliderDerecha(){
    var listado = $('.listado');
    listado.css('animation', 'cambio 60s infinite alternate');
}