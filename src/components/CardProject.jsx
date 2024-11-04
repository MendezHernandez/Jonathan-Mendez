import { React, useContext } from "react";
import "../styles/CardProject.css";
import { AppContext } from "../AppContext";
import AOS from "aos";
import "aos/dist/aos.css";
const CardProject = ({ titulo, texto, img, herramientas, inDevelop }) => {
  AOS.init();
  const { abrirModal } = useContext(AppContext);

  const TagInDevelop = ({ showTag }) => {
    if (showTag === true) {
      return <span className="tag-in-develop">En desarrollo</span>;
    }
  };

  return (
    <div className="card-project" data-aos="fade-up">
      <div className="ctn-title-and-tag-develop">
        <h2>{titulo}</h2>
        <TagInDevelop showTag={inDevelop} />
      </div>
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
