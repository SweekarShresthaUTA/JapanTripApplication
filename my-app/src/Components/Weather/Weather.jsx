import React, { useState, useEffect } from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";

const Weather = () => {
  // State
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("tokyo");
  const [state, setState] = useState("tokyo");

  // API KEY AND URL
  const apiKey = "9bcc04e9a1fa71c03e599acc037a8439";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  // Side effect
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  console.log(apiData);

  const inputHandler = (event) => {
    setGetState(event.target.value);
    setState('');
  };

  const submitHandler = () => {
    setState(getState);
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <>
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
              <label for="location-name" class="col-form-label">
                Enter Location :
              </label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="location-name"
                class="form-control"
                onChange={inputHandler}
                value={getState}
              />
            </div>
            <button className="btn btn-primary mt-2" onClick={submitHandler}>
              Search
            </button>
          </div>

          <div className="card mt-3 mx-auto" style={{ width: "60vw" }}>
            {apiData.main ? (
              <div class="card-body text-center">
                <img
                  src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                  alt="weather status icon"
                  className="weather-icon"
                />

                <p className="h2">
                  {Math.round(((kelvinToFarenheit(apiData.main.temp))*(9/5))+32)}&deg; F
                </p>

                <p className="h5">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <strong>{apiData.name}</strong>
                </p>
              </div>
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
