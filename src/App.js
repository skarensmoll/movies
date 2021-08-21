import './App.css';
import React, { useEffect, useState, useCallback } from 'react';
import { Button } from './components/UI';
import { Movies, Form } from './components/Movies';
const moviesModule = require('./backend/movies-api');

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMovies = useCallback(() => {
    setLoading(true);

    moviesModule.getAllMovies().then(response => {
      setMovies(response.results);
    }).catch(e => console.log(e));
    setLoading(false);
  }, []);

  const saveMovies = useCallback((newMovie) => {
    moviesModule.saveMovie(newMovie).then(response => {
      console.log(response);
    })
  }, []);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <section>
          <Button onClick={() => loadMovies()}>Load Movies </Button>
          {loading && <p>Loading.....</p>}
          {!loading && <Movies list={movies} />}
        </section>
        <section>
          <Form onSaveMovies={(movie) => { saveMovies(movie); }} />
        </section>
      </main>
    </div>
  );
}

export default App;
