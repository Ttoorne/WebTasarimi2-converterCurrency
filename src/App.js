import React, { useState } from "react";
import "./App.css";

const API = "https://api.exchangerate-api.com/v4/latest";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [convertedAmount, setConvertedAmount] = useState("");

  const convertCurrency = async (e) => {
    e.preventDefault();
    if (!amount.trim()) {
      alert("Alanı doldurunuz");
      return;
    }

    const response = await fetch(`${API}/${fromCurrency}`);
    const data = await response.json();
    const rate = data.rates[toCurrency];
    const result = (parseFloat(amount) * rate).toFixed(2);

    setConvertedAmount(result);
  };

  return (
    <div className="wrapper">
      <header>Para Birimi Dönüştürücü</header>
      <form>
        <div>
          <label htmlFor="amount">Tutar</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="drop-list">
          <div className="from">
            <label htmlFor="fromCurrency"></label>
            <div className="select-box">
              <img
                src={`https://flagsapi.com/${
                  fromCurrency[0] + fromCurrency[1]
                }/flat/64.png`}
                alt=""
              />
              <select
                id="fromCurrency"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
                <option value="RUB">RUB</option>
                <option value="KGS">KGS</option>
                <option value="JPY">JPY</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
                <option value="CNY">CNY</option>
                <option value="SAR">SAR</option>
                <option value="AED">AED</option>
                <option value="KZT">KZT</option>
                <option value="UZS">UZS</option>
              </select>
            </div>
          </div>
          <img
            className="icon"
            style={{ width: "30px", height: "30px" }}
            src="https://freepngimg.com/download/money/48819-5-exchange-png-file-hd.png"
          />
          <div className="to">
            <label htmlFor="toCurrency"></label>
            <div className="select-box">
              <img
                src={`https://flagsapi.com/${
                  toCurrency[0] + toCurrency[1]
                }/flat/64.png`}
                alt=""
              />
              <select
                id="toCurrency"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
                <option value="RUB">RUB</option>
                <option value="KGS">KGS</option>
                <option value="JPY">JPY</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
                <option value="CNY">CNY</option>
                <option value="SAR">SAR</option>
                <option value="AED">AED</option>
                <option value="KZT">KZT</option>
                <option value="UZS">UZS</option>
              </select>
            </div>
          </div>
        </div>

        {convertedAmount && (
          <div className="exchange-rate">
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </div>
        )}
        <button onClick={convertCurrency}>Dönüştür</button>
      </form>
    </div>
  );
};

export default CurrencyConverter;
