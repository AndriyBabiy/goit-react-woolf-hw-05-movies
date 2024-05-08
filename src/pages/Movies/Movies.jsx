import { searchMovies } from 'api/getMovies';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Text } from 'components/Text/Text.styled';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query');

    if (query === null) return;
    setIsEmpty(false);
    setIsLoading(true);
    searchMovies(query)
      .then(data => {
        setMovies(data.results);
        console.log(data.results);
        data.results.length === 0 && setIsEmpty(true);
      })
      .catch(err => {
        alert(err.message);
        setIsError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const handleSearch = searchTerm => {
    if (searchTerm === searchParams) {
      alert('We have already displayed these photos');
      return;
    }

    setSearchParams({ query: searchTerm });
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {isLoading && <Loader />}
      {isError && <Text>Something went wrong...</Text>}
      {isEmpty && <Text>There don't seem to be any movies with that name</Text>}
      <Suspense fallback={<Loader />}>
        <MoviesList movies={movies} />
      </Suspense>
    </>
  );
};

export default Movies;
