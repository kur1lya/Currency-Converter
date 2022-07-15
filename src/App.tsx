import React, { useEffect, useState } from "react";
import "./App.css";
import Converter from "./components/Converter";
import { fetchCurrency } from "./services/currency";
import { Params } from "./types/currency";

function App() {
  const [currenciesData, setCurrenciesData] = useState<Params[]>([]);

  useEffect(() => {
    fetchCurrency().then((value) => {
      setCurrenciesData(value);
    });
  }, []);

  return (
    <div className="App">
      <Converter currenciesData={currenciesData} />
    </div>
  );
}

export default App;
