import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./styles.css";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";
import LocationButton from "./LocationButton";

export default function App() {
  const [cityName, setCityName] = useState("");
  const [currentTempCelsius, setCurrentTempCelsius] = useState(null);
  const [currentTempFahrenheit, setCurrentTempFahrenheit] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [description, setDescription] = useState("");
  const [iconSrc, setIconSrc] = useState("");
  const [iconAlt, setIconAlt] = useState("");
  const [isCelsius, setIsCelsius] = useState(true);

  const fetchData = (city) => {
    let apiKey = "16c0c42e9a748ab88f78a65c6f902070";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then((response) => {
      showTemperature(response.data);
    });
  };

  const showTemperature = (data) => {
    setCityName(data.name);
    setWindSpeed(Math.round(data.wind.speed));
    setDescription(data.weather[0].description);
    setCurrentTempCelsius(Math.round(data.main.temp));
    setCurrentTempFahrenheit(Math.round((data.main.temp * 9) / 5 + 32));

    setIconSrc(
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    setIconAlt(data.weather[0].description);
  };

  const handleTemperatureToggle = () => {
    setIsCelsius(!isCelsius);
  };

  const getCurrentPosition = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      let apiKey = "16c0c42e9a748ab88f78a65c6f902070";

      let currentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

      axios.get(currentWeatherApiUrl).then((response) => {
        showTemperature(response.data);
      });
    });
  }, []);

  useEffect(() => {
    getCurrentPosition();
  }, [getCurrentPosition]);

  return (
    <div className="app">
      <div className="content">
        <SearchBar onSearch={fetchData} />
        <LocationButton onClick={getCurrentPosition} />
        <WeatherInfo
          cityName={cityName}
          currentTempCelsius={
            isCelsius ? currentTempCelsius : currentTempFahrenheit
          }
          // ... (rest of your props)
        />
        <div className="forecast"></div>
        <Footer />
      </div>
    </div>
  );
}
