import React from "react";
import "./Card.css";
import Ovals from "../../__atoms/ColoredOvals/Ovals";

function Card({
  className,
  greyThings,
  coloredCardThings,
  month,
  year,
  cardholder,
  cardNumber,
  CVC,
}) {
  return (
    <>
      <div className={className}>
        <div className="ovals"></div>
        <div className={coloredCardThings}>
          <div className="white-ovals">
            <div className="full-oval"></div>
            <div className="clear-oval"></div>
          </div>
          <div className="card-infos">
            <span className="card-number">{cardNumber}</span>
            <div className="name-expiration">
              <h1 className="cardholder">{cardholder}</h1>
              <span className="expiration">
                {month}/{year}
              </span>
            </div>
          </div>
        </div>
        <div className={greyThings}>
          <div className="grey-bar"></div>
          <div className="black-bar">
            <h1 className="grey-card-text">{CVC}</h1>
          </div>

          <div className="lines-container">
            <div className="line">
              <div className="line-long"></div>
              <div className="line-medium"></div>
              <div className="line-medium"></div>
              <div className="line-short"></div>
            </div>
            <div className="line-padding">
              <div className="line-medium"></div>
              <div className="line-sixty"></div>
              <div className="line-fortysix"></div>
              <div className="line-short"></div>
            </div>
            <div className="line">
              <div className="line-short"></div>
              <div className="line-medium"></div>
              <div className="line-medium"></div>
              <div className="line-long"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
