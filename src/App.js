import './App.css';
import React, { useEffect, useState } from 'react';
import { Movies, NewMovie } from './components/Movies';
import {
  useMovieRequest,
  LOAD_MOVIES,
  SAVE_MOVIE
} from './hooks/useMovieRequest';
import RentalForm from './components/Rentals/RentalForm';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, sendMovieRequest] = useMovieRequest();

  const handleSaveMovie = (newMovie) => {
    sendMovieRequest(SAVE_MOVIE, () => {
      setMovies((prevMovies) => {
        return prevMovies;
      });
    }, newMovie);
  };

  useEffect(() => {
    sendMovieRequest(LOAD_MOVIES, (movies) => {
      setMovies(movies);
    });
  }, [sendMovieRequest])


  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <section>
          {loading && <p>Loading.....</p>}
          {!loading && <Movies list={movies} />}
        </section>
        <section>
          <NewMovie onSaveMovies={(movie) => { handleSaveMovie(movie); }} />
        </section>
        <section>
          <RentalForm />
        </section>
      </main>
    </div>
  );
}

export default App;
