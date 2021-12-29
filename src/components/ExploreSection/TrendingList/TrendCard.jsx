/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import img from "../../../assets/Images/avatar.png";
function TrendCard(props) {
  return (
    <li style={{ backgroundColor: `${props.background}` }}>
      <div>
        <div>
          <div>{props.tag}</div>
        </div>
        <div style={{ width: "64px", height: "64px" }}>
          <img
            src={props.img}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = img;
            }}
            alt="photod"
          />
        </div>
      </div>
    </li>
  );
}

export default TrendCard;
