const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.AUTH_ACCESS_TOKEN}`
    }
  };
  
    const trending = async () => {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
        const trendingMovies = await response.json();
        return trendingMovies.results;
    }

export default trending;