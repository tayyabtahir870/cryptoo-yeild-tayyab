import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div class="container text-start">
        <div class="row ">
          <div class="col-md-2 col-6 mt-5">
            <h6 className="footer-heading ">App</h6>
            <ul className="list-unstyled footer-list">
              <li>Buy and Sell</li>
              <li>Crypto Earn</li>
              <li>Crypto Credit</li>
              <li>Crypto.com Pay</li>
            </ul>
          </div>
          <div class="col-md-2 col-6   mt-5">
            <h6 className="footer-heading">Exchange</h6>
            <ul className="list-unstyled footer-list">
              <li>Exchange Home</li>
              <li>Margin Trading</li>
              <li>Derivatives Trading</li>
              <li>The Syndicate</li>
              <li>Supercharger</li>
              <li>Trading Arena</li>
              <li>Commerce</li>
            </ul>
          </div>
          <div class="col-md-2 col-6  mt-5">
            <h6 className="footer-heading">Blockchain</h6>
            <ul className="list-unstyled footer-list">
              <li>Crypto.org Chain</li>
              <li>Chain Explorer</li>
            </ul>
          </div>
          <div class="col-md-2 col-6  mt-5">
            <h6 className="footer-heading">Resources</h6>
            <ul className="list-unstyled footer-list">
              <li>Prices</li>
              <li>Site Widgets</li>
              <li>Tax</li>
              <li>Support</li>
            </ul>
          </div>
          <div class="col-md-4 col-6  mt-5">
            <div>
              <img src="Assests/appstore.png" alt="" />
              <img src="Assests/Group.png" alt="" />
            </div>
            <div className="mb-2">
              <BsFacebook color="#A5ABB3" /> &nbsp;&nbsp;&nbsp;
              <BsTwitter color="#A5ABB3" /> &nbsp;&nbsp;&nbsp;
              <FiInstagram color="#A5ABB3" /> &nbsp;&nbsp;&nbsp;
              <BsLinkedin color="#A5ABB3" /> &nbsp;&nbsp;&nbsp;
              <BsGoogle color="#A5ABB3" /> &nbsp;&nbsp;&nbsp;
              <BsYoutube color="#A5ABB3" />
            </div>

            <div>
              <BsApple color="#A5ABB3" /> &nbsp;&nbsp;&nbsp;
              <BsPinterest color="#A5ABB3" /> &nbsp;&nbsp;&nbsp;
              <SiDiscord color="#A5ABB3" /> &nbsp;&nbsp;&nbsp;
              <BsTelegram color="#A5ABB3" /> &nbsp;&nbsp;&nbsp;
              <BsMedium color="#A5ABB3" /> &nbsp;&nbsp;&nbsp;
              <BsGithub color="#A5ABB3" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-2 col-6">
            <h6 className="footer-heading">Cards</h6>
            <ul className="list-unstyled footer-list">
              <li>Metal Visa Cards</li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <h6 className="footer-heading">Commerce</h6>
            <ul className="list-unstyled footer-list">
              <li>Pay for Business</li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <h6 className="footer-heading">DeFi</h6>
            <ul className="list-unstyled footer-list">
              <li>Wallet</li>
              <li>Swap</li>
              <li>Earn</li>
              <li>Dashboard</li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <h6 className="footer-heading">Company</h6>
            <ul className="list-unstyled footer-list">
              <li>About</li>
              <li>Careers</li>
              <li>News</li>
              <li>Security</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
          <h6 className="footer-heading">Learn</h6>
            <ul className="list-unstyled footer-list">
              <li>What's Trending</li>
              <li>Product News</li>
              <li>Events</li>
              <li>University</li>
              <li>Research</li>
              <li>Market Updates</li>
            </ul>
          </div>
          <div className="col-md-2">
          
        
          </div>
        </div>
        <div className="row">
            <  hr className="line" />
            <p className="footer-text">Copyright © 2018 - 2022 Crypto.com. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
