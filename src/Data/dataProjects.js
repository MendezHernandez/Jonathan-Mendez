// Rosa Elena
import Inicio from "../assets/rosaElena/inicioRosaElena.png";
import Nosotros from "../assets/rosaElena/NostrosRosaElena.png";
import Productos from "../assets/rosaElena/ProductosRosaElena.png";
// Routime
import Agregar from "../assets/routime/AgregarActividad.jpeg";
import Home from "../assets/routime/Home.jpeg";
import Tareas from "../assets/routime/tareasLunes.jpeg";
// Servicios
import Editar from "../assets/servicios/editar_servicio.png";
import Eliminar from "../assets/servicios/eliminar_servicio.png";
import HomeServicios from "../assets/servicios/home.jpeg";
import Login from "../assets/servicios/login.jpeg";
import Perfil from "../assets/servicios/perfil.jpeg";
// sitio
import Empresas from "../assets/sitio/empresas.png";
import Eventos from "../assets/sitio/eventos.png";
import Foro from "../assets/sitio/foro.png";
import InicioSitio from "../assets/sitio/inicio.png";
// Active Learning
import Pomodoro from "../assets/activeLearning/pomodoro.jpeg";
import ActiveRecall from "../assets/activeLearning/active-recall.jpeg";
import AddSubjectModal from "../assets/activeLearning/add-subject.jpeg";
import Notebook from "../assets/activeLearning/notebook.jpeg";
// Herramientas
import CSS from "../assets/icons/css-3.png";
import HTML from "../assets/icons/html-5.png";
import JS from "../assets/icons/js.png";
import Laravel from "../assets/icons/laravel.png";
import PHP from "../assets/icons/php.png";
import ReactJS from "../assets/icons/react.png";
import MySQL from "../assets/icons/mysql.png";
import Expo from "../assets/icons/expo-dark.png";
import Express from "../assets/icons/express-js.png";
import Node from "../assets/icons/node-js.png";
import Tailwind from "../assets/icons/tailwind.png";

export const Projects = [
  {
    inDevelop: true,
    titulo: "Active Learning",
    texto:
      "Se trata de una aplicación móvil diseñada para el público estudiantil, que ofrece herramientas para aquellos estudiantes a quienes les resulta difícil concentrarse, organizarse y retener información. La app incorpora métodos de estudio como Active Recall y Pomodoro para ayudar a maximizar la productividad y el aprendizaje.",
    img: [
      { nombreImg: Pomodoro },
      { nombreImg: ActiveRecall },
      { nombreImg: Notebook },
      { nombreImg: AddSubjectModal },
    ],
    herramietas: [
      { herramienta: JS },
      { herramienta: Tailwind },
      { herramienta: ReactJS },
      { herramienta: Expo },
      { herramienta: Node },
      { herramienta: Express },
      { herramienta: MySQL },
    ],
  },
  {
    inDevelop: false,
    titulo: "Sitio Ingeniería en Desarrollo y Gestión de Software",
    texto:
      "Sitio web para la Universidad Tecnológica de Escuinapa, con el propósito de promover la carrera de Desarrollo y Gestión de Software. Este sitio tiene como objetivo informar a todos los interesados sobre lo que podrían encontrar al ingresar a esta carrera, incluyendo proyectos escolares, testimonios de estudiantes y egresados, así como otros datos relevantes.",
    img: [
      { nombreImg: InicioSitio },
      { nombreImg: Empresas },
      { nombreImg: Eventos },
      { nombreImg: Foro },
    ],
    herramietas: [
      { herramienta: HTML },
      { herramienta: CSS },
      { herramienta: JS },
      { herramienta: ReactJS },
      { herramienta: PHP },
      { herramienta: MySQL },
    ],
  },
  {
    inDevelop: false,
    titulo: "Servicios UT",
    texto:
      "Aplicación web desarrollada como proyecto escolar con el objetivo de permitir a los alumnos de la Universidad Tecnológica de Escuinapa ofrecer diversos servicios, tales como: limpieza de PCs, asesorías de inglés o preparación de platillos, entre otros. Asimismo, los propios estudiantes tienen la posibilidad de alquilar o comprar estos servicios mediante un acuerdo monetario.",
    img: [
      { nombreImg: HomeServicios },
      { nombreImg: Editar },
      { nombreImg: Eliminar },
      { nombreImg: Login },
      { nombreImg: Perfil },
    ],
    herramietas: [
      { herramienta: HTML },
      { herramienta: CSS },
      { herramienta: JS },
      { herramienta: PHP },
      { herramienta: Laravel },
      { herramienta: MySQL },
    ],
  },
  {
    inDevelop: false,
    titulo: "Sitio web Emprendedores del pacífico",
    texto:
      'Sitio web corporativo para el empaque de mangos "Rosa Elena" del grupo "Emprendedores del Pacífico", donde se comparte información acerca de la empresa y sus productos.',
    img: [
      { nombreImg: Inicio },
      { nombreImg: Nosotros },
      { nombreImg: Productos },
    ],
    herramietas: [
      { herramienta: HTML },
      { herramienta: CSS },
      { herramienta: JS },
      { herramienta: ReactJS },
    ],
  },
  {
    inDevelop: false,
    titulo: "Routime",
    texto:
      "Aplicación web y aplicación móvil desarrolladas como proyecto escolar. Se trata de una agenda de rutina en la que sus usuarios pueden tener un orden de sus tareas y actividades diarias.",
    img: [{ nombreImg: Agregar }, { nombreImg: Home }, { nombreImg: Tareas }],
    herramietas: [
      { herramienta: HTML },
      { herramienta: CSS },
      { herramienta: JS },
      { herramienta: ReactJS },
      { herramienta: PHP },
      { herramienta: MySQL },
    ],
  },
];
