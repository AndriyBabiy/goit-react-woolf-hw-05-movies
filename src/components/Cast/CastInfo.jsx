import React from 'react';
import {
  CastCard,
  CastContainer,
  CastImage,
  CastName,
  CharacterName,
} from './CastInfo.styled';

export default function CastInfo({ cast }) {
  const defaultImage = 'https://via.placeholder.com/120x180';

  return (
    <CastContainer>
      {cast.map(member => (
        <CastCard key={member.id}>
          <CastImage
            src={
              member.profile_path
                ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                : defaultImage
            }
            alt={member.name}
            onError={e => {
              e.target.src = 'https://placehold.it/100x100';
            }}
          />
          <CastName>{member.name}</CastName>
          <CharacterName>{member.character}</CharacterName>
        </CastCard>
      ))}
    </CastContainer>
  );
}
