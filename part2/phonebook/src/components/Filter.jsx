const Filter = ({ search, handleInputSearch }) => {
  return (
    <div>
      filter shown with <input value={search} onChange={handleInputSearch} />
    </div>
  );
};

export default Filter;
