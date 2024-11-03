import "../styles/Certifications.css";
import CardCertificaction from "./CardCertificaction";
import Title from "./Title";
import { listCertifications } from "../Data/dataCertifications";
import { useInView } from "react-intersection-observer";

const Certifications = () => {
  const [ref, inView] = useInView();
  return (
    <section className="main-ctn-certifications">
      <Title title={"Certificaciones"} />
      {inView ? window.history.pushState({}, "", "#certificados") : ""}
      <div ref={ref} className="ctn-list-certifications" style={{}}>
        {listCertifications.map((item, index) => {
          return (
            <CardCertificaction key={index} name={item.name} img={item.img} />
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
