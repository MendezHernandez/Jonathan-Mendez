import React from "react";
import "../styles/Box.css";

const Box = ({ titulo, texto, mas }) => {
  return (
    <div className="box" style={mas ? {} : { margin: "4rem 0" }}>
      {mas ? (
        ""
      ) : (
        <>
          <h2>{titulo}</h2>
          <p>{texto}</p>
        </>
      )}
      <div style={{}}>{mas}</div>
    </div>
  );
};

export default Box;
