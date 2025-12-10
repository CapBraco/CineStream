const GenreSelector = ({ categories, onSelect, selectedGenre }) => {
  return (
    <div className="genre-section">
      <div className="genre-header">
        <h2 className="genre-title">Browse by Genre</h2>
        <div className="genders">
          <label htmlFor="genres">Select Genre:</label>
          <select
            id="genres"
            value={selectedGenre || ''}
            onChange={(e) => onSelect(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default GenreSelector;
