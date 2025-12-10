import { useEffect, useState } from 'react';
import './App.css';
import GenresContainer from './containers/GenresContainer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='window-margin'>
      <div className="window">
        <div className={`top-bar ${scrolled ? 'scrolled' : ''}`}>
          <div className="app-logo">
            <i className="fa fa-film"></i> CineStream
          </div>
        </div>

        <GenresContainer />
      </div>
    </div>
  );
}

export default App;
