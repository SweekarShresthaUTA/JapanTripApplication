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

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Contacts" component={Contacts} />
        <Route path="/Schedule" component={Schedule} />
        <Route path="/currencyExchange" component={CurrencyExchange} />
        <Route path="/CommonPhrases" component={CommonPhrases} />
        <Route path="/CulturalInformation" component={CulturalInformation} />
        <Route path="/LandmarkLookup" component={LandmarkLookup} />
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
