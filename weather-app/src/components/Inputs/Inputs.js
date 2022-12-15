
import './Inputs.scss'
import axios from 'axios'
import { useEffect } from 'react';

const Inputs = () => {
   const apiKey ='f04ae67a40435d0317ca7747baf74512';

   const getApiData = (cityName) => {
    const getData = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityName}`;

    axios.get(getData).then(
        (response) => {
            console.log(response);
        }
    ).catch(
        (error) => {
            console.log("error", error);
        }
    )
   }
useEffect(
    () => {
        getApiData("pune");
    },[]
)
   

  return (
    <div>
        <div className='Inputs'>
            <input type='text' className='input-box' />
            <button className='search-btn' >Search</button>
        </div>
    </div>
  )
}

export default Inputs