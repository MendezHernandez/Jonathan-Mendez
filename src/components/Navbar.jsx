import React from "react";
import { useState, useEffect, useContext } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import "../styles/Navbar.css";
import { AppContext } from "../AppContext";
import { itemsNavbar } from "../Data/itemsNavbar";
import { MenuBurger } from "./Icons";

export const LinksNavbarSidebar = ({ urlActual, className, action }) => {
  const onClickLink = () => {
    action ? action() : "";
  };

  return (
    <li className={className}>
      {itemsNavbar.map((item, index) => {
        return (
          <a
            onClick={onClickLink}
            key={index}
            href={item.url}
            style={
              urlActual.split("/")[4] === item.url
                ? { color: "var(--primary)" }
                : {}
            }
          >
            {item.name}
          </a>
        );
      })}
    </li>
  );
};

const Navbar = () => {
  //Scrolled es para el inicio cuando la navbar es transparente
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 400;
      setScrolled(isScrolled);
    };
    //Indicamos que se este escuchando cada que el scroll cambie para asi ejecutar la funcion handleScroll
    window.addEventListener("scroll", handleScroll);
    //Esta funcion es de limpieza, se ejecuta para limpiar el anterior eventListener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { theme, setTheme, ActiveSidebar, urlActual } = useContext(AppContext);

  const ButtomChangeTheme = () => {
    if (theme) {
      return (
        <IoMoonSharp
          color="#CAD7D9"
          className="icon-nav"
          onClick={() => setTheme(!theme)}
        />
      );
    } else {
      return (
        <IoSunny
          color="#FFD859"
          className="icon-nav"
          onClick={() => setTheme(!theme)}
        />
      );
    }
  };

  return (
    <nav
      style={scrolled ? { boxShadow: "0px 2px 10px var(--shadow)" } : {}}
      id="navbar"
    >
      <div
        className="ctn-li-nav"
        style={scrolled ? { borderBottom: "none" } : {}}
      >
        <h2 className="logo">JM</h2>
        <LinksNavbarSidebar
          urlActual={urlActual}
          className={"ctn-links-navbar"}
        />
        <article className="ctn-options-buttons">
          <ButtomChangeTheme />
          <MenuBurger
            className="menu-burger-icon"
            onClick={() => ActiveSidebar()}
          />
        </article>
      </div>
    </nav>
  );
};

export default Navbar;
