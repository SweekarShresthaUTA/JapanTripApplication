import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacts from "./Components/ContactsComponents/Contacts";
import Schedule from "./Components/ScheduleComponents/Schedule";
import CurrencyExchange from "./Components/CurrencyExchangeComponents/CurrencyExchange";
import CommonPhrases from "./Components/ResourcesComponents/CommonPhrases";
import CulturalInformation from "./Components/ResourcesComponents/CulturalInformation";
import LandmarkLookup from "./Components/ResourcesComponents/LandmarkLookup";
import Login from "./Components/LoginComponents/Login";
import Weather from './Components/WeatherComponents/Weather'

// The following Switch cases Routes the application page to different
// pages based on the path provided from the imports above

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Contacts" component={Contacts} />
        <Route path="/Schedule" component={Schedule} />
        <Route path="/currencyExchange" component={CurrencyExchange} />
        <Route path="/CommonPhrases" component={CommonPhrases} />
        <Route path="/Weather" component={Weather} />
        <Route path="/CulturalInformation" component={CulturalInformation} />
        <Route path="/LandmarkLookup" component={LandmarkLookup} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
