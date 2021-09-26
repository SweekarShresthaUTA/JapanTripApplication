// CurrencyExchange main page that will render the USD to JPY conversion

import React, { useEffect, useState } from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";
import JapanBackground from "../../Images/JapanBackground.png";
import "./CurrencyExchange.css";
import CurrencyRow from "./CurrencyRow";

const CurrencyExchange = () => {

  // Call to the API that will provide us the latest USD To JPY rate, specifically $1 equivlent in JPY
  // We use the data returned back as JSON to set it to our USD_JPY_RATE
  const BASE_URL =
    "https://free.currconv.com/api/v7/convert?q=USD_JPY&compact=ultra&apiKey=49e1dd59324690c7911f";

  // setUSD_JPY_RATE sets the value of USD_JPY_RATE whenever the app changes state -> or in this case whenever new amount is queried or 
  //      API Call indicates the exchange rate has changed
  // 
  // setAmount sets the state of the amount variable to the converted currency value either from USD to JPY or vice versa
  // 
  // setAmountInFromCurrency sets a boolean value amountInFromCurrency -> true, indicating that we are converting from USD to JPY
  //      OR it sets amountInFromCurrency -> false, indicating that we are converting from JPY to USD 
  const [USD_JPY_RATE, setUSD_JPY_RATE] = useState(0);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;

  if(amountInFromCurrency)
  {
    // USD is provided and we are and we are getting the JPY equivalent by multiplying the exchange rate
    fromAmount = amount;
    toAmount = amount * USD_JPY_RATE;
  }
  else 
  {
    // JPY is provided and we are and we are getting the USD equivalent by diving the exchange rate
    toAmount = amount;
    fromAmount = amount / USD_JPY_RATE;
  }

  // hook that renders its passed in anonymous passed as the first thing to be rendered in the page entirely.
  // Fetches the API to get the latest exchange rate
  // Everytime the page refreshes, the anonymous function is the first thing that is called to provide latest exchange rate
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setUSD_JPY_RATE(data.USD_JPY));
  }, []);


  const handleFromAmountChange = (e) => 
  {
    // seting JPY based on input provided in USD and setting the boolean amountInFromCurrency useState from above to true
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  const handleToAmountChange = (e) => 
  {
    // seting USD based on input provided in JPY and setting the boolean amountInFromCurrency useState from above to false
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <div className="eliminateHorizontalScroll">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      {/* Rendering the Navbar for this page */}
      <CoreNavBar
        title="MavsAbroadJapan"
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
        {/* Providing latest change rate, rounded 2 decimal points */}
        <h3 className="body">Currency Exchange</h3>
        <h4>Today's Rate → $1.00 = ¥{Math.round(USD_JPY_RATE * 100) / 100}</h4>
      </div>
      <div className="container body">
        <div className="row">
          <div className="col-lg-6">
            <div>
              {/* Another JSX component created to handle the input from user */}
              $ amount<CurrencyRow amount={fromAmount} onChangeAmount={handleFromAmountChange} currency="USD"/>
            </div>
          </div>
          <div class="col-lg-6">
            <div>
              {/* Another JSX component created to handle the input from user */}
              ¥ amount<CurrencyRow amount={toAmount} onChangeAmount={handleToAmountChange} currency="JPY" />
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
