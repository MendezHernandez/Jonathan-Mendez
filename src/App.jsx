import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Box from "./components/Box.jsx";
import Proyects from "./components/Proyects.jsx";
import Habilidades from "./components/Habilidades.jsx";
import ImgModal from "./components/ImgModal.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";

function App() {
  return (
    <>
      <Navbar />
      <section className="section-head" id="sobre-mi">
        <Header />
        <Box
          texto={
            "Soy un joven ingeniero que se dedica a desarrollar soluciones mediante el uso de herramientas de software, tales como lenguajes de programación y aplicaciones web. Desde pequeño, he sido un entusiasta de la tecnología, y hasta el día de hoy no he dejado de hacerme preguntas y de seguir aprendiendo sobre este mundo que tanto me apasiona."
          }
          titulo={"Sobre mí"}
        />
      </section>

      <section className="section-projects" id="proyectos">
        <Proyects />
      </section>

      <section className="section-habilidades" id="habilidades">
        <Habilidades />
      </section>
      <Footer />
      <ImgModal />
      <Loader />
    </>
  );
}

export default App;