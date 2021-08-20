/// using CommonJs modules approach

const MOVIES_API = 'https://swapi.dev/api/films/';

exports.getAllMovies = () => {
  return fetch(MOVIES_API).then(response => response.json());
}