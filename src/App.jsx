import { useState, useRef, use, useEffect } from "react";
import "./App.css";
import Inputs from "./components/__organisms/Inputs/Inputs";
import Bar from "./components/__organisms/Bar/Bar";
import Card from "./components/__molecules/CreditCard/Card";
import Ending from "./components/__organisms/Ending/Ending";

function App() {
  const [cardholderName, setCardholderName] = useState("JANE APPLESEED");
  const [numbers, setNumbers] = useState("");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [CVC, setCVC] = useState("000");
  const [error, setError] = useState();
  const [yearErrors, setYearErrors] = useState();
  const [monthErrors, setMonthErrors] = useState();
  const [numberErrors, setNumberErrors] = useState();
  const [cardholderErrors, setCardholderErrors] = useState();
  const inputClasses = {
    normal: {
      big: "big-input",
      medium: "medium-input",
      small: "small-input",
    },
    error: {
      big: "big-error",
      medium: "medium-error",
      small: "small-error",
    },
  };
  const [nameClass, setNameClass] = useState(inputClasses.normal.big);
  const [numberClass, setNumberClass] = useState(inputClasses.normal.big);
  const [monthClass, setMonthClass] = useState(inputClasses.normal.small);
  const [yearClass, setYearClass] = useState(inputClasses.normal.small);
  const [cvcClass, setCvcClass] = useState(inputClasses.normal.medium);

  const [isError, setIsError] = useState();

  const errors = {
    onlyLetters: "Wrong format, letters only!",
    onlyNumbers: "Wrong format, numbers only!",
    cantBlank: "Can’t be blank!",
    wrongCVC: "CVC is not correct!",
    expiredCard: "Card is expired!",
    wrongYear: "Wrong Year!",
    wrongMonth: "Wrong Month!",
    wrongNumbers: "Wrong Numbers!",
    wrongName: "Name is wrong!",
  };

  useEffect(() => {
    if (cardholderName.length === 0) {
      setCardholderName("JANE APPLESEED");
    }
    if (numbers.length === 0) {
      setNumbers("0000 0000 0000 0000");
    }
    if (month.length === 0) {
      setMonth("00 ");
    }
    if (year.length === 0) {
      setYear("00  ");
    }
    if (CVC.length === 0) {
      setCVC("000");
    }
  }, [cardholderName, numbers, month, year]);

  function handleInputChecks() {
    if (numbers.length === 0 || numbers === "0000 0000 0000 0000") {
      setNumberClass(inputClasses.error.big);
      setNumberErrors(errors.cantBlank);
      setIsError(true);
    } else if (/[A-Za-z]/.test(numbers)) {
      setNumberErrors(errors.onlyLetters);
      setNumberClass(inputClasses.error.big);
      setIsError(true);
    } else if (numbers.length < 16) {
      setNumberErrors(errors.wrongNumbers);
      setNumberClass(inputClasses.normal.big);
      setIsError(true);
    } else {
      setIsError(false);
    }

    if (!isNaN(cardholderName)) {
      setCardholderErrors(errors.onlyLetters);
      setNameClass(inputClasses.error.big);
      setIsError(true);
    } else if (
      cardholderName.length === 0 ||
      cardholderName === "JANE APPLESEED"
    ) {
      setCardholderErrors(errors.cantBlank);
      setNameClass(inputClasses.error.big);
      setIsError(true);
    } else if (!cardholderName.includes(" ")) {
      setCardholderErrors(errors.wrongName);
      setNameClass(inputClasses.error.big);
      setIsError(true);
    } else {
      setCardholderErrors();
      setNameClass(inputClasses.normal.big);
      setIsError(false);
    }

    if (year.length === 0 || year === "00") {
      setYearErrors(errors.cantBlank);
      setYearClass(inputClasses.error.small);
      setIsError(true);
    } else if (year.length < 2) {
      setYearErrors(errors.wrongYear);
      setYearClass(inputClasses.error.small);
      setIsError(true);
    } else if (/[A-Za-z]/.test(year)) {
      setYearErrors(errors.onlyNumbers);
      setYearClass(inputClasses.error.small);
      setIsError(true);
    } else if (year < 26) {
      setYearErrors(errors.expiredCard);
      setYearClass(inputClasses.error.small);
      setIsError(true);
    } else if (year >= 26) {
      setYearErrors();
      setYearClass(inputClasses.normal.small);
      setIsError(false);
    }

    if (CVC.length === 0 || CVC === "000") {
      setError(errors.cantBlank);
      setCvcClass(inputClasses.error.medium);
      setIsError(true);
    } else if (CVC.length < 3) {
      setError(errors.wrongCVC);
      setCvcClass(inputClasses.error.medium);
      setIsError(true);
    } else if (/[A-Za-z]/.test(CVC)) {
      setError(errors.onlyNumbers);
      setCvcClass(inputClasses.error.medium);
      setIsError(true);
    } else if (CVC.length >= 3) {
      setError();
      setCvcClass(inputClasses.normal.medium);
      setIsError(false);
    }

    if (month.length === 0 || month === "00") {
      setMonthErrors(errors.cantBlank);
      setMonthClass(inputClasses.error.small);
      setIsError(true);
    } else if (month > 12) {
      setMonthErrors(errors.wrongMonth);
      setMonthClass(inputClasses.error.small);
      setIsError(true);
    } else if (/[A-Za-z]/.test(month)) {
      setYearErrors(errors.onlyNumbers);
      setMonthClass(inputClasses.error.small);
      setIsError(true);
    } else {
      setMonthErrors();
      setMonthClass(inputClasses.normal.small);
      setIsError(false);
    }
  }

  if (isError === false) {
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
        <Ending />
      </>
    );
  }

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
          CVCError={error}
          yearError={yearErrors}
          monthError={monthErrors}
          numberErrors={numberErrors}
          cardholderErrors={cardholderErrors}
          bigInputsClass={nameClass}
          bigInputsClass2={numberClass}
          smallInputsClass={monthClass}
          smallInputsClass2={yearClass}
          mediumInputClass={cvcClass}
          handleChecks={handleInputChecks}
        />
      </div>
    </>
  );
}

export default App;
