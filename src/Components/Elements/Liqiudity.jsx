import React from "react";

function Liqiudity() {
  return (
    <div className="liqiudity">
      <div class="container  ">
        <div class="row columns" >
          <div className="col-md-1"></div>
          <div class="col">
            <h3 className="text">Liquidity</h3>
            <ul className="list-unstyled list">
              <li>
                Deep order book liquidity in <br /> all market conditions
              </li>
            </ul>
          </div>
          <div class="col-md-2">
            <h3 className="text">Speed</h3>
            <ul className="list-unstyled list">
              <li>2.7m TPS matching engine</li>
              <li>50 micro second core latency</li>
            </ul>
          </div>
          <div class="col">
            <h3 className="text">Security</h3>
            <ul className="list-unstyled list">
              <li>SOC2 Type 1 Compliance</li>
              <li>PCI:DSS 3.2.1 Level 1 compliance</li>
              <li>ISO/IEC 27001:2013</li>
              <li>ISO/IEC 27701:2019</li>
              <li>ISO 22301:2019</li>
              <li>
                Singapore Data Protection <br /> Trust Mark
              </li>
            </ul>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Liqiudity;
