import React from "react";
import logo from "../image/Vector.png";
import search from "../image/search-normal.png";
import cart from "../image/heart.png";
import wishlist from "../image/shopping-bag.png";
import down from "../image/arrow-left.png";
import profile from "../image/profile.png";
import "./Header.css";
import { header_item } from "../constants.js/utils";
const Header = () => {
  return (
    <>
      <div className="head-icon">
        <div>
          <img src={logo} className="logo" />
        </div>
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="icons">
          <img src={search} className="icon" />
          <img src={wishlist} className="icon" />
          <img src={cart} className="icon" />
          <img src={profile} className="icon" />
          <span>
            <h6 className="icon">
              ENG
              <img src={down} />
            </h6>
          </span>
        </div>
      </div>
      <div className="logo-variety">
        {header_item.map((item) => (
          <h5>{item}</h5>
        ))}
      </div>
      <div className="discover-text">
      <h1>DISCOVER OUR PRODUCTS</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
      </div>
    </>
  );
};

export default Header;
