import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext';

export const Formulario = () => {

    const [ busqueda, guardarBusqueda] = useState({
        nombre:"",
        categoria:""
    })

    const { categorias } = useContext(CategoriasContext);
    console.log(categorias); 
    
    // funcion para leer el contenido
    const obtenerDatosReceta = (e) => {
        guardarBusqueda({
          ...busqueda,
          [e.target.name]: e.target.value,
        });
    }

    return (
      <form className="col-12">
        <fieldset className="text-center">
          <legend>Busca tu bebida por categoria o ingrediente</legend>
        </fieldset>
        <div className="row mt-4">
          <div className="col-md-4">
            <input
              name="nombre"
              className="form-control"
              type="text"
              placeholder="Buscar por ingrediente"
              onChange={obtenerDatosReceta}
            />
          </div>
          <div className="col-md-4">
            <select
              name="categoria"
              onChange={obtenerDatosReceta}
              className="form-control"
              id=""
            >
              <option value="">-Selecciona una opcion</option>
              {categorias.map((categoria) => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <input
              type="submit"
              className="btn btn-block btn-primary"
              value="Buscar recetas"
            />
          </div>
        </div>
      </form>
    );
}
