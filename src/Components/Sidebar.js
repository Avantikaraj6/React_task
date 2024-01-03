import React, { useState } from "react";
import "./Sidebar.css";
import arrow from "../image/arrow-left.png";
import { sidebar_items } from "../constants.js/utils";
import { sidebar_variety } from "../constants.js/utils";
const Sidebar = () => {
  const [indexValue, setIndexValue] = useState([]);
  const [expand, setExpand] = useState(false);
  const handleExpand = (e, itemindex) => {
    setExpand(!expand);
    setIndexValue(sidebar_variety[itemindex]);
    console.log(sidebar_variety[itemindex]);
  };
  return (
    <div className="item-1">
      <div>
        <h6 className="first">
          <input type="checkbox" />
          CUSTOMIZBLE
        </h6>
      </div>
      {sidebar_items.map((item, itemindex) => (
        <div key={item} onClick={(e) => handleExpand(e, itemindex)}>
          <h6 className="side-items">
            {item}
            <img src={arrow} alt="expand-arrow" />
          </h6>
          <p>All</p>
          {expand &&
            indexValue.map((item) => (
              <div>
                <input type="checkbox" />
                <span>{item}</span>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
