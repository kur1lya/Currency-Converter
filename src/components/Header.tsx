import { CurrencyDataProps } from "../types/currency";

function Header(props: CurrencyDataProps) {
  let { rate } = props;
  return (
    <div className="header">
      <div className="rates">{"USD" + "/" + rate.USD}</div>
      <div className="rates">{"EUR" + "/" + rate.EUR}</div>
    </div>
  );
}

export default Header;
