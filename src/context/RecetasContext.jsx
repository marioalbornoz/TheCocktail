import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';
export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [consulta, guardarConsulta] = useState(false);
    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
      nombre: "",
      categorias: ""
    })

    const {nombre, categoria} = busqueda;
    useEffect(()=>{
        if(consulta){
            const obtenerRecetas = async() =>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${nombre}&c=${categoria}`
                const receta = await axios(url)
                guardarRecetas(receta.data.drinks);
            }
            obtenerRecetas();
        }
    }, [nombre, categoria])
    return (
      <RecetasContext.Provider value={{ buscarRecetas, guardarConsulta, recetas }}>
        {props.children}
      </RecetasContext.Provider>
    );
}
 
export default RecetasProvider;