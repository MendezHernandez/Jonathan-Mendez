import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppContextProvider(props) {

    const [theme, setTheme] = useState(false)

    useEffect(() => {
        if (theme) {
            document.documentElement.style.setProperty('--back', '#2E2F30')
            document.documentElement.style.setProperty('--primary', '#DF60DF')
            document.documentElement.style.setProperty('--second', '#6F44AB')
            document.documentElement.style.setProperty('--complement', '#DED6EF')
            document.documentElement.style.setProperty('--scroll-thumb', '#7B7E85')
            document.documentElement.style.setProperty('--scroll-thumb-hover', '#666970')
            document.documentElement.style.setProperty('--shadow', '#242032')
        } else {
            document.documentElement.style.setProperty('--back', '')
            document.documentElement.style.setProperty('--primary', '')
            document.documentElement.style.setProperty('--complement', '')
            document.documentElement.style.setProperty('--second', '')
            document.documentElement.style.setProperty('--scroll-thumb', '')
            document.documentElement.style.setProperty('--scroll-thumb-hover', '')
            document.documentElement.style.setProperty('--shadow', '')
        }
    }, [theme])
    
    const [imagenModal, setImagenModal] = useState()
    const [modal, setModal] = useState(false)
    const abrirModal = (img) => {
        setModal(!modal)
        setImagenModal(img)
    }

    return (
        <AppContext.Provider
            // definir las variables y funciones a exportar
            value={{
                theme,
                setTheme,
                abrirModal,
                modal,
                imagenModal,
            }}
        >
            {/* indicar que todas los componentes dentro del contexto (toda la app), podrán acceder a sus variables y funciones */}
            {props.children}
        </AppContext.Provider>
    )

}