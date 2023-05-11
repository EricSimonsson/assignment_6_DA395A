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
    title: "c",
    rating: 5
  }, {
    id: 2,
    title: "b",
    rating: 2
  },
  {
    id: 3,
    title: "a",
    rating: 1
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
      
      <OrderByAlphaButton onClick={sortByAlpha} />
      <OrderByGradeButton onClick={sortByGrade} />
    </div>
  );
}

export default MovieApplication;
