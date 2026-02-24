import React from "react";
import "./Ending.css";
import Checkmark from "../../../assets/Images/checkmark.svg";

function Ending() {
  return (
    <>
      <div className="ending">
        <div className="checkmark">
          <img src={Checkmark} alt="" />
        </div>
        <div className="texts">
          <h1 className="thanks">THANK YOU!</h1>
          <p>We’ve added your card details</p>
        </div>
        <button>Continue</button>
      </div>
    </>
  );
}

export default Ending;
