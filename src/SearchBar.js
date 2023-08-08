import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(location);
  };

  return (
    <div className="search-bar">
      <strong className="inline-block">Search Locations:</strong>
      <form className="inline-block" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleInputChange}
        />
      </form>

      <div className="inline-block">
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={handleSubmit}
        >
          Enter
        </button>
      </div>
    </div>
  );
}
