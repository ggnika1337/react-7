import React, { useState } from "react";
import "./Inputs.css";

function Inputs() {
  useState;

  return (
    <form>
      <div className="input-container">
        <label htmlFor="cardholderName" className="text" required>
          CARDHOLDER NAME
        </label>
        <input
          className="big-inputs"
          type="text"
          name="cardholderName"
          id="cardholderName"
          placeholder="e.g. Jane Appleseed"
          required
        />
      </div>

      <div className="input-container">
        <label htmlFor="cardNumber" className="text">
          CARD NUMBER
        </label>
        <input
          className="big-inputs"
          type="number"
          name="cardNumber"
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          required
        />
      </div>

      <div className="small-medium">
        <div className="input-container">
          <label className="text">EXP. DATE (MM/YY)</label>
          <div className="smalls">
            <input
              className="small-input"
              type="text"
              name="expMonth"
              id="expMonth"
              placeholder="MM"
              maxLength={2}
              required
            />
            <input
              className="small-input"
              type="text"
              name="expYear"
              id="expYear"
              placeholder="YY"
              maxLength={2}
              required
            />
          </div>
        </div>

        <div className="input-container">
          <label htmlFor="cvc" className="text">
            CVC
          </label>
          <input
            className="medium-input"
            type="text"
            name="cvc"
            id="cvc"
            placeholder="e.g. 123"
            maxLength={4}
            required
          />
        </div>
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
}

export default Inputs;
