
const URL = `https://www.omdbapi.com/?apikey=8a522f48&s=Game of Thrones&plot=full&r=json`
const URL1 = `https://www.omdbapi.com/?apikey=8a522f48&s=Breaking Bad&plot=full&r=json`
const URL2 = `https://www.omdbapi.com/?apikey=8a522f48&s="Mr. Robot&plot=full&r=json`
const URL3 = `https://www.omdbapi.com/?apikey=8a522f48&s="Dexter&plot=full&r=json`
const URL4 = `https://www.omdbapi.com/?apikey=8a522f48&s=The Dark Knight&plot=full&r=json`
const URL5 = `https://www.omdbapi.com/?apikey=8a522f48&s=The Avengers&plot=full&r=json`
const URL6 = `https://www.omdbapi.com/?apikey=8a522f48&s=Good Will Hunting&plot=full&r=json`
const URL7 = `https://www.omdbapi.com/?apikey=8a522f48&s=Captain America&plot=full&r=json`
const URL8 = `https://www.omdbapi.com/?apikey=8a522f48&s=Batman&plot=full&r=json`
function createMovie(title, year, poster){
    const movieList = document.querySelector('.movie-list'); 
    const cell = document.createElement('div');
    cell.classList.add('cell');
    const card = document.createElement('div');
    card.classList.add('card');
    const posterElem = document.createElement('img');
    posterElem.setAttribute('src', poster);
    posterElem.onerror = function() {
        posterElem.src = `https://www.rspcansw.org.au/wp-content/themes/noPhotoFound.png`;
      }; 
    const cardSection = document.createElement('div');
    cardSection.classList.add('card-section');
    const movieTitle = document.createElement('h4')
    movieTitle.textContent = `Title: ${title}`;
    const movieYear = document.createElement('p');
    movieYear.textContent = `Year: ${year}`;
    cardSection.appendChild(movieTitle);
    cardSection.appendChild(movieYear);
    card.appendChild(posterElem);
    card.appendChild(cardSection);
    cell.appendChild(card);
    movieList.appendChild(cell);
}

function getData(url) {
    return fetch(url)
        .then(res => res.json())
        .then(movies => {
            movies = movies.Search;
            for(let movie of movies) {
                const {Title: title, Year: year, Poster: poster} = movie;
                createMovie(title, year, poster)
            }
        })
        .catch(err => {
            console.log('FETCH parsing error', err);
        });
}

getData(URL);
getData(URL1);
getData(URL2);
getData(URL3);
getData(URL4);
getData(URL5);
getData(URL6);
getData(URL7);
getData(URL8);
