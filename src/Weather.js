import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <ul>
          <h1>Kyiv</h1>
          <li>Tuesday 23:00</li>
          <li>Mostly cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly cloudy"
                className="mr-2"
              />
              <div>
                <span className="temperature">{Math.round(temperature)}</span>
                <span className="units">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation 0%</li>
              <li>Humidity 70%</li>
              <li>Wind 16km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a34ea9a8b63af4e06cec6a6a23f5469e";
    let city = "Kyiv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading.....";
  }
}
