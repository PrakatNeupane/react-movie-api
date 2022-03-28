import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { SearchForm } from './components/form/SearchForm';
import { MovieList } from './components/movie-list/MovieList';
import { Title } from './components/Title/Title';


const App = () => {
  const [movieList, setMovieList] = useState([]);

  const handleOnAddToList = (cat, movie) => { // category = cat
    const obj = {
      ...movie, cat   //if not es6, ...movie, cat:cat
    }

    // adding first time
    movieList.length === 0 && setMovieList([obj]);

    console.log('exe...', movieList.length)

    const isExist = movieList.find(item => item.imdbID === movie.imdbID);

    if (!isExist) {
      setMovieList([...movieList, obj])
    } else {
      alert("Movie already exists")
    }


    // // whenever we click the item, we dont want repetition
    // movieList.map((item) => {
    //   if (item.imdbID !== movie.imdbID) {
    //     console.log('exe1...')
    //     return setMovieList([...movieList, obj])
    //   } else {
    //     alert("Movie already exists")
    //   }
    // })


  }
  console.log(movieList)
  return (
    <div className='wrapper'>
      <Container>
        <Title />
        <SearchForm handleOnAddToList={handleOnAddToList} />

        <div className='d-flex justify-content-center'>
          {movie.Response === 'True' && <CustomCard movie={movie} fun={handleOnAddToList} />}

          {movie.Response === 'False' && <Alert variant='danger'>{movie.Error}</Alert>}
        </div>

        <hr />
        <MovieList movieList={movieList} />
      </Container>
    </div>
  );
}

export default App;
