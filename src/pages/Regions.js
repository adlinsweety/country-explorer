import {
  useState,
  useEffect
} from "react";

import CountryCard from
"../components/CountryCard";

function Regions() {

  const [selectedRegion,
  setSelectedRegion] =
  useState("Asia");

  const [countries,
  setCountries] =
  useState([]);

  const [loading,
  setLoading] =
  useState(true);

  useEffect(() => {

    setLoading(true);

    fetch(
      `https://restcountries.com/v3.1/region/${selectedRegion}`
    )
      .then((res) =>
        res.json()
      )
      .then((data) => {

        setCountries(data);
        setLoading(false);

      })
      .catch((err) => {

        console.log(err);
        setLoading(false);

      });

  }, [selectedRegion]);

  const regions = [
    "Asia",
    "Europe",
    "Africa",
    "Americas",
    "Oceania"
  ];

  return (
    <div className="regions-page">

      <div className="regions-header">

        <h1>
          Explore By Region
        </h1>

        <p>
          Browse countries
          continent wise
        </p>

      </div>

      <div className="region-buttons">

        {regions.map((region)=>(
          <button
            key={region}
            onClick={() =>
              setSelectedRegion(
                region
              )
            }
            className={
              selectedRegion
              === region
              ? "active-region"
              : ""
            }
          >
            {region}
          </button>
        ))}

      </div>

      {loading ? (

        <div className="loader">
          Loading...
        </div>

      ) : (

        <div className="countries-grid">

          {countries.map(
            (country)=>(
              <CountryCard
                key={
                  country.cca3
                }
                country={country}
              />
          ))}

        </div>
      )}

    </div>
  );
}

export default Regions;