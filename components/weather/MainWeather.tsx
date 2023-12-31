import React, { useEffect, useState } from "react";
import WEATHER_API from "./const_js";
import { API_KEY } from "./const_js";
import WeatherCard from "./WeatherCard";

const MainWeather = () => {
  const [SearchText, setSearchText] = useState("");
  const [Name, setName] = useState("");
  const [Loca, setLoca] = useState("chandigarh");
  const [Data, setData] = useState(null);

  useEffect(() => {
    getdata();
  });

  const getdata = async () => {
    const data = await fetch(WEATHER_API + Loca);
    const json = await data.json();
    setData(json);
  };

  return (
    <div className="pd-4 m-4 shadow-lg w-full ">
      <div className="grid grid-flow-col pd-4 m-4 shadow-lg py-4">
        <img 
        className="col-span-2 h-10 justify-center m-2 rounded-lg shadow-lg"
        alt="logo" 
        src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png"/>
        <input
          className="col-span-5 py-2 m-2"
          type="text"
          placeholder="chandigarh"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(e)=>{
            if(e.keyCode===13){
                setLoca(SearchText);
            }
          }}
        />
        <button 
        className="col-span-3 bg-emerald-500 shadow-md hover:bg-emerald-300 rounded-lg "
        onClick={()=>{
            setLoca(SearchText);
        }}>
           GO
        </button>
      </div>
      <div>
        {
            Data && <WeatherCard data={Data}/>
        }
      </div>
    </div>
  );
};

export default MainWeather;