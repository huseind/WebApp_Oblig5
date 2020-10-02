import React, { useState } from 'react';

const Search = ({ searchCompleted }) => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    const word = e.target.value;
    setSearch(word);
    searchCompleted(word);
  };

  return (
    <section className="filterCompleted">
      <input
        type="text"
        value={search}
        className="filterByDate"
        id="filter"
        onChange={handleSearch}
        placeholder="Search by title"
      />
    </section>
  );
};

export default Search;
