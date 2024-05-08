import styled from 'styled-components';

export const ReviewContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Author = styled.span`
  font-weight: bold;
`;

export const DateStyled = styled.span`
  color: #666;
  font-size: 0.8rem;
`;

export const Content = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;
