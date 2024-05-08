import { useState } from 'react';
import { FormBtn, InputSearch, SearchFormStyled } from './Searchbar.styled';
import { SearchIcon } from 'components/SearchIcon/SearchIcon';

export const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = evt => {
    setSearch(evt.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    handleSearch(search);
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <SearchIcon />
      </FormBtn>
      <InputSearch
        value={search}
        onChange={handleChange}
        placeholder="What is the name of the movie?"
        name="search"
        required
        autoFocus
      />
    </SearchFormStyled>
  );
};
