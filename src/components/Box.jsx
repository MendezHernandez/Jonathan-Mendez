import React from "react";
import "../styles/Box.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Box = ({ titulo, texto, mas }) => {
  AOS.init();

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
      <div data-aos="fade-right" style={{}}>
        {mas}
      </div>
    </div>
  );
};

export default Box;
