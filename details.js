let id =  new URLSearchParams(location.search).get("id");
console.log(id)
const urlParams = new URLSearchParams(location.search);
const movie = {
    title: decodeURIComponent(urlParams.get('title')),
    language: decodeURIComponent(urlParams.get('language')),
    imdb: decodeURIComponent(urlParams.get('imdb')),
    genres: decodeURIComponent(urlParams.get('genres')).split(','),
    summary: decodeURIComponent(urlParams.get('summary')),
    poster: decodeURIComponent(urlParams.get('poster')),
};
axios.get(`https://api.tvmaze.com/shows/${id}`)
.then(data=>{
    let movie=data.data
    console.log(movie)
    setElementText('movieTitle', movie.name);
    document.getElementById('moviePoster').src = movie.image.medium;
    setElementText('movieLanguage', movie.language);
    setElementText('movieIMDb', movie.rating.average);
    setElementText('movieGenres', movie.genres.join(', '));
    setElementText('movieDescription', movie.summary);
})

for (const key in movie) {
    console.log(movie.key)
}
document.title = `${movie.title} Details`;

function setElementText(elementId, text) {
    document.getElementById(elementId).innerHTML = text;
}

// setElementText('movieTitle', movie.title);
// // document.getElementById('moviePoster').src = movie.poster;
// setElementText('movieLanguage', movie.language);
// setElementText('movieIMDb', movie.imdb);
// setElementText('movieGenres', movie.genres.join(', '));
// setElementText('movieDescription', movie.summary);

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 1;
});

function changeButtonColor() {
    const button = document.getElementById('backToHomeButton');
    button.classList.add('green-bg');
    button.style.pointerEvents = 'none';
    button.innerHTML = 'Home <i class="fas fa-home"></i>';
    setTimeout(() => (button.innerHTML = 'Back to Home'), 2000);
}
