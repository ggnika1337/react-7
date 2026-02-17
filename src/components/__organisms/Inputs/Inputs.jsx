import React from "react";
import "./Inputs.css";

function Inputs() {
  return (
    <>
      <form>
        <div className="input-container">
          <h1 className="text">CARDHOLDER NAME</h1>
          <input
            className="big-inputs"
            type="text"
            name=""
            id=""
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        <div className="input-container">
          <h1 className="text">CARD NUMBER</h1>
          <input
            className="big-inputs"
            type="text"
            name=""
            id=""
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
        <div className="small-medium">
          <div className="input-container">
            <h1 className="text">EXP. DATE (MM/YY)</h1>
            <div className="smalls">
              <input
                className="small-input"
                type="text"
                name=""
                id=""
                placeholder="MM"
              />
              <input
                className="small-input"
                type="text"
                name=""
                id=""
                placeholder="YY"
              />
            </div>
          </div>

          <div className="input-container">
            <h1 className="text">CVC</h1>
            <input
              className="medium-input"
              type="text"
              name=""
              id=""
              placeholder="e.g. 123"
            />
          </div>
        </div>
        <button>Confirm</button>
      </form>
    </>
  );
}

export default Inputs;
