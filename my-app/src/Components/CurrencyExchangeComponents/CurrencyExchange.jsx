import React, { useEffect, useState } from "react";
import CoreNavBar from "../NavbarComponents/CoreNavbar";
import JapanBackground from "../../Images/JapanBackground.png";
import "./CurrencyExchange.css";
import CurrencyRow from "./CurrencyRow";

const CurrencyExchange = () => {
  const BASE_URL =
    "https://free.currconv.com/api/v7/convert?q=USD_JPY&compact=ultra&apiKey=49e1dd59324690c7911f";

  const [USD_JPY_RATE, setUSD_JPY_RATE] = useState(0);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;

  if(amountInFromCurrency)
  {
    fromAmount = amount;
    toAmount = amount * USD_JPY_RATE;
  }
  else 
  {
    toAmount = amount;
    fromAmount = amount / USD_JPY_RATE;
  }


  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setUSD_JPY_RATE(data.USD_JPY));
  }, []);


  const handleFromAmountChange = (e) => 
  {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  const handleToAmountChange = (e) => 
  {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

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
        <h4>Today's Rate → $1.00 = ¥{Math.round(USD_JPY_RATE * 100) / 100}</h4>
      </div>
      <div className="container body">
        <div className="row">
          <div className="col-lg-6">
            <div>
              $ amount<CurrencyRow amount={fromAmount} onChangeAmount={handleFromAmountChange} currency="USD"/>
            </div>
          </div>
          <div class="col-lg-6">
            <div>
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
