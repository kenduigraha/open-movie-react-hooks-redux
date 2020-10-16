// eslint-disable-next-line
import React, { useState } from 'react';

interface IPropsSearch {
  search: Function;
  setCurrPage: Function;
}

const Search = ({ search, setCurrPage }: IPropsSearch) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    search(searchValue, 1);
    // set curr Page to default 1
    setCurrPage(1);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
