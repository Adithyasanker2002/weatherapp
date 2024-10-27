import React, { useState } from "react";
import "./App.css";
import dan from "./assets/pic4.jpg"
import dan1 from "./assets/pic5.jpg"

function App() {
  const [city, setCity] = useState("kakkanad");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
      );
      if (!response.ok) throw new Error("City not found or an error occurred");
      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (error) {
      setError(error.message);
      setWeather(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
  <div id="can" >
    <img id="pic" width={"100%"} height={"100%"} src={dan} alt="" />
      <h1 id="hw">Weather App</h1>
      <form onSubmit={handleSearch}>
        <input id="his"
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button id="fin" type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <img id="win" width={"100%"} height={"100%"} src={dan1} alt="" />
      <h2 id="heavy">{weather.name}, {weather.sys.country}</h2>
        <p id="heavy1"> {weather.main.temp} °C</p>
        
        <p id="heavy3"> {weather.main.humidity}% </p>
        <p id="heavy4">{weather.wind.speed} m/s <br /> <span id="jin">Wind Speed</span></p>
        <i class="fa-solid fa-wind windy"></i>
        <i class="fa-solid fa-water windy1"></i>
        <span id="jini">Humidity</span>
      </div>
      )}
    </div>
  );
}

export default App;


