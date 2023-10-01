import { useSearchParams } from 'react-router-dom';

export const SearchBar = ({ Submit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const input = searchParams.get('query') ?? '';
  const updateQuery = e => {
    e.target.value !== ''
      ? setSearchParams({ query: e.target.value })
      : setSearchParams({});
  };
  const handleSubmit = e => {
    e.preventDefault();
    input && Submit(input);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="SearchForm">
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={input}
          onChange={updateQuery}
        />
        <button type="submit" className="SearchForm-button">
          Search
        </button>
      </form>
    </>
  );
};
