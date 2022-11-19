import React from "react";
import {BsArrowRight} from 'react-icons/bs'

function Card() {
  return (
    <div className="card">
      <div className="text-center">
        <p className="card-text1">CRYPTO.COM VISA CARD</p>
        <p className="card-text2">The only card you need</p>
        <p className="card-text3">
          Enjoy up to 5% back on all spending with your sleek, pure metal card. <br />
          No annual fees. Top-up with fiat or crypto.
        </p>
        <button className="btn">Choose Your Cards <span><BsArrowRight/></span></button>
      </div>
    </div>
  );
}

export default Card;
