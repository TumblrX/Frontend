import React from "react";

function FourFlexData(props) {
    const {posts}=props
  return (
    <div style={{ display: "flex",justifyContent:"space-between" }}>
      <div
        style={{ display: "flex", flexDirection: "column", minWidth: "300px" }}
      >
        {posts.map((item, index) => {
          if (index % 2 == 0) {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", minWidth: "300px" }}
      >
        {posts.map((item, index) => {
          if (index % 2 == 1) {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>
    </div>
  );
}

export default FourFlexData;
