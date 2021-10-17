import React, { useState, useEffect } from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";
import styles from "./Weather.module.css";

const Weather = () => {
  // Different use state each of which handles when the state of the program changes during render
  // the Api data useState is just to set the credentials
  // getState() and setState is by default set to Tokyo
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("");
  const [state, setState] = useState("tokyo");

  // API key and openweathermap api website
  const apiKey = "9bcc04e9a1fa71c03e599acc037a8439";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  // useeffect, first thing that happens when the page is rendered is an API call to openweather map
  // using the credentials
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  // handles the input provided by the user from input search bar, the onChange event triggers the
  // event and the setGetState is changed to event.target.value which is the value that triggers the event
  // in this case, the event being the search query such as 'Tokyo'
  const HandleInput = (event) => {
    setGetState(event.target.value);
  };

  // function to handle and setState based on the user query that we retrieved from onChange and add it to useState
  const HandleSubmit = () => {
    setState(getState);
    setGetState("");
  };

  // convert form kelvin to fahrenheit because the api returns kelvin
  const TemperatureConversion = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <>
      {/* rendering the navbar */}
      <CoreNavBar
        title="MavsAbroadJapan"
        firstMenuTitle="Contacts"
        secondMenuTitle="Schedule"
        thirdMenuTitle="Currency Exchange"
        dropDownMenuTitle="Resources"
        firstDropDownMenuOption="Common Phrases"
        secondDropDownMenuOption="Landmark Lookup"
        thirdDropDownMenuOption="Cultural Information"
        fourthDropDownMenuOption="Weather"
      />
      <div className="App">
        <header className="d-flex justify-content-center align-items-center"></header>
        <div className="container">
          <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
            <div class="col-auto">
              <br />
              <br />
              <h1>Weather</h1>
              <br />
              <br />
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="location-name"
                class="form-control"
                onChange={HandleInput}
                value={getState}
                placeholder="Search for a city..."
              />
            </div>
            <button className="btn btn-primary mt-2" onClick={HandleSubmit}>
              Search
            </button>
          </div>
          <br />
          <br />

          <div className={styles.weather}>
            {apiData.main ? (
              <div class="card-body text-center">
                <img
                  src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                  alt="weather status icon"
                  className="weather-icon"
                />

                <p className="h2">
                  {/* converting to fahrenheit */}
                  {Math.round(
                    TemperatureConversion(apiData.main.temp) * (9 / 5) + 32
                  )}
                  &deg; F
                </p>

                <p className="h5">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <strong>{apiData.name}</strong>
                </p>
              </div>
            ) : (
              <h4>City not found...</h4>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
