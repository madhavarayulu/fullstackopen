import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryInfo from "./CountryInfo";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
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

    if (event.target.value === "") {
      setSelectedCountry(null);
      setErrorMessage("");
    }
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

  const handleShowCountry = (selectedCountry) => {
    console.log("Selected Country:", selectedCountry);
    setSelectedCountry(selectedCountry);
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
        <div>
          {filteredCountries.map((country) => (
            <div key={country.cca3} style={{ height: "30px" }}>
              <p style={{ display: "inline-block", marginRight: "10px" }}>
                {country.name.common}
              </p>
              <button onClick={() => handleShowCountry(country)}>Show</button>
            </div>
          ))}
        </div>
      )}

      {filteredCountries.length === 1 && (
        <CountryInfo country={filteredCountries[0]} />
      )}

      {selectedCountry && <CountryInfo country={selectedCountry} />}
    </div>
  );
};

export default App;
