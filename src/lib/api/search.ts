const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.AUTH_ACCESS_TOKEN}`
    }
  };

  const search = async (query: string) => {
    console.log(query, "Hello from search");
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
    const searchResults = await response.json();    
    console.log(searchResults, "Hello from search");
    return searchResults.results;

}

export default search;