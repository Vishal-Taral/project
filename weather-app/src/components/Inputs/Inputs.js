import "./Inputs.scss";
import axios from "axios";
import { useState } from "react";

const Inputs = () => {
  const [apiData, setApiData] = useState({});
  const [enteredCity, setEnteredCity] = useState("");

  const apiKey = "f04ae67a40435d0317ca7747baf74512";

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

  //geting Input from input box

  const changeHandler = (e) => {
    setEnteredCity(e.target.value);
    // setEnteredCity(e.target.value);
  };

  const searchHandeler = () => {
    getApiData(enteredCity);
  };

  return (
    <div className="weather-app">
      <div className="Inputs ">
        <input type="text" className="input-box" onChange={changeHandler} />

        <button className="search-btn" onClick={searchHandeler}>
          Search
        </button>
      </div>
      <div className="weather-info">
        <div className="place-info">
          <span className="cityName">{`${apiData.location.name} , ${apiData.location.region} , ${apiData.location.country} , ${apiData.location.localtime}`}</span>
        </div>
        <div className="outer">
          <div className="img-and-temp">
            <img
              src="https://o.remove.bg/downloads/6e5ecf77-1870-4240-b64c-d3e8ef1f7d95/th-removebg-preview.png"
              alt="cloud_image"
              className="cloud_img"
            ></img>
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
      </div>
    </div>
  );
};

export default Inputs;
