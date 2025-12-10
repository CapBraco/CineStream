import { useState } from 'react';
import LuminousCard from './LuminousCard';

const NavBar = ({ categories, onSelect, selectedGenre }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleGenreClick = (genreId) => {
    setActiveCategory(genreId);
    onSelect(genreId);
    // Close sidebar on mobile after selection
    if (window.innerWidth <= 1024) {
      setIsOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="top-bar">
          <p className="logo">
            <i className="fa fa-film"></i>
            CineStream
          </p>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search movies..." />
          <p className="fa fa-search"></p>
        </div>

        <menu className="menu">
          <p className="menu-name">Browse Movies</p>
          <ul>
            {categories && categories.map((category) => (
              <li
                key={category.id}
                className={selectedGenre === category.id ? 'active' : ''}
              >
                <a onClick={() => handleGenreClick(category.id)}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="separator"></div>

          <p className="menu-name">Discover</p>
          <ul className="no-bullets">
            <li><a href="#trending">Trending Now</a></li>
            <li><a href="#popular">Most Popular</a></li>
            <li><a href="#upcoming">Coming Soon</a></li>
            <li><a href="#top-rated">Top Rated</a></li>
          </ul>

          <div className="separator"></div>

          <p className="menu-name">Resources</p>
          <ul className="no-bullets">
            <li><a href="#news">Latest News</a></li>
            <li><a href="#reviews">Critic Reviews</a></li>
            <li><a href="#box-office">Box Office</a></li>
            <li><a href="#top-250">Top 250</a></li>
          </ul>

          <div className="separator"></div>
        </menu>

        <LuminousCard />
      </aside>
    </>
  );
};

export default NavBar;