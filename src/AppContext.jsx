import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppContextProvider(props) {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme) {
      document.documentElement.style.setProperty(
        "--border-box",
        "rgb(205, 205, 205)"
      );
      document.documentElement.style.setProperty("--shadow-box", "black");
      document.documentElement.style.setProperty("--back", "#2E2F30");
      document.documentElement.style.setProperty("--primary", "#DF60DF");
      document.documentElement.style.setProperty("--second", "#6F44AB");
      document.documentElement.style.setProperty("--complement", "#DED6EF");
      document.documentElement.style.setProperty("--scroll-thumb", "#7B7E85");
      document.documentElement.style.setProperty(
        "--scroll-thumb-hover",
        "#666970"
      );
      document.documentElement.style.setProperty("--shadow", "#242032");
      document.documentElement.style.setProperty(
        "--opacity-background-1",
        0.05
      );
      document.documentElement.style.setProperty(
        "--opacity-background-2",
        0.02
      );
    } else {
      document.documentElement.style.setProperty("--shadow-box", "");
      document.documentElement.style.setProperty("--border-box", "");
      document.documentElement.style.setProperty("--back", "");
      document.documentElement.style.setProperty("--primary", "");
      document.documentElement.style.setProperty("--complement", "");
      document.documentElement.style.setProperty("--second", "");
      document.documentElement.style.setProperty("--scroll-thumb", "");
      document.documentElement.style.setProperty("--scroll-thumb-hover", "");
      document.documentElement.style.setProperty("--shadow", "");
      document.documentElement.style.setProperty("--opacity-background-1", "");
      document.documentElement.style.setProperty("--opacity-background-2", "");
    }
  }, [theme]);

  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const ActiveSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const [imagenModal, setImagenModal] = useState();
  const [modal, setModal] = useState(false);
  const abrirModal = (img) => {
    console.log(img);

    setModal(!modal);
    setTimeout(() => {
      setImagenModal(img);
    }, 500);
    console.log(img);
  };

  const [urlActual, setUrlActual] = useState("");

  useEffect(() => {
    const obtenerURL = () => {
      setUrlActual(window.location.href);
    };
    obtenerURL();
    // Agregar un escucha de evento de scroll cuando el componente se monta
    window.addEventListener("scroll", obtenerURL);
    // Limpiar el escucha de evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", obtenerURL);
    };
  }, []);

  return (
    <AppContext.Provider
      // definir las variables y funciones a exportar
      value={{
        theme,
        setTheme,
        abrirModal,
        modal,
        imagenModal,
        ActiveSidebar,
        isSidebarActive,
        urlActual,
      }}
    >
      {/* indicar que todas los componentes dentro del contexto (toda la app), podrán acceder a sus variables y funciones */}
      {props.children}
    </AppContext.Provider>
  );
}
