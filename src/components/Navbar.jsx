import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { IoSunny } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import "../styles/Navbar.css"
import { AppContext } from '../AppContext';

const Navbar = () => {
   //Scrolled es para el inicio cuando la navbar es transparente
   const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 400;
            setScrolled(isScrolled);
        };
        //Indicamos que se este escuchando cada que el scroll cambie para asi ejecutar la funcion handleScroll
        window.addEventListener('scroll', handleScroll);
        //Esta funcion es de limpieza, se ejecuta para limpiar el anterior eventListener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
   
    const {theme, setTheme} = useContext(AppContext)
    
    const [urlActual, setUrlActual] = useState("")
    
    useEffect(() => {
        const obtenerURL = () => {
            setUrlActual(window.location.href)    
        }
        // Agregar un escucha de evento de scroll cuando el componente se monta
        window.addEventListener('scroll', obtenerURL);
        
        // Limpiar el escucha de evento cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', obtenerURL);
            };
    }, [])
    
    return (
        <nav style={scrolled ? {boxShadow: '3px 5px 5px var(--shadow)'} : {}}>
            <div style={scrolled ? {borderBottom: 'none'} : {}}>
                <h2 className='logo'>JM</h2>
                <li>
                    <a style={urlActual.split('/')[2] === "#sobre-mi" | urlActual.split('/')[3] === "" ? {color: "var(--primary)"} : {}} href="#sobre-mi">Sobre mí</a>
                    <a style={urlActual.split('/')[2] === "#proyectos" ? {color: "var(--primary)"} : {}} href="#proyectos">Proyectos</a>
                    <a style={urlActual.split('/')[2] === "#habilidades" ? {color: "var(--primary)"} : {}} href="#habilidades">Habilidades</a>
                    {
                        theme ? 
                        <IoMoonSharp color='#CAD7D9' className='icon-nav' onClick={() => setTheme(!theme)}/>
                        :
                        <IoSunny color='#FFD859' className='icon-nav' onClick={() => setTheme(!theme)}/>
                    }
                    </li>
            </div>
        </nav>
    )
}

export default Navbar