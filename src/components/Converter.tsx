import { useEffect, useState } from "react";
import { Params } from "../types/currency";
import CurrencyInput from "./CurrencyInput";

interface Props {
  currencies: Params[];
}
function Converter(props: any) {
  // const [amountUSD, setAmountUSD] = useState(1);
  // const [amountEUR, setAmountEUR] = useState(1);
  // const [USD, setUSD] = useState("USD");
  // const [EUR, setEUR] = useState("EUR");
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAH");
  const [rates, setRates] = useState([]);

  // useEffect(() => {
  //   if (!!props.currenciesData) {
  //     handleAmount1Change(1);
  //   }
  // }, [props.currenciesData]);

  const currencies: any = props.currenciesData.reduce(
    (obj: any, item: any) => ({ ...obj, [item.cc]: item.rate }),
    {}
  );
  currencies["UAH"] = 1;
  console.log(currencies);
  function format(number: any) {
    return number.toFixed(4);
  }

  // function handleAmountUSDChange(amountUSD: any) {
  //   setAmountEUR(format((amountUSD * currencies[EUR]) / currencies[USD]));
  //   setUSD(amountUSD);
  // }

  // function handleCurrencyUSDChange(USD: any) {
  //   setAmountEUR(format((amountUSD * currencies[EUR]) / currencies[USD]));
  //   setUSD(USD);
  // }

  // function handleAmountEURChange(amountEUR: any) {
  //   setAmountUSD(format((amountEUR * currencies[USD]) / currencies[EUR]));
  //   setAmountEUR(amountEUR);
  // }

  // function handleCurrencyEURChange(EUR: any) {
  //   setAmountUSD(format((amountEUR * currencies[USD]) / currencies[EUR]));
  //   setEUR(EUR);
  // }
  function handleAmount1Change(amount1: number) {
    setAmount2(
      format((amount1 * currencies[currency2]) / currencies[currency1])
    );
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1: string) {
    setAmount2(
      format((amount1 * currencies[currency2]) / currencies[currency1])
    );
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2: number) {
    setAmount1(
      format((amount2 * currencies[currency1]) / currencies[currency2])
    );
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2: string) {
    setAmount1(
      format((amount2 * currencies[currency1]) / currencies[currency2])
    );
    setCurrency2(currency2);
  }

  return (
    <div>
      <div className="header">
        {props.currenciesData.map((item: any) => {
          return <div className="rates">{item.cc + "/" + item.rate}</div>;
        })}
      </div>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(currencies)}
        amount={amount1}
        currency={currency1}
      />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(currencies)}
        amount={amount2}
        currency={currency2}
      />
      {/* <CurrencyInput
        onAmountChange={handleAmountUSDChange}
        onCurrencyChange={handleCurrencyUSDChange}
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
      /> */}
    </div>
  );
}

export default Converter;
