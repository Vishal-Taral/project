import React, { useEffect } from "react";
import "./Information.scss";
// import Inputs from "../Inputs/Inputs";
import axios from "axios";
import { useState } from "react";

const Information = () => {
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);

  const baseURL = "http://localhost:8000/data1";

  const getJsonData = () => {
    axios
      .get(baseURL)
      .then((response) => {
        const jsonResponse = response.data.countries;
        setCountryList(jsonResponse);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getJsonData();
  }, []);

  const changeCountry = (event) => {
    const selectedCountry = countryList.find(
      (c) => c.country === event.target.value
    );

    console.log("selectedCountry =>", selectedCountry);
    setStateList(selectedCountry.states);
  };

  const stateOptions = countryList.map((country, key) => (
    <option key={key}>{country.country}</option>
  ));
  console.log("state", stateList);
  // const states = stateList.map((state,key) => <option key={key}>{state}</option>);
  return (
    <div className="weather-info">
      <div>
        <select className="dropdown-box" onChange={changeCountry}>
          {stateOptions}
        </select>
      </div>

      <div>
        <select className="dropdown-box ml-3">
          {/* {states} */}
          {stateList.map((s) => (
            <option>{s}</option>
          ))}
        </select>
      </div>

      <button className="ml-4">Search</button>

      {/* <Inputs response = {Response} /> */}
    </div>
  );
};

export default Information;
