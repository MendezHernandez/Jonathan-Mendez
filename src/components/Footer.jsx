import React from 'react'
import '../styles/Footer.css'
import Gmail from '../assets/icons/gmail.png'

const Footer = () => {
    return (
        <footer>
            <a className='enlace-gmail' href='mailto:mendezhernandez999@gmail.com'><img src={Gmail} alt="" />mendezhernandez999@gmail.com</a>
            <h3>©2024 Jonathan Ezequiel Méndez Hernández</h3>
        </footer>
    )
}

export default Footer