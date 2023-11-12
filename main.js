let cards = document.getElementById('cards');

async function getdata() {
    try {
        const response = await axios('https://api.tvmaze.com/shows');
        const data = response.data;

        data.forEach(element => {
            cards.innerHTML += `
                <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="${element.image.medium}" alt="${element.name}">
                    </div>
                    <div class="card-content">
                        <h3>${element.name}</h3>
                        <p><b>Language:</b> ${element.language}</p>
                        <p><b>IMDb:</b> ${element.rating.average}</p>
                        <button class="details-button" onclick="showDetails('${element.id}')">Show Details</button>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function showDetails(showId) {
    try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
        const show = response.data;

        const genres = show.genres.join(', ');
        const summary = show.summary;

        window.location.href = 'details.html?id=' + showId;
        // + '&title=' + encodeURIComponent(show.name) + '&genres=' + encodeURIComponent(genres) + '&summary=' + encodeURIComponent(summary)
    } catch (error) {
        console.error('Error fetching show details:', error);
    }
}

getdata();
