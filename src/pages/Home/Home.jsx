import { getTrending } from 'api/getMovies';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Text } from 'components/Text/Text.styled';
// import { Header } from 'components/Header/Header';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending()
      .then(data => setMovies(data.results))
      .catch(err => {
        alert(err.message);
        setIsError(err.message);
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <Text textAlign="center">
          Something went wrong, try again later... 😥
        </Text>
      )}
      <MoviesList movies={movies} />
      {/* {showMoreBtn && <Button onClick={handleClick}>Load more</Button>} */}
    </>
  );
};

export default Home;
