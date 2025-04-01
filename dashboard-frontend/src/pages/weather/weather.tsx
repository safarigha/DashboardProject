import React, { useState } from "react";
import WeatherSearch from "./components/weatherSearch";
import WeatherMap from "./components/weatherMap";
import { toast } from "react-toastify";
import axios from "axios";

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  const handleSearch = async (city: string) => {
    try {
      const apiKey = "75c739e754142de7cf263f620ed6ba62";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=fa`
      );
      setWeatherData(response.data);
    } catch (error) {
      toast.error("خطا در واکشی آب‌وهوا");
    }
  };

  return (
    <div className="min-h-screen p-4">
      <WeatherSearch onSearch={handleSearch} />
      {weatherData && (
        <div className="mt-6 bg-white shadow-lg rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center text-gray-700 space-y-4 sm:space-y-0 sm:space-x-8 rtl:space-x-reverse">
          <div className="text-center sm:text-right">
            <h2 className="text-2xl font-extrabold">{weatherData.name}</h2>
            <p className="text-sm text-gray-500">{weatherData.sys.country}</p>
          </div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weather-icon"
              className="w-16 h-16"
            />
            <div>
              <p className="text-xl font-bold">
                {Math.round(weatherData.main.temp - 273.15)}°C
              </p>
              <p className="text-sm text-gray-500">
                {weatherData.weather[0].description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-600">
            <span>رطوبت:</span>
            <span>{weatherData.main.humidity}%</span>
            <span>باد:</span>
            <span>{weatherData.wind.speed} m/s</span>
            <span>فشار:</span>
            <span>{weatherData.main.pressure} hPa</span>
          </div>
        </div>
      )}

      <div className="mt-4">
        <WeatherMap weatherData={weatherData} onSelectLocation={() => {}} />
      </div>
    </div>
  );
};

export default Weather;
