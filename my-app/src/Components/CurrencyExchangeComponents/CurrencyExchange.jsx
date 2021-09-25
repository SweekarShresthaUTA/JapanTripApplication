import React from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";
import JapanBackground from "../../Images/JapanBackground.png";
import "./CurrencyExchange.css";
import CurrencyRow from "./CurrencyRow";

const CurrencyExchange = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <CoreNavBar
        title="MavsAbroad"
        firstMenuTitle="Contacts"
        secondMenuTitle="Schedule"
        thirdMenuTitle="Currency Exchange"
        dropDownMenuTitle="Resources"
        firstDropDownMenuOption="Common Phrases"
        secondDropDownMenuOption="Landmark Lookup"
        thirdDropDownMenuOption="Cultural Information"
      />
      <br />
      <div className="row body">
          <h3 className="body">Currency Exchange</h3>
      </div>
      <div className="container body">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <CurrencyRow />
            </div>
          </div>
          <div class="col-lg-6">
            <div>
              <CurrencyRow />
            </div>
          </div>
        </div>
      </div>
      <img src={JapanBackground} className="jp-img" alt="Jpn-Background-Img" />
      {/* src for iteration documentation for the image above -> https://www.pngwing.com/en/free-png-byvdy */}
    </div>
  );
};

export default CurrencyExchange;
