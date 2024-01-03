import React, { useState, useEffect } from "react";
import "./Body.css";
import Sidebar from "./Sidebar";
import Storebar from "./Storebar";
import down from "../image/arrow-left.png";
import { STORE_URL } from "../constants.js/utils";
const Body = () => {
  const [toggle, setToggle] = useState(false);
  const [filtervalue, setFiltervalue] = useState(true);

  const [data, setData] = useState([]);
  useEffect(() => {
    apiUrl();
  }, []);
  const apiUrl = async () => {
    const data = await fetch(STORE_URL);
    const response = await data.json();
    setData(response);
    console.log(response)
  };

  const newest = () => {
    const filtered_value = data.filter((item) => (item.rating.count >= 200))
    setData(filtered_value)
  }
  const popular = () => {
    const filtered_value = data.filter((item) => (item.rating.rate >= 4))
    setData(filtered_value)
  }

  const highToLow = () => {
    const filtered_value = data.sort((a,b) =>  (b.price- a.price))
    console.log(filtered_value)
    setData(filtered_value)
  }

  const lowToHigh = () => {
    const filtered_value = data.sort((a,b) => (a.price-b.price));
    setData(filtered_value)
    console.log(filtered_value)
  }

  const handleFilter = () => {
    setFiltervalue(!filtervalue);
  };
  return (
    <>
      <div className="body-items">
        <div className="filter-item">
          <h5>
            3425 ITEMS
            <span onClick={handleFilter}>{toggle ? 'Hide Filter' : 'Show Filter'}</span>
          </h5>
        </div>
        <div className="recommendation">
          <h5 onClick={ () => setToggle(!toggle)}>
            RECOMMENDED
            <img src={down} />
          </h5>
          {toggle && (
            <div className="filter-box">
              <ul>
                <li>RECOMMENDED</li>
                <li onClick={newest}>NEWEST FIRST</li>
                <li onClick={popular}>POPULAR</li>
                <li onClick={highToLow}>PRICE : HIGH TO LOW</li>
                <li onClick={lowToHigh}>PRICE : LOW TO HIGH</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="grid-item">
        {filtervalue && <Sidebar />}
        <Storebar data={data}/>
      </div>
    </>
  );
};

export default Body;
