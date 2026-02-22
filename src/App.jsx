import { useState, useRef, use, useEffect } from "react";
import "./App.css";
import Inputs from "./components/__organisms/Inputs/Inputs";
import Bar from "./components/__organisms/Bar/Bar";
import Card from "./components/__molecules/CreditCard/Card";

function App() {
  const [cardholderName, setCardholderName] = useState("JANE APPLESEED");
  const [numbers, setNumbers] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [CVC, setCVC] = useState("000");

  useEffect(() => {
    if (cardholderName.length === 0) {
      setCardholderName("JANE APPLESEED");
    }
    if (numbers.length === 0) {
      setNumbers("0000 0000 0000 0000");
    }
    if (month.length === 0) {
      setMonth("00");
    }
    if (year.length === 0) {
      setYear("00");
    }
    if (CVC.length === 0) {
      setCVC("000");
    }
  }, [cardholderName, numbers, month, year]);
  return (
    <>
      <Bar />
      <div className="cards">
        <Card
          cardholder={cardholderName}
          greyThings="hidden"
          className="card-container"
          month={month}
          year={year}
          cardNumber={numbers}
        />
        <Card
          coloredCardThings="hidden"
          greyThings="grey-card-things"
          className="grey-card-container"
          CVC={CVC}
        />
      </div>
      <div className="form-container">
        <Inputs
          setYear={setYear}
          setMonth={setMonth}
          setNumbers={setNumbers}
          setCardholderName={setCardholderName}
          setCVC={setCVC}
        />
      </div>
    </>
  );
}

export default App;
