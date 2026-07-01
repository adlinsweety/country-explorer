import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] =
    useState("name");

  const [region, setRegion] =
    useState("All");

  // Fetch Countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,cca2,cca3,population"
        );

        const data =
          await response.json();

        setCountries(
          Array.isArray(data)
            ? data
            : []
        );

      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  // FILTER COUNTRIES
  const filteredCountries =
    countries.filter((country) => {

      const value =
        search.toLowerCase();

      const name =
        country?.name?.common
          ?.toLowerCase() || "";

      const capital =
        country?.capital?.[0]
          ?.toLowerCase() || "";

      const code =
        country?.cca2
          ?.toLowerCase() || "";

      let matchesSearch = true;

      // SEARCH TYPE
      if (search !== "") {

        if (
          searchType === "name"
        ) {
          matchesSearch =
            name.includes(value);
        }

        else if (
          searchType ===
          "capital"
        ) {
          matchesSearch =
            capital.includes(value);
        }

        else if (
          searchType ===
          "code"
        ) {
          matchesSearch =
            code.includes(value);
        }

        else if (
          searchType ===
          "letter"
        ) {
          matchesSearch =
            name.startsWith(
              value
            );
        }
      }

      // REGION FILTER
      const matchesRegion =
        region === "All"
          ? true
          : country.region ===
            region;

      return (
        matchesSearch &&
        matchesRegion
      );
    });

  return (
    <div className="countries-page">

      <h1>
        Explore Countries 🌍
      </h1>

      {/* SEARCH + FILTER */}
      <div className="search-container">

        {/* SEARCH TYPE */}
        <select
          value={searchType}
          onChange={(e) =>
            setSearchType(
              e.target.value
            )
          }
        >
          <option value="name">
            Search by Country
          </option>

          <option value="capital">
            Search by Capital
          </option>

          <option value="code">
            Search by Country Code
          </option>

          <option value="letter">
            Search by First Letter
          </option>
        </select>

        {/* SEARCH INPUT */}
        <input
          type="text"
          placeholder={
            searchType ===
            "name"
              ? "Search country..."
              : searchType ===
                "capital"
              ? "Search capital..."
              : searchType ===
                "code"
              ? "Search country code..."
              : "Search first letter..."
          }
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        {/* REGION FILTER */}
        <select
          value={region}
          onChange={(e) =>
            setRegion(
              e.target.value
            )
          }
        >
          <option value="All">
            All Regions
          </option>

          <option value="Asia">
            Asia
          </option>

          <option value="Europe">
            Europe
          </option>

          <option value="Africa">
            Africa
          </option>

          <option value="Americas">
            Americas
          </option>

          <option value="Oceania">
            Oceania
          </option>
        </select>

      </div>

      {/* COUNTRY LIST */}
      <div className="countries-grid">

        {filteredCountries.length >
        0 ? (

          filteredCountries.map(
            (country) => (
              <CountryCard
                key={
                  country.cca3
                }
                country={
                  country
                }
              />
            )
          )

        ) : (

          <h2>
            No Countries Found
          </h2>

        )}

      </div>

    </div>
  );
}

export default Countries;