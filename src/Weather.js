import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import Spinner from "react-bootstrap/Spinner";
import { getWeather } from "./api/weather";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({
    ready: false,
    isLoading: false,
  });

  useEffect(() => {
    async function getData() {
      const data = await getWeather(props.defaultCity);
      handleResponse(data);
      setWeatherData({ ...weatherData, ...data.data });
    }
    getData();
  }, []);

  const [city, setCity] = useState("");
  const handleResponse = (response) => {
    console.log(response.data);
    setWeatherData({
      isLoading: false,
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: "Saturday 23:00",
    });
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    setWeatherData({ ...weatherData, isLoading: true });
    // const apiKey = "a34ea9a8b63af4e06cec6a6a23f5469e";
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    // axios.get(apiUrl).then(handleResponse);
    // setTimeout(() => {}, 3000);

    const data = await getWeather(props.defaultCity);
    handleResponse(data);
  };
  // handleSubmit();
  if (weatherData.isLoading) {
    return (
      <div className="Weather">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  console.log("Hello2");
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
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
        <h1>{weatherData.city || props.defaultCity}</h1>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="mr-2"
            />
            <div>
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind:{weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
