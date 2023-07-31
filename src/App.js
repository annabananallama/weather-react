import React from "react";
import "./styles.css";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="app">
      <div className="content">
        <SearchBar />
        <WeatherInfo />
        <div className="forecast"></div>
        <Footer />
      </div>
    </div>
  );
}
