import React from "react";

function Sponsors({ sponsors }) {
  return (
    <div className="sponsors-section">
      <h2>Our Sponsors</h2>
      <ul className="sponsor-list">
        {sponsors.map((sponsor, index) => (
          <li key={index} className="sponsor-item">
            <img
              src={sponsor.logoUrl}
              alt={sponsor.name}
              className="sponsor-logo"
            />
            <p>{sponsor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sponsors;
