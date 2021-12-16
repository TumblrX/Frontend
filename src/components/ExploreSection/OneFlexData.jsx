import React from "react";

function FourFlexData(props) {
  const { posts } = props;
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex",flexDirection:"column" }}>
        {posts.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}

        
      </div>
    </div>
  );
}

export default FourFlexData;
