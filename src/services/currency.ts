import { currencies, Params } from "../types/currency";

export const fetchCurrency = async () => {
  const response = await fetch(
    `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json`
  );
  const data = await response.json();
  const result = data.filter(
    (item: Params) => item.cc === currencies.EUR || item.cc === currencies.USD
  );
  return result;
};
