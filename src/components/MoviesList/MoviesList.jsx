import {
  CardText,
  GalleryItem,
  MovieGallery,
} from 'components/MovieGallery/MovieGallery.styled';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

  const location = useLocation();

  console.log(movies);

  return (
    <MovieGallery>
      {movies.map(movie => (
        <GalleryItem key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <CardText>{movie.original_title}</CardText>
            <CardText>
              {`Released: ${new Date(movie.release_date).toLocaleDateString()}`}
            </CardText>
          </Link>
        </GalleryItem>
      ))}
    </MovieGallery>
  );
};
