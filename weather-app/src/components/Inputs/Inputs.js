import "./Inputs.scss";
// import { useState } from "react";


const Inputs = (props) => {
  // const [list, setList] = useState([]);
  // console.log(list);
  // const changeCountry = () => {
  //     setList(props.response);
  // }
  

  return (
    <div className="weather-app">
      
      <div>
      {/* <select className="dropdown-box" onChange={changeCountry}>{list.map((countryList) => {
          return(
              <option value={countryList}>{countryList}</option>
          )
        })}</select> */}
        <button className="ml-4">
          Search
        </button>
      </div>
    </div>
  );
};

export default Inputs;
