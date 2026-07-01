import React from "react";
import { useLocation } from "react-router-dom";

function CountryDetails() {
  const location = useLocation();
  const country = location.state?.country;

  if (!country) {
    return <h2>No Country Data Found</h2>;
  }

  return (
    <div className="details-page">

      <img
        src={country.flags?.png}
        alt={country.name?.common}
        className="details-flag"
      />

      <h1>{country.name?.common}</h1>

      <div className="details-grid">

        <div className="detail-card">
          <h3>Official Name</h3>
          <p>{country.name?.official}</p>
        </div>

        <div className="detail-card">
          <h3>Capital</h3>
          <p>{country.capital?.[0] || "N/A"}</p>
        </div>

        <div className="detail-card">
          <h3>Region</h3>
          <p>{country.region}</p>
        </div>

        <div className="detail-card">
          <h3>Population</h3>
          <p>{country.population?.toLocaleString()}</p>
        </div>

        <div className="detail-card">
          <h3>Country Code</h3>
          <p>{country.cca2}</p>
        </div>

        <div className="detail-card">
          <h3>Country Code 3</h3>
          <p>{country.cca3}</p>
        </div>

      </div>

      <div className="map-section">
        <h2>Country Location Map 🗺️</h2>

        <iframe
          title="country-map"
          src={`https://www.google.com/maps?q=${country.name?.common}&output=embed`}
          className="country-map"
        ></iframe>
      </div>

    </div>
  );
}

export default CountryDetails;