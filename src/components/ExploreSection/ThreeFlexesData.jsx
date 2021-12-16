import React from "react";

function FourFlexData(props) {
    const {posts}=props
  return (
    <div style={{ display: "flex" ,justifyContent:"space-between"}} className="Three">
      <div
        style={{ display: "flex", flexDirection: "column", minWidth: "300px" }}
      >
        {posts.map((item, index) => {
          console.log(item);
          if (index % 3 === 0) {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", minWidth: "300px" }}
      >
        {posts.map((item, index) => {
          if (index % 3 === 1) {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", minWidth: "300px" }}
      >
        {posts.map((item, index) => {
          if (index % 3 === 2) {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>
    </div>
  );
}

export default FourFlexData;
