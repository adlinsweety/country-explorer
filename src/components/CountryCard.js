import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img
        src={country?.flags?.png}
        alt={country?.name?.common}
        className="country-image"
      />

      <div className="country-content">
        <h2>{country?.name?.common}</h2>

        <p>
          Capital: {country?.capital?.[0] || "N/A"}
        </p>

        <p>
          Region: {country?.region}
        </p>

        <p>
          Code: {country?.cca2}
        </p>

        <Link
          to="/country-details"
          state={{ country }}
        >
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default CountryCard;