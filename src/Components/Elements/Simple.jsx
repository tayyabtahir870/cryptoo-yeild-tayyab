import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Simple() {
  return (
    <div className="deposit">
      <div class="container ">
        <div class="row">
          <div className="col-md-2"></div>

          <div class="col-md-4">
            <img
              className="img-fluid text-start deposit-img "
              src="Assests/Frame.png"
              alt=""
            />
          </div>
          <div class="col-md-4 text-start  deposit-col">
            <p className="text1  ">CRYPTO.COM DEFI</p>
            <p className="text2">DeFi Made Simple</p>
            <p className="text3">
              Choose from 40+ cryptocurrencies and stablecoins.
            </p>
           
            <p className="defi">DeFi Wallet. <span className="keys">Your Keys, Your Crypto.</span></p>
            <p className="defi">DeFi Earn. <span className="keys"> No lock-up period and stable returns.</span></p>
            <p className="defi">DeFi Swap. <span className="keys"> Swap DeFi coins and earn Triple Yield.</span></p>
            <button className="depositbutton">
              Go to Crypto.com DeFi{" "}
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Simple;
