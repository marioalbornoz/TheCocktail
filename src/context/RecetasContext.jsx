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
    const [cargando, guardarCargando] = useState(false);

    const {nombre, categoria} = busqueda;
    useEffect(()=>{
        if(consulta){
            const obtenerListado = async() =>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${nombre}&c=${categoria}`
                const receta = await axios(url);
                //mostrar el spinner
                guardarCargando(true);
                setTimeout(() => {
                  //ocultar el spinner
                  guardarCargando(false);
                  guardarRecetas(receta.data.drinks);
                },3000);
                
            }
            obtenerListado();
        }
        
    }, [nombre, categoria, consulta])
    return (
      <RecetasContext.Provider value={{ buscarRecetas, guardarConsulta, recetas, cargando }}>
        {props.children}
      </RecetasContext.Provider>
    );
}
 
export default RecetasProvider;