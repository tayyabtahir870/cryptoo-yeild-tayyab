import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="container   ">
        <div className="row">
          <div className="col-md-5 text-end heroimg mt-5">
            <img className="img-fluid   " src="Assests/Frame.png" alt="" />
          </div>
          <div className="col-md-7 textcenter p-5 mt-5  ">
            <div>
              <p className="heading    ">
                The World’s Fastest Growing Crypto App
              </p>
            </div>
            <div className="d-flex">
              <div>
                <img src="Assests/tick.png " alt="" width={25} />
              </div>
              <div>
                {" "}
                <p className="paratext ">
                  {" "}
                  Join 50m+ users buying and selling 250+ cryptocurrencies at
                  true cost
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <img src="Assests/tick.png " alt="" width={25} />
              </div>
              <div>
                {" "}
                <p className="paratext ">
                  {" "}
                  Spend with the Crypto Yeild Visa Card and get up to 5% back
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <img src="Assests/tick.png " alt="" width={25} />
              </div>
              <div>
                {" "}
                <p className="paratext ">
                  {" "}
                  Grow your portfolio by receiving rewards up to 14.5% on your
                  crypto assets
                </p>
              </div>
            </div>
            <div>
              <img
                className="img-fluid"
                src="Assests/hero.png"
                alt=""
                width={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
