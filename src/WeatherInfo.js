import React from "react";
import TimeDisplay from "./TimeDisplay";
import Forecast from "./Forecast";

export default function WeatherInfo({
  cityName,
  currentTempCelsius,
  currentTempFahrenheit,
  windSpeed,
  description,
  iconSrc,
  iconAlt,
  isCelsius,
  onTemperatureToggle,
  forecast,
}) {
  return (
    <div>
      <TimeDisplay />
      <h1>
        <strong>Current Weather For:</strong>
      </h1>
      <h2>{cityName}</h2>
      <img src={iconSrc} alt={iconAlt} />
      <h5>
        <span onClick={onTemperatureToggle}>°{isCelsius ? "C" : "F"}</span> /{" "}
        <span onClick={onTemperatureToggle}>°{isCelsius ? "F" : "C"}</span>
      </h5>
      <div className="row">
        <div className="col-6">
          <div className="current-temp">
            <strong>Temperature:</strong>
            <br />
            {isCelsius
              ? `${currentTempCelsius}°C`
              : `${currentTempFahrenheit}°F`}
          </div>
        </div>
        <div className="col-6">
          <div className="current-wind-humidity">
            <strong>Wind:</strong> <span>{windSpeed} m/s</span>
            <br />
            <span>{description}</span>
          </div>
        </div>
      </div>
      <h3>
        <strong>Six Day Forecast:</strong>
      </h3>
      <Forecast forecast={forecast} />
    </div>
  );
}
