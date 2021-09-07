import React, { useState } from "react";
import { fetchForecasts } from "./api/fetchForecasts";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [forecast, setForecast] = useState({});

  const search = async (e: React.KeyboardEvent<any>) => {
    if (e.key === "Enter") {
      const data = await fetchForecasts({ query });
      setForecast(data);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search By City..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />

      {forecast.main && (
        <div className="city">
          <h1 className="city-name">
            <span>{forecast.name}</span>
            <span>{forecast.sys.country}</span>
          </h1>
          <div className="city-temp">
            {Math.round(forecast.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt={forecast.weather[0].description}
            />
            <p>{forecast.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
