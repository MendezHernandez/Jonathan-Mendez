import React from 'react'
import Title from './Title'
import Box from './Box'
import CSS from '../assets/icons/css-3.png'
import Git from "../assets/icons/git.png";
import GitHub from "../assets/icons/github-sign.png";
import HTML from "../assets/icons/html-5.png";
import JS from "../assets/icons/js.png";
import Laravel from "../assets/icons/laravel.png";
import PHP from "../assets/icons/php.png";
import ReactJS from "../assets/icons/react.png";
import Python from "../assets/icons/piton.png";
import SQL from "../assets/icons/sql.png";
import '../styles/Habilidades.css'
import { useInView } from "react-intersection-observer";

const Habilidades = () => {

    const [ref, inView] = useInView();

    const Habili = [
        {
            titulo : 'Lenguajes',
            atributos : [
                {nombre : 'HTML', img : HTML},
                {nombre : 'CSS', img : CSS},
                {nombre : 'JavaScript', img : JS},
                {nombre : 'Python', img : Python},
                {nombre : 'PHP', img : PHP},
                {nombre : 'SQL', img : SQL}
            ],
        },
        {
            titulo : 'Frameworks',
            atributos : [
                {nombre : 'ReactJS', img : ReactJS},
                {nombre : 'Laravel', img : Laravel},
            ],
        },
        {
            titulo : 'Versionamiento',
            atributos : [
                {nombre : 'Git', img : Git},
                {nombre : 'GitHub', img : GitHub},
            ],
        },
    ]

    function Table() {
        return(
            Habili.map((item, index) => {
                return(
                    <div style={{padding: '2rem'}} key={index}>
                        <h3 style={{fontSize: 'large'}} ref={ref}>{item.titulo}</h3>
                        {
                            inView ? window.history.pushState({}, '', '#habilidades') : '' 
                        }
                        <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
                            {
                                item.atributos.map((item, index) => {
                                    return (
                                        <div className='ctn-icon-habilidad' key={index}>
                                            <img className='icon-habilidad'  src={item.img} alt={item.img} />
                                            <span className='nombre-habilidad'>{item.nombre}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <>
            <Title title={'Habilidades'}/>
            <Box mas={Table()}/>
        </>
    )
}

export default Habilidades