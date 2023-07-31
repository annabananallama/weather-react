import React from "react";
import icon from "./weather.png";

export default function WeatherInfo() {
  return (
    <div>
      <button className="currentLocation">Search current location</button>
      <h4>Monday 14:02</h4>
      <h1>
        <strong>Current Weather For:</strong>
      </h1>
      <h2>London</h2>
      <img src={icon} alt="Weather Icon" />
      <h5>
        <span>°C</span> / <span>°F</span>
      </h5>
      <div className="row">
        <div className="col-6">
          <div className="current-temp">
            <strong>Temperature:</strong>
            <br />
            24°C
          </div>
        </div>
        <div className="col-6">
          <div className="current-wind-humidity">
            <strong>Wind:</strong> <span>7 m/s</span>
            <br />
            <span>few clouds</span>
          </div>
        </div>
      </div>
      <h3>
        <strong>Six Day Forecast:</strong>
      </h3>
    </div>
  );
}
