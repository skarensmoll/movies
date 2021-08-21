/// using CommonJs modules approach

const MOVIES_API = 'https://swapi.dev/api/films/';
const FIREBASE_MOVIE_API = 'https://react-my-burger-34f7d.firebaseio.com/movies.json';

exports.getAllMovies = async() => {
  const response = await fetch(MOVIES_API)
  return response.json();
};

exports.saveMovie = async(movie)=> {
  const response = await fetch(FIREBASE_MOVIE_API, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  });

  return response.json();
}