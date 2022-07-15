import "../style/currencyInput.css";

interface CurrencyInputProps {
  amount: number;
  currency: string;
  currencies: string[];
  onAmountChange: any;
  onCurrencyChange: any;
}

function CurrencyInput(props: CurrencyInputProps) {
  return (
    <div className="group">
      <input
        type="text"
        value={props.amount}
        onChange={(ev) => props.onAmountChange(ev.target.value)}
      />
      <div className="select">
        <select
          value={props.currency}
          onChange={(ev) => props.onCurrencyChange(ev.target.value)}
        >
          {props.currencies.map((currency: any) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyInput;
