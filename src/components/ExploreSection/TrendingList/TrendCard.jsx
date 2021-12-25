import React from "react";
import img from "../../../assets/Images/Project_128-09.jpg";
function TrendCard() {
  return (
    <li>
      <div>
        <div>
          <div>911 fox</div>
          <div>#tag</div>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </li>
  );
}

export default TrendCard;
