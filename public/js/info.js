document.addEventListener("DOMContentLoaded", () => {
    const id = getUrlVars().id;
    const api_key = "?api_key=4ed5aae0e5dd89775521a8ce7db46e80";
    const base_url = "https://api.themoviedb.org/3/movie/";
    const api_url = base_url + id + api_key + '&language=es-ES';
    const api_url_credits =  base_url + id + '/credits'+ api_key+ '&language=es-ES';
    verDetalles(api_url , api_url_credits);
    
});
     
const getUrlVars = () => {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;

    });
    return vars;
}
    function verDetalles(url, url_credits) {
        fetch(url).then(res => res.json())
        .then(function(data){

          insertarFondo(data);
           insertarImagen(data);
           insertarTitulo(data);
           insertarDuracion(data);
           insertarGeneros(data);
           insertarDescripcion(data);
         verReparto(url_credits);
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
             texto += " ["+element.name+"] ";
         });
         const html =`${texto}`; 
         document.getElementsByClassName('Generos')[0].innerHTML = html;

    }
    function insertarDescripcion(data, url){
        const html= `${data.overview}`;
        document.getElementsByClassName('InformacionPelicula')[0].innerHTML = html;
        
    }

    function verReparto(url){
       
        fetch(url).then(res => res.json())
        .then(function(data){
            const listado = document.getElementsByClassName('listado')[0];
            listado.innerHTML = '';
            var arreglo = data.cast;
            arreglo.forEach(element => {

                if(element.known_for_department == "Acting"){  
                if(element.popularity > 5){          
                    const urlImagen = `https://image.tmdb.org/t/p/original${element.profile_path}`;              
                    const actor = document.createElement('li');
                    actor.classList.add('w-full');
                    actor.classList.add('max-w-140');
                    actor.classList.add('p-1');

                    actor.innerHTML = 
                    `<img alt="${element.name}"
                    class="w-full max-w-xs max-h-52 rounded-xl border-2 border-gray-300 rounded-md w-45 h-60 sm:h-48"
                    src="${urlImagen}" />
                    <div class="w-full max-w-xs mt-4 text-white text-center text-sm">
                    <h1 class="mb-1 font-bold">${element.name}</h1>
                    <h2 class="italic">${element.character}</h2>
                  </div>

                    `;
                    listado.appendChild(actor);
                    }
                }
            });
    });

               
    
}