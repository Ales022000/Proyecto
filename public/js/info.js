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
        const infopeli = document.getElementById('info');

        fetch(url).then(res => res.json())
        .then(function(data){
            const genres = data.genres;
            const annio = data.release_date.substr(0,4);
            console.log(genres);

            let movieDetailsString = `
            <div class=" fixed w-full h-full -z-1">`

          infopeli.innerHTML += movieDetailsString;
    });
    }

