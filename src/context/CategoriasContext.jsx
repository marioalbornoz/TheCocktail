import React, { createContext, useState } from 'react'

// Crear el context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
    // crear el state del context
    const [hola, guardarHola] = useState('hola desde state');


    return (
        <CategoriasContext.Provider
            value={{
                hola,
                guardarHola
            }}
            >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;