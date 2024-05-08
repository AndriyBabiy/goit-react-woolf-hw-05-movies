import { getMovieCredits } from 'api/getMovies';
import { Loader } from 'components/Loader/Loader';
import { Text } from 'components/Text/Text.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastInfo from './CastInfo';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieCredits(movieId)
      .then(data => setMovieCast(data))
      .catch(({ message }) => setError(message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Text>Something went wrong...</Text>}
      {movieCast && <CastInfo cast={movieCast.cast} />}
    </>
  );
};

export default Cast;
