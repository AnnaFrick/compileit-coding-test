const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.AUTH_ACCESS_TOKEN}`
  }
};

const getGenres = async () => {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
    const genres = await response.json();
    return genres.genres;
}

const getMoviesByGenre = async (genreId: string) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en-US`, options);
    const movies = await response.json();
    return movies.results;
}

export { getGenres, getMoviesByGenre };