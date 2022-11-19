import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Deposit() {
  return (
    <div className="deposit">
      <div class="container ">
        <div class="row">
          <div className="col-md-2"></div>
          <div class="col-md-4 text-start  deposit-col">
            <p className="text1  ">CRYPTO EARN</p>
            <p className="text2">
              Deposit crypto, <br /> earn rewards
            </p>
            <p className="text3">
              Choose from 40+ cryptocurrencies and stablecoins.
            </p>
            <button className="depositbutton">
              Calculate Rewards{" "}
              <span>
                <BsArrowRight />
              </span>
            </button>
            <div className="container">
              <div className="row">
                <div className="col mt-3">
                    <p className="upto">Up to</p>
                    <p className="number">14.5%</p>
                    <p className="pa"> p.a. on cryptos</p>
                </div>
                <div className="col mt-3">
                    <p className="upto">Up to</p>
                    <p className="number">8.5%</p>
                    <p className="pa">p.a. on stablecoins</p>
                    </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <img
              className="img-fluid text-start deposit-img "
              src="Assests/Frame.png"
              alt=""
            />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
