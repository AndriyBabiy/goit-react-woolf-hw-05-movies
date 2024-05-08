import { getMovieDetails } from 'api/getMovies';
import {
  MovieInfoButton,
  MovieInfoButtonContainer,
  NavLinkButton,
} from 'components/Button/Button.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Text } from 'components/Text/Text.styled';
import { useEffect, useRef, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const goBack = useRef(location.state?.from || '/');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(data => setMovieData(data))
      .catch(({ message }) => setError(message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      <NavLinkButton to={goBack.current}>Go back</NavLinkButton>
      {isLoading && <Loader />}
      {error && <Text>Something went wrong...</Text>}
      {movieData && <MovieInfo {...movieData} />}
      <MovieInfoButtonContainer>
        <MovieInfoButton>
          <Link to="cast">Cast</Link>
        </MovieInfoButton>
        <MovieInfoButton>
          <Link to="reviews">Reviews</Link>
        </MovieInfoButton>
      </MovieInfoButtonContainer>
      <Outlet />
    </>
  );
};

export default MovieDetails;
