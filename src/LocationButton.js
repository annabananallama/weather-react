import React from "react";

export default function LocationButton({ onClick }) {
  return (
    <button className="currentLocation" onClick={onClick}>
      Search current location
    </button>
  );
}
