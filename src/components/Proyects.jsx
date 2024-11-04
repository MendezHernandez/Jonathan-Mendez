import React from "react";
import Title from "./Title";
import CardProject from "./CardProject";
import { useInView } from "react-intersection-observer";
import { Projects } from "../Data/dataProjects";

const Proyects = () => {
  const [ref, inView] = useInView();

  return (
    <div style={{ position: "relative" }}>
      <span
        style={{ position: "absolute", bottom: "20rem", height: "70%" }}
        ref={ref}
      ></span>
      {inView ? window.history.pushState({}, "", "#proyectos") : ""}
      <Title title={"Proyectos"} />
      {Projects.map((item, index) => {
        return (
          <CardProject
            inDevelop={item.inDevelop}
            texto={item.texto}
            titulo={item.titulo}
            img={item.img}
            key={index}
            herramientas={item.herramietas}
          />
        );
      })}
    </div>
  );
};

export default Proyects;
