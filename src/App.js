import './App.css';
import React, { useEffect, useState } from 'react';
import Movies from './components/Movies/Movies';
const moviesModule = require('./backend/movies-api');

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesModule.getAllMovies().then(response =>{
      setMovies(response.results);
      console.log(response)
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Movies list={movies} />
      </main>
    </div>
  );
}

export default App;
