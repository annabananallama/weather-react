import React from "react";
import { formatDay } from "./utils";

function Forecast({ forecast }) {
  return (
    <div className="row">
      {forecast.slice(0, 6).map((forecastDay, index) => (
        <div className="col-2" key={index}>
          <div className="weather-forecast-date">
            {formatDay(forecastDay.dt)}
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png`}
            alt=""
            width="42"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">
              H:{Math.round(forecastDay.temp.max)}°C
            </span>
            <span className="weather-forecast-temperature-min">
              L:{Math.round(forecastDay.temp.min)}°C
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
