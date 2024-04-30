import React from 'react'
import '../styles/Footer.css'
import Gmail from '../assets/icons/gmail.png'

const Footer = () => {
    return (
        <footer>
            <h3>© 2024 Jonathan Ezequiel Méndez Hernandez</h3>
            <h3><img src={Gmail} alt="" /> MendezHernandez999@gmail.com</h3>
        </footer>
    )
}

export default Footer