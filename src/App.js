import { useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import './App.css';
import { CustomCard } from './components/Card/CustomCard';
import { SearchForm } from './components/form/SearchForm';
import { fetchMovie } from './components/helper/AxiosHelper';
import { MovieList } from './components/movie-list/MovieList';
import { Title } from './components/Title/Title';


const App = () => {
  const [movieMainList, setMovieMainList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState({})


  const getMovie = async search => {
    const movie = await fetchMovie(search);
    setMovie(movie.data)
  }

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
      setMovieMainList([...movieMainList, obj])
      setMovie({})
    } else {
      alert("Movie already exists")
    }
  }

  const handleOnDelete = imdbID => {
    const filteredList = movieMainList.filter((item) => item.imdbID !== imdbID)
    setMovieList(filteredList)
    setMovieMainList(filteredList)
  }

  const handleOnSelect = (cat) => {
    let filterArgs = []
    if (cat) {
      filterArgs = movieMainList.filter(itm => itm.cat === cat)
    } else {
      filterArgs = movieMainList;
    }
    setMovieList(filterArgs);
  }
  return (
    <div className='wrapper'>
      <Container>
        <Title />
        <SearchForm handleOnAddToList={handleOnAddToList} getMovie={getMovie} />

        <div className='d-flex justify-content-center mt-3'>
          {movie.Response === 'True' && <CustomCard movie={movie} fun={handleOnAddToList} />}

          {movie.Response === 'False' && <Alert variant='danger'>{movie.Error}</Alert>}
        </div>

        <hr />
        <MovieList movieList={movieList} handleOnDelete={handleOnDelete} handleOnSelect={handleOnSelect} />
      </Container>
    </div>
  );
}

export default App;
