import { getMovieReviews } from 'api/getMovies';
import { Loader } from 'components/Loader/Loader';
import { Text } from 'components/Text/Text.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from './Review';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieReviews(movieId)
      .then(data => {
        setMovieReviews(data);
        data.results.length === 0 && setIsEmpty(true);
      })
      .catch(({ message }) => setError(message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  // console.log(movieReviews.results);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Text>Something went wrong...</Text>}
      {isEmpty && <Text>There are currently no reviews for this movie</Text>}
      {movieReviews && <Review reviews={movieReviews.results} />}
    </>
  );
};

export default Reviews;
