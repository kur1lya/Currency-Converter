const api = "https://api.exchangerate-api.com/v4/latest/UAH";
export const fetchCurrency = async () => {
  const response = await fetch(api);
  const data = await response.json();
  const result = data.rates;
  return result;
};
