import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing(5)};

  margin: 0 auto;
  margin-top: 90px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
