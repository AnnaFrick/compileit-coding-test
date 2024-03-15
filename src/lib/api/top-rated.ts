const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.AUTH_ACCESS_TOKEN}`
    }
  };

const topRated = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const topRatedMovies = await response.json();
    return topRatedMovies.results;
}

export default topRated;