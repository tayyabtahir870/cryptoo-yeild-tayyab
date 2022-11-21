import React from 'react'
import {AiFillApple} from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom";
import {SiGoogleplay} from 'react-icons/si'

function Header() {

  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <div>
      <div className="header  ">
        <nav class="navbar navbar-expand-lg   ">
          <div class="container ">
            <a class="navbar-brand" href="/">
              
            <h3 className='cryptoo-yeild'>Crypto Yield</h3>
            </a>
            

            <button
              class="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="hhhhh">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item"></li> 
                  <li class="nav-item">
                   
                    <a class="nav-link" >
                    <p className='nft'>NFT</p>
                    </a>
                
                  </li> &nbsp;&nbsp;&nbsp;&nbsp;

                  <li class="nav-item">
                   
                   <a class="nav-link" >
                   <p className='nft'>Price</p>
                   </a>
               
                 </li> &nbsp;&nbsp;&nbsp;&nbsp;     

                 <li class="nav-item">
                   
                   <a class="nav-link" >
                   <p className='nft'>Products</p>
                   </a>
               
                 </li> &nbsp;&nbsp;&nbsp;&nbsp;

                 <li class="nav-item">
                   
                   <a class="nav-link" >
                   <p className='nft'>Compamy</p>
                   </a>
               
                 </li> &nbsp;&nbsp;&nbsp;&nbsp;

                 <li class="nav-item">
                   
                   <a class="nav-link" >
                   <p className='nft'>Learn</p>
                   </a>
               
                 </li> &nbsp;&nbsp;&nbsp;&nbsp;

                 <li class="nav-item">
                   
                   <a className="nav-link apple" >
                  <AiFillApple  size={25} className="apple-color"/>
                   </a>
               
                 </li> &nbsp;&nbsp;&nbsp;&nbsp;

                 <li class="nav-item">
                   
                   <a class="nav-link apple" >
                   <SiGoogleplay size={25} className="apple-color"/>
                   </a>
               
                 </li> &nbsp;&nbsp;&nbsp;&nbsp;
                 <li class="nav-item">
                   
                 <button
                  type="button"
                  className="btn btn-primary headerbutton"
                  onClick={logout}
                >
                  Logout
                </button>

                &nbsp;

                <Link  
        to="/contact"
        type="button"
                  className="btn btn-primary headerbutton"
                  // onClick={logout}
                >
                  Contact Us
                </Link>
               
                 </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header