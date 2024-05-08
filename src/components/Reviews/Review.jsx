import {
  Author,
  Content,
  DateStyled,
  ReviewContainer,
  ReviewHeader,
} from './Review.styled';

export const Review = ({ reviews }) => {
  return (
    <>
      {reviews.map(review => (
        <ReviewContainer key={review.id}>
          <ReviewHeader>
            <Author>{review.author || 'Anonymous'}</Author>
            <DateStyled>
              {new Date(review.created_at).toLocaleDateString()}
            </DateStyled>
          </ReviewHeader>
          <Content>{review.content}</Content>
        </ReviewContainer>
      ))}
    </>
  );
};
