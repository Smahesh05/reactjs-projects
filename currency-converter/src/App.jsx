import { config as configDotenv } from "dotenv";
import { useEffect, useState } from "react";
configDotenv();

import "./App.css";

const apikey = process.env.API_KEY;

const App = () => {
  const [info, setInfo] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState();
  //
  var myHeaders = new Headers();
  myHeaders.append("apikey", apikey);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  useEffect(() => {
    fetch(`https://api.apilayer.com/currency_data/list`, requestOptions)
      .then((response) => response.json())
      .then((res) => setInfo(res.currencies))
      .catch((error) => console.log("error", error));
  }, []);

  //
  useEffect(() => {
    setOptions(Object.keys(info));
  }, [info]);

  const handleConvert = () => {
    fetch(
      `https://api.apilayer.com/currency_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setOutput(result.result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="App">
      <div className="heading">
        <h1>Currency converter</h1>
      </div>
      <div className="container mb-4">
        <div className="left">
          <h3>Amount</h3>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="middle">
          <h3>From</h3>
          <select
            type="text"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {options.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="right">
          <h3>To</h3>
          <select
            type="text"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {options.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="result">
        <button onClick={handleConvert}>Convert</button>
        <h2>Converted Amount:</h2>
        <p>
          {amount + " " + fromCurrency + " = " + output
            ? output
            : 0 + " " + toCurrency}
        </p>
      </div>
    </div>
  );
};

export default App;
