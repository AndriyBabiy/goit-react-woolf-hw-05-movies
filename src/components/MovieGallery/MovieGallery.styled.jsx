import styled from 'styled-components';

export const MovieGallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  grid-gap: ${({ theme }) => theme.spacing(4)};
`;

export const GalleryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  border-radius: ${({ theme }) => theme.spacing(1)};
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;

  transition: all ${({ theme }) => theme.animation.cubicBezier};

  &:hover,
  &:focus {
    scale: 1.05;
    box-shadow: ${({ theme }) => theme.shadows.regular};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CardText = styled.p`
  margin: 0 auto;
  padding: 5px;
  width: fit-content;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
