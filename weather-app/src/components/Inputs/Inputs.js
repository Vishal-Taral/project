import "./Inputs.scss";
import { useState } from "react";

const Inputs = (props) => {
  const [enteredCity, setEnteredCity] = useState("");

  const changeHandler = (e) => {
    setEnteredCity(e.target.value);
    // setEnteredCity(e.target.value);
  };

  const searchHandeler = () => {
    props.getApiData(enteredCity);
    setEnteredCity("");
  };

  

  return (
    <div className="weather-app">
      <div className="Inputs ">
        <input type="text" className="input-box" onChange={changeHandler} />

        <button className="search-btn" onClick={searchHandeler}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Inputs;
