import React from "react";
import {FiArrowUpRight} from 'react-icons/fi'

function Trade() {
  return (
    <div className='trade'>
    <div className="container text-center mt-5">
        <div className="row">
            <div>
            <p className='crypto-exchange'>CRYPTO.COM EXCHANGE</p>
            </div>
            <div>
                <h1>Trade with confidence on the world’s fastest <br /> and most secure crypto exchange</h1>
            </div>
            <div className=" desktop py-5 ">
            <div className='d-flex'>
                <div>
                    <img src="Assests/monitor.png" width={"70px"} className='img-fluid mt-3 comp' alt="computer" />
                </div> &nbsp; &nbsp; &nbsp;
                <div className='text-start m-3'>
                    <div>
                    <p>DESKTOP</p>
                    </div>
                    <div>
                    <a className="exchange" href="/">Go to Exchange &nbsp; <FiArrowUpRight size={"20px"}/> </a>
                </div>
                    </div> &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                    <div>
                    <img src="Assests/dummyphone.png" width={"80px"} className='img-fluid mt-3 mob' alt="computer" />
                </div> &nbsp; &nbsp; &nbsp;
                <div className='text-start m-3'>
                    <div>
                    <p>MOBILE APP</p>
                    </div>
                    <div>
                        <img src="Assests/playstore.png" alt="" /> &nbsp; &nbsp;
                        <img src="Assests/app.png" alt="applestore" />
                </div>
                    </div>
            </div>
            </div>
            <div className='mt-5'>
            <img src="Assests/tradepic.png" className='img-fluid tradepic' width={"780px"}
            alt="trade" />
            </div>
        </div>
    </div>
</div>
  );
}

export default Trade;
