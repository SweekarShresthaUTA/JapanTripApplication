// JSX component created to handle user input for currency amounts

import React from "react";
import "./CurrencyExchange.css";

export default function CurrencyRow(props) {
  // props includes currency -> either USD or JPY
  //       includes amount -> actual numerical amount passed in
  //       includes onChangeAmount -> function tohandle the input change
  const { currency, amount, onChangeAmount } = props;

  const placeHolderText = `Enter ${currency} amount`;

  return (
    <div>
      <input
        type="number"
        placeholder={placeHolderText}
        value={Math.round(amount*100)/100}
        onChange={onChangeAmount}
        className="input"
      />
    </div>
  );
}
