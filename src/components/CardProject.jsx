import { React, useContext } from "react";
import "../styles/CardProject.css";
import { AppContext } from "../AppContext";
import AOS from "aos";
import "aos/dist/aos.css";
const CardProject = ({ titulo, texto, img, herramientas }) => {
  AOS.init();
  const { abrirModal } = useContext(AppContext);

  return (
    <div className="card-project" data-aos="fade-up">
      <h2>{titulo}</h2>
      <p>{texto}</p>
      <div className="ctn-imgs-project">
        {img.map((item, index) => {
          return (
            <img
              onClick={() => {
                abrirModal(item.nombreImg);
              }}
              className="img-project"
              src={item.nombreImg}
              key={index}
              alt={"imagen_proyecto"}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        {herramientas.map((item, index) => {
          return (
            <img
              key={index}
              style={{ height: "5rem" }}
              src={item.herramienta}
              alt={"herramienta"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardProject;
