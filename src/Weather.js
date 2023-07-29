import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-app">
      <div className="container">
        <div className="card">
          <div className="row">
          </div>
          <h2>San Francisco</h2>
          <div>
            <li>
              <ul>Last Updated: Thursday at 18:00</ul>
              <ul>Sunny</ul>
            </li>
          </div>
          <div>
            <h1>66</h1>
            <div>
              <span className="f-temp">°F</span>
              <span className="c-temp">°C</span>
              <li>
                <ul>Humidity: 71%</ul>
                <ul>Wind: 14 MPH</ul>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}