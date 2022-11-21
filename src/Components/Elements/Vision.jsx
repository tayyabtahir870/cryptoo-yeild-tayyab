import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Vision() {
  return (
    <div className="vision">
      <div className="container text-center py-5">
        <div>
          <p className="card-text1 mt-5">OUR VISION</p>
          <p className="card-text2">
            Cryptocurrency in <br />
            Every Wallet™
          </p>
          <div class="hstack gap-3 d-flex justify-content-center ">
            <div class=" ">
              <p className="founded">Founded in</p>
              <p className="year">2022</p>
            </div>
            <div class="vr"></div>
            <div class="">
              <p className="founded">Users</p>
              <p className="year">70M</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
