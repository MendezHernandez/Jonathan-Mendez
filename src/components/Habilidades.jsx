import React from "react";
import Title from "./Title";
import Box from "./Box";
import { skills } from "../Data/skills";
import "../styles/Habilidades.css";
import { useInView } from "react-intersection-observer";

const Habilidades = () => {
  const [ref, inView] = useInView();
  function Table() {
    return skills.map((item, index) => {
      return (
        <div style={{ padding: "2rem" }} key={index} ref={ref}>
          <h3 style={{ fontSize: "large" }}>{item.titulo}</h3>
          {inView ? window.history.pushState({}, "", "#habilidades") : ""}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {item.atributos.map((item, index) => {
              return (
                <div className="ctn-icon-habilidad" key={index}>
                  <img
                    className="icon-habilidad"
                    src={item.img}
                    alt={item.img}
                  />
                  <span
                    className="nombre-habilidad"
                    style={{ userSelect: "none" }}
                  >
                    {item.nombre}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <Title title={"Habilidades"} />
      <Box mas={Table()} />
    </>
  );
};

export default Habilidades;
