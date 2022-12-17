import React from "react";
import "./Information.scss";
import Inputs from "../Inputs/Inputs";
import axios from "axios";
import { useState } from "react";

const Information = () => {
  const [apiData, setApiData] = useState({});

  const apiKey = "de3e9f6ada1c1e5d0c4cb16e85b98ea7";  // ACCESS_KEY

  //API Call

  const getApiData = (cityName) => {
    const getData = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityName}`;
    axios
      .get(getData)
      .then((response) => {
        if (!response.data.error) {
          const apiResponse = response.data;
          console.log("response", apiResponse);
          setApiData(apiResponse);
        } else {
          console.log(
            `Response error: code: ${response.data.error.code}, info: ${response.data.error.info}`
          );
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
        <Inputs getApiData={getApiData}/>
      {/* <div className="weather-info">
        <div className="place-info">
          <span className="cityName">{`${apiData.location.name} , ${apiData.location.region} , ${apiData.location.country} , ${apiData.location.localtime}`}</span>
        </div>
        <div className="outer">
          <div className="img-and-temp">
            <img
              src={`${apiData.current.weather_icons}`}
              alt="cloud_image"
              className="cloud_img"
            />
            <div className="temp">
              <h1>{`${apiData.current.temperature} `} &deg; C</h1>
              <h1>{`${apiData.current.weather_descriptions[0]}`}</h1>
            </div>
          </div>

          <div className="wind-info">
            <h2>{`Wind Speed :-  ${apiData.current.wind_speed} kmph`}</h2>
            <h2>{`Wind Degree :- ${apiData.current.wind_degree}`}</h2>
            <h2>{`Wind Direction :- ${apiData.current.wind_dir}`}</h2>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Information;
