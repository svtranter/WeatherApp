import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import WeatherCards from "./WeatherCards";
import * as Icon from "react-bootstrap-icons";
import axios from "axios";

function App() {
  const [cardsData, cCardsData] = useState([]);
  const [weather, cWeather] = useState({
    date: "",
    description: "",
    temp_min: "",
    temp_max: "",
    wind_speed: "",
  });

  const fetchData = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=51.5074&lon=0.1278&units=metric&appid=e323e39c7383106d01601eadcafdf8cc"
      )
      .then((res) => {
        cCardsData(res.data.daily);
      });
  };

  useEffect(() => {
    cWeather({
      date: "13/08/21",
      description: "Sunny intervals and a moderate breeze",
      temp_min: "12",
      temp_max: "19",
      wind_speed: "16",
    });
    fetchData();
  }, []);

  return (
    <>
      <Navbar bg="warning" variant="dark">
        <Navbar.Brand>
          Weather <Icon.CloudHaze2Fill size={50} />
        </Navbar.Brand>
      </Navbar>
      {cardsData.map((i) => {
        return <WeatherCards card={i} />;
      })}
      {/* <WeatherCards cards={weather} /> */}
    </>
  );
}

export default App;
