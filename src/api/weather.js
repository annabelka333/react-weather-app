import axios from "axios";
import { fakeData } from "../fakeData";

export async function getWeather(city) {
  const apiKey = "a34ea9a8b63af4e06cec6a6a23f5469e";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await axios.get(apiUrl);

  //   const response = new Promise((resp) => {
  //     setTimeout(() => {
  //       resp({ data: fakeData });
  //     }, 1000);
  //   });
  //   return response;
  //   return await fetch(apiUrl, {
  //     headers: {
  //       Authorization: apiKey,
  //       "Content-Type": "application/json",
  //     },
  //     method: "GET",
  //   });
}
