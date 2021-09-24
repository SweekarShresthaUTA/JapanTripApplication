import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CurrencyExchange from "./Components/ResourcesComponents/CurrencyExchange"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/currencyExchange" component={CurrencyExchange} />
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
