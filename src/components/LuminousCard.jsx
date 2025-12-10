import { useState } from 'react';

const LuminousCard = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="portfolio-card-wrapper">
      <div className={`luminous-card ${isActive ? 'active' : ''}`}>
        <div className="light-layer">
          <div className="slit"></div>
          <div className="lumen">
            <div className="min"></div>
            <div className="mid"></div>
            <div className="hi"></div>
          </div>
          <div className="darken">
            <div className="sl"></div>
            <div className="ll"></div>
            <div className="slt"></div>
            <div className="srt"></div>
          </div>
        </div>

        <div className="card-content">
          <div className="logo-section">
            <a
              href="https://www.capbraco.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit CapBraco Portfolio"
            >
              <p className="cap-text">Cap</p>
              <p className="braco-text">Braco</p>
            </a>
          </div>

          <div className="bottom">
            <h4>Developed by Braco</h4>
            <p>
              © 2025 CapBraco<br />
              All rights reserved
            </p>
            <div className={`toggle ${isActive ? 'active' : ''}`} onClick={handleToggle}>
              <div className="handle"></div>
              <span>Activate Lumen</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuminousCard;
