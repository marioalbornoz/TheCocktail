import React,{createContext, useEffect, useState} from 'react'
import axios from 'axios';
// import { Receta } from '../components/Receta';


// crear context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idrecetas, guardarIdrecetas] = useState(null);
    const [detalles, guardarDetalles] = useState();
    console.log(detalles);
    useEffect( ()=>{
        if(!idrecetas) return;
        const obtenerReceta = async() => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecetas}`;
            const response = await axios(url);
            guardarDetalles(response.data.drinks[0]);
        }
        obtenerReceta();
    }, [idrecetas] )
    
    return (
        <ModalContext.Provider
            value={{
                idrecetas,
                guardarIdrecetas
            }}
        >
            {props.children}
        </ModalContext.Provider>
    ); 
}
 
export default ModalProvider;