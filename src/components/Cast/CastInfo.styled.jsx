const { default: styled } = require('styled-components');

export const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

export const CastCard = styled.div`
  flex: 0 0 120px;
  margin: 10px;
  text-align: center;
`;

export const CastImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

export const CastName = styled.h3`
  padding-top: 10px;
  font-size: 14px;
  color: #333;
`;

export const CharacterName = styled.p`
  font-size: 12px;
  color: #666;
`;
