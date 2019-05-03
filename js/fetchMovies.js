function createMovie(title, year, poster) {
	const movieList = document.querySelector('.movie-list');
	const cell = document.createElement('div');
	cell.classList.add('cell');
	const card = document.createElement('div');
	card.classList.add('card', 'animated', 'bounceIn');
	const posterElem = document.createElement('img');
	posterElem.setAttribute('src', poster);
	posterElem.onerror = function() {
		posterElem.src = `https://www.rspcansw.org.au/wp-content/themes/noPhotoFound.png`;
	};
	const cardSection = document.createElement('div');
	cardSection.classList.add('card-section');
	const movieTitle = document.createElement('h5');
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

const fetchMovies = url => {
	return fetch(url)
		.then(res => res.json())
		.then(movies => {
			movies = movies.Search;
			for (let movie of movies) {
				const { Title: title, Year: year, Poster: poster } = movie;
				createMovie(title, year, poster);
			}
		})
		.catch(err => {
			console.log('FETCH parsing error', err);
		});
}

const movieTitles = [
	'Game of Thrones',
	'Breaking Bad',
	'Mr. Robot',
	'Dexter',
	'The Dark Knight',
	'The Avengers',
	'Good Will Hunting',
	'Captain America',
	'Batman'
];

movieTitles.forEach(movieTitle => {
	const URL = `https://www.omdbapi.com/?apikey=8a522f48&s=${movieTitle}&plot=full&r=json`;
	fetchMovies(URL);
});
