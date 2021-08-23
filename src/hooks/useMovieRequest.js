import {useState, useCallback} from 'react';

export const LOAD_MOVIES = 'LOAD_MOVIES';
export const SAVE_MOVIE = 'SAVE_MOVIE';

const moviesModule = require('../backend/movies-api');

const useMovieRequest = ()=> {
  const [loading, setLoading] = useState(false);
  const sendMovieRequest = useCallback((requestType, callback, newMovie) => {
    setLoading(true);

    switch(requestType) {
      case LOAD_MOVIES:

        moviesModule.getAllMovies().then(response => {
          const movies = [];
          Object.keys(response).forEach(key => {
            movies.push(response[key]);
          })
          callback(movies);

          setLoading(false);

        }).catch(e => console.log(e));

        break;
      case SAVE_MOVIE:
        moviesModule.saveMovie(newMovie).then(response => {
          callback();
          setLoading(false);
        });
        break;
      default:
        break;
    }

  }, [])

  return [loading, sendMovieRequest];

}

export { useMovieRequest };