import { useEffect, useState } from "react";
import "./App.css";
import Converter from "./components/Converter";
import Header from "./components/Header";
import { fetchCurrency } from "./services/currency";

function App() {
  const [currenciesData, setCurrenciesData] = useState([]);

  useEffect(() => {
    fetchCurrency().then((value) => {
      setCurrenciesData(value);
    });
  }, []);

  return (
    <div className="App">
      <Header rate={currenciesData} />
      <h1 className="body-text"> Currency Converter</h1>
      <Converter rate={currenciesData} />
    </div>
  );
}

export default App;
