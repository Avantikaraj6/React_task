import React from 'react'
import "./Footer.css";
import us_logo from "../image/Group.png";
import insta_logo from "../image/Insta.png";
import fb_logo from "../image/a.png";
import gpay from "../image/gpay.png";
import mastercard from "../image/mastercard.png";
import apay from "../image/apay.png";
import amex from "../image/amex.png";
import opay from "../image/opay.png";
import paypal from "../image/paypal.png";
const Footer = () => {
  return (
    <div className="footer">
        <div className="row">
        <div className="column left">
        <h2>BE THE FIRST TO KNOW</h2>
        <p> Sign up for updates from mettta muse.</p>
        <input type="textbox" placeholder="Enter your e-mail..." /><button>SUBSCRIBE</button>
        </div>
        <div className="column">
        <h2>CONTACT US</h2>
    <p>+44 221 133 5360</p>
    <a href="customercare@mettamuse.com">customercare@mettamuse.com</a>
    <h2>CURRENCY</h2>
    <div className="usa-logo">
    <img src={us_logo} alt="usa-flag" className="flag-icon"/><li>USD</li></div>
    <p className="t-text">Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
        </div>

        <div className="row-2">
        <div className="column left links">
            <div className="first-col">
       <h2>mettā muse</h2>
       <ul>
        <li>About Us</li>
        <li>Stories</li>
        <li>Artisans</li>
        <li>Boutiques</li>
        <li>Contact Us</li>
        <li>EU Compliances Docs</li>
        <li>Join as a Seller</li>
       </ul>
            </div>
            <div className="second">
            <h2>QUICK LINKS</h2>
       <ul className="">
        <li>Orders & Shipping</li>
        <li>Join/Login as a Seller</li>
        <li>Payment & Pricing</li>
        <li>Return & Refunds</li>
        <li>FAQs</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
       </ul>
            </div>
            </div>
            <div className='column'>
              <h2>FOLLOW US</h2>
              <div>
                <img src={insta_logo} />
                <img src={fb_logo} />
              </div>
              <h2>mettā muse Accepts</h2>
              <span>
                <img src={gpay} alt="google pay" className="p-mode"/>
                <img src={mastercard} alt="mastercard" className="p-mode"/>
                <img src={paypal} alt="paypal" className="p-mode"/>
                <img src={amex} alt="amex" className="p-mode"/>
                <img src={apay} alt="apple pay" className="p-mode" />
                <img src={opay} alt="airtel pay" className="p-mode"/>
              </span>
            </div>
        </div>
        <p className="c-text">Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
  )
}

export default Footer