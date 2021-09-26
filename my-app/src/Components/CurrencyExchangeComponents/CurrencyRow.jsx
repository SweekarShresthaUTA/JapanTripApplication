import React from "react";
import "./CurrencyExchange.css";

export default function CurrencyRow(props) {
  const { currency, amount, onChangeAmount } = props;

  const placeHolderText = `Enter ${currency} amount`;

  return (
    <div>
      <input
        type="number"
        placeholder={placeHolderText}
        value={amount}
        onChange={onChangeAmount}
        className="input"
      />
    </div>
  );
}
