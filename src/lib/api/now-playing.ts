const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.AUTH_ACCESS_TOKEN}`
    }
};

const nowPlaying = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US', options);
    const nowPlayingMovies = await response.json();
    return nowPlayingMovies.results;
}

export default nowPlaying;