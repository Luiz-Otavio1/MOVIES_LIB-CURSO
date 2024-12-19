import React, {useState, useEffect} from 'react'
import MovieCard from '../Components/MovieCard';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import './MovieGrid.css'

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
  
    // Temporizador de 3 segundos
    const timer = setTimeout(() => {
      getTopRatedMovies(topRatedUrl);
    }, 3000);
  
    // Limpeza do temporizador caso o componente seja desmontado antes de 3 segundos
    return () => clearTimeout(timer);
  
  }, []);

  return (
    <div className='container'>
      <h2 className='title'>Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 ? (
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>
        )) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  )
}

export default Home