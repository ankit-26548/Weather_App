import React, { useEffect, useState } from 'react'
import './App.css'
import Temperature from './Components/Temperature'
import Highlights from './Components/Highlights'

function App() {
  const[city, setCity] = useState("New Delhi");
  const[WeatherData, setWeatherData] = useState(null);
  const apiURL = `http://api.weatherapi.com/v1/current.json?key=1132a977590348b08c0204850241008&q=${city}&aqi=no`;

    useEffect(() => {
      if(!city) return;
 

  fetch(apiURL)
  .then((response)=>{
    if(!response.ok){
      throw new Error("Error");
    }
   
    return response.json();
  })
  .then((data)=>{
    console.log(data);
    setWeatherData(data);
    //console.log(WeatherData.current.temp_c);


  })
  .catch((e)=>{
    console.log(e);

  })

}, [city])






  return (
  
    <div className='h-screen bg-slate-900 flex justify-center align-top'>
      
      <div className=' h-1/3 w-1/6 mt-40'>
  <Temperature city={city} setCity={setCity} weatherData={WeatherData}>
   
  </Temperature>
      </div>
      
      <div className=' h-1/3 w-1/3 p-10 mt-40 grid grid-cols-2 gap-6'>
      <h2 className='text-slate-200 text-2xl col-span-2'>Today's Highlights</h2>
      <Highlights />
      <Highlights/>
      <Highlights />
      <Highlights/>
      </div>
    </div>
  )
}

export default App