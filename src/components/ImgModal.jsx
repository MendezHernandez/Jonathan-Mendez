import React, { useContext, useEffect } from "react";
import "../styles/ImgModal.css";
import { AppContext } from "../AppContext";
import { useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ImgModal = () => {
  const modalRef = useRef(null);
  const { abrirModal, modal, imagenModal } = useContext(AppContext);

  if (modalRef.current) {
    if (modal) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }

  if (modal === true) {
    const htmlElement = document.documentElement;
    htmlElement.style.paddingRight = "10px";
    htmlElement.style.overflow = "hidden";
  } else {
    const htmlElement = document.documentElement;
    htmlElement.style.paddingRight = "0px";
    htmlElement.style.overflow = "auto";
  }

  useEffect(() => {
    // Función que se ejecuta cuando se presiona una tecla
    const handleKeyDown = (event) => {
      if (modal === true) {
        if (event.key === "Escape") {
          abrirModal(imagenModal);
        }
      }
    };

    // Agrega el event listener
    document.addEventListener("keydown", handleKeyDown);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modal]);

  return (
    <dialog ref={modalRef}>
      <IoIosCloseCircleOutline
        className="btn-close-modal"
        onClick={() => abrirModal(imagenModal)}
      />
      <img className="img-modal" src={imagenModal} alt="" />
    </dialog>
  );
};

export default ImgModal;
