import React from "react";
import "../styles/Header.css";
import Linkeding from "../assets/icons/linkedin.png";
import { useInView } from "react-intersection-observer";
import PDF from "../assets/JonathanCV.pdf";

const Header = () => {
  const [ref, inView] = useInView();

  return (
    <header>
      {/* <img style={{padding: '5px', maskImage: 'linear-gradient(to top, transparent .1%, black)'}} src={FotoJoni} alt="foto" /> */}
      <div className="ctn-nombre">
        <h1 ref={ref}>Jonathan Ezequiel Méndez Hernández</h1>
        {inView ? window.history.pushState({}, "", "#sobre-mi") : ""}
        <h2>Desarrollador web</h2>
        <div className="ctn-btn-cv-icon">
          <a download={"Jonathan_Méndez_CV"} href={PDF} className="btn-cv">
            Descargar CV
          </a>
          <a
            className="ctn-icon-header"
            href="https://www.linkedin.com/in/jonathan-méndez-bb338129b"
            target="_blank"
          >
            <img src={Linkeding} alt="Linkeding" />
          </a>
          {/* <a className='ctn-icon-header' href="https://github.com/MendezHernandez" target="_blank"><img src={Github} alt="" /></a> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
