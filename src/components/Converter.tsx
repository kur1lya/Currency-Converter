import { useEffect, useState } from "react";
import { CurrencyDataProps } from "../types/currency";
import CurrencyInput from "./CurrencyInput";

function Converter(props: CurrencyDataProps) {
  let { rate } = props;
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAH");

  useEffect(() => {
    if (!!rate) {
      handleAmount1Change(1);
    }
  }, [rate]);

  function format(number: any) {
    return number.toFixed(2);
  }

  function handleAmount1Change(amount1: number) {
    setAmount2(format((amount1 * rate[currency2]) / rate[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1: string) {
    setAmount2(format((amount1 * rate[currency2]) / rate[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2: number) {
    setAmount1(format((amount2 * rate[currency1]) / rate[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2: string) {
    setAmount1(format((amount2 * rate[currency1]) / rate[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div>
      <div className="currency-input">
        <div>
          <CurrencyInput
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={Object.keys(rate)}
            amount={amount1}
            currency={currency1}
          />
        </div>
        <div>
          <CurrencyInput
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            currencies={Object.keys(rate)}
            amount={amount2}
            currency={currency2}
          />
        </div>
      </div>
    </div>
  );
}

export default Converter;
