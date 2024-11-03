import "../styles/Certifications.css";

const CardCertificaction = ({ name, img }) => {
  return (
    <div className="ctn-certification">
      <img className="img-certification" src={img} alt={`imagen ${name}`} />
      <h3>{name}</h3>
    </div>
  );
};

export default CardCertificaction;
