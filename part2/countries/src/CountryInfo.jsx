import React from "react";

const CountryInfo = ({ country, weather }) => {
  const { name, languages, flags, area, capital } = country;

  return (
    <div>
      <h2>{name.common}</h2>
      <p>Capital: {capital && capital.join(", ")}</p>
      <p>Area: {area} km²</p>
      <div>
        Languages:{" "}
        {languages && (
          <ul>
            {Object.values(languages).map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
        )}
      </div>
      <img
        src={flags && flags.png}
        alt={flags.alt}
        style={{ width: "150px", height: "150px" }}
      />
      {weather ? (
        <div>
          <p>Temprature: {weather.current.temp_c} Celcius</p>
          <img src={weather.current.condition.icon} />
          <p>Wind: {weather.current.wind_kph} kph</p>
        </div>
      ) : (
        <p>No weather information available</p>
      )}
    </div>
  );
};

export default CountryInfo;
