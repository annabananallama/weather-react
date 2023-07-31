import React from "react";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <strong className="inline-block">Search Locations:</strong>
      <form className="inline-block">
        <input type="text" placeholder="Enter location" />
      </form>

      <div className="inline-block">
        <button type="button" className="btn btn-outline-light">
          Enter
        </button>
      </div>
    </div>
  );
}
