import './MovieApplication.css';
import AddMovieForm from './Components/AddMovieForm';
import Movie from './Components/Movie';
import OrderByAlphaButton from './Components/OrderByAlphaButton';
import OrderByGradeButton from './Components/OrderByGradeButton';
import { useState } from 'react';

function MovieApplication() {
  const [movies, setMovies] = useState([
    {
    id: 1,
    title: "The default movie",
    rating: 5
  }
]);

  const addMovie = (title, rating) => {
    const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

    setMovies([...movies, {
      id: newId,
      title: title,
      rating: rating
    }])
  }

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id))
  }

  const sortByGrade = () => {
    let sortedMovies = movies.sort((a, b) => a.rating - b.rating)
    setMovies([...sortedMovies]);
  }

  const sortByAlpha = () => {
    let sortedMovies = movies.sort((a, b) => a.title > b.title ? 1 : a.title < b.title ? -1 : 0)
    setMovies([...sortedMovies]);
  }

  const comparator = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  return (
    <div className="App">
      <h1>Min filmlista</h1>
      <AddMovieForm addMovie={addMovie} />

      <h2>Inlagda filmer</h2>
      <ul className='list-group'>
        {movies.map(movie => <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie}/>)}
      </ul>
      
      <div className='d-flex justify-content-center'>
          <OrderByAlphaButton onClick={sortByAlpha} />
          <OrderByGradeButton onClick={sortByGrade} />
      </div>
    </div>
  );
}

export default MovieApplication;
