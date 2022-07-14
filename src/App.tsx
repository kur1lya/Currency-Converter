import React, { useEffect, useState } from "react";
import "./App.css";
import Converter from "./components/Converter";
import CurrencyInput from "./components/CurrencyInput";
import { fetchCurrency } from "./services/currency";
import { Params } from "./types/currency";

function App() {
  const [currenciesData, setCurrenciesData] = useState<Params[]>([]);
  const [amountUSD, setAmountUSD] = useState(1);
  const [amountEUR, setAmountEUR] = useState(1);
  const [USD, setUSD] = useState("USD");
  const [EUR, setEUR] = useState("EUR");

  useEffect(() => {
    fetchCurrency().then((value) => {
      setCurrenciesData(value);
    });
  }, []);

  // useEffect(() => {
  //   if (!!currenciesData) {
  //     handleAmountUSDChange(1);
  //   }
  // }, [currenciesData]);

  const currencies: any = currenciesData.reduce(
    (obj, item) => ({ ...obj, [item.cc]: item.rate }),
    {}
  );

  function format(number: any) {
    return number.toFixed(4);
  }

  function handleAmountUSDChange(amountUSD: any) {
    setAmountEUR(format((amountUSD * currencies[EUR]) / currencies[USD]));
    setUSD(amountUSD);
  }

  function handleurrencyUSDChange(USD: any) {
    setAmountEUR(format((amountUSD * currencies[EUR]) / currencies[USD]));
    setUSD(USD);
  }

  function handleAmountEURChange(amountEUR: any) {
    setAmountUSD(format((amountEUR * currencies[USD]) / currencies[EUR]));
    setAmountEUR(amountEUR);
  }

  function handleCurrencyEURChange(EUR: any) {
    setAmountUSD(format((amountEUR * currencies[USD]) / currencies[EUR]));
    setEUR(EUR);
  }

  return (
    <div className="App">
      <Converter currencies={currencies} />
      <CurrencyInput
        onAmountChange={handleAmountUSDChange}
        onCurrencyChange={handleurrencyUSDChange}
        currencies={Object.keys(currencies)}
        amount={amountUSD}
        currency={USD}
      />
      <CurrencyInput
        onAmountChange={handleAmountEURChange}
        onCurrencyChange={handleCurrencyEURChange}
        currencies={Object.keys(currencies)}
        amount={amountEUR}
        currency={EUR}
      />
    </div>
  );
}

export default App;
