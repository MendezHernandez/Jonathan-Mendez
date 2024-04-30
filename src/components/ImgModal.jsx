import React, {useContext} from 'react'
import '../styles/ImgModal.css'
import { AppContext } from '../AppContext'

const ImgModal = () => {

    const {abrirModal, modal, imagenModal} = useContext(AppContext)

    if (modal===true) {
        const htmlElement = document.documentElement;
        htmlElement.style.overflow = 'hidden';
    } else {
        const htmlElement = document.documentElement
        htmlElement.style.overflow = 'auto'
    }

    return (
        <div style={modal ? {display: 'flex'} : {}} className='ctn-img-modal' onClick={() => abrirModal()}>
            <img className='img-modal' src={imagenModal} alt="" />
        </div>
    )
}

export default ImgModal