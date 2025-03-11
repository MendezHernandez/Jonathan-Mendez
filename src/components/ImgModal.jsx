import React, { useContext, useEffect } from "react";
import "../styles/ImgModal.css";
import { AppContext } from "../AppContext";
import { useRef } from "react";
import { CloseIcon } from "./Icons";
import { ArrowLeftButton, ArrowRightButton } from "./Buttons";

const ImgModal = () => {
  const modalRef = useRef(null);
  const { abrirModal, modal, imagenModal, nextImgSlider, prevImgSlider } =
    useContext(AppContext);

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
          abrirModal("");
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
    <dialog ref={modalRef} style={{ userSelect: "none" }}>
      <CloseIcon className="btn-close-modal" onClick={() => abrirModal("")} />
      <ArrowLeftButton onClick={() => prevImgSlider()} />
      <img className="img-modal" src={imagenModal} alt="" />
      <ArrowRightButton onClick={() => nextImgSlider()} />
    </dialog>
  );
};

export default ImgModal;
