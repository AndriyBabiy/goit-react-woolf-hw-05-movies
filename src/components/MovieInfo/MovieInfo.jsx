export const MovieInfo = ({
  title,
  overview,
  release_date,
  runtime,
  budget,
  revenue,
  poster_path,
  tagline,
}) => {
  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

  return (
    <div>
      <h1>
        {title} ({new Date(release_date).getFullYear()})
      </h1>
      <h2>{tagline}</h2>
      <div style={{ display: 'flex' }}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={`Poster of ${title}`}
          style={{ width: '300px', marginRight: '20px' }}
        />
        <div>
          <p>
            <strong>Overview:</strong> {overview}
          </p>
          <p>
            <strong>Release Date:</strong>{' '}
            {new Date(release_date).toLocaleDateString()}
          </p>
          <p>
            <strong>Runtime:</strong> {runtime} minutes
          </p>
          <p>
            <strong>Budget:</strong> ${budget.toLocaleString()}
          </p>
          <p>
            <strong>Revenue:</strong> ${revenue.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};
