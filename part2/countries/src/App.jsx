import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryInfo from "./CountryInfo";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setErrorMessage("Error fetching countries");
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setErrorMessage("");
    filterCountries(event.target.value);
  };

  const filterCountries = (query) => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length > 10) {
      setFilteredCountries([]);
      setErrorMessage("Too many matches, please be more specific");
    } else {
      setFilteredCountries(filtered);
    }
  };

  return (
    <div>
      <h1>Country Information App</h1>
      <div>
        <label htmlFor="search">Searc countries </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {errorMessage && <p>{errorMessage}</p>}

      {filteredCountries.length > 1 && (
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      )}

      {filteredCountries.length === 1 && (
        <CountryInfo country={filteredCountries[0]} />
      )}
    </div>
  );
};

export default App;
