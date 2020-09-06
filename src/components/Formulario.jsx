import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';
export const Formulario = () => {

    const [ busqueda, guardarBusqueda] = useState({
        nombre:"",
        categoria:""
    })
    const [error, guardarError] = useState(false);

    const { categorias } = useContext(CategoriasContext); 

    const { buscarRecetas, guardarConsulta } = useContext(RecetasContext);
    
    // funcion para leer el contenido
    const obtenerDatosReceta = (e) => {
        guardarBusqueda({
          ...busqueda,
          [e.target.name]: e.target.value,
        });
        guardarError(false);
    }

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(busqueda.nombre ==='' || busqueda.categoria ===''){
              guardarError(true);
          }
          buscarRecetas(busqueda);
          guardarConsulta(true);
          
        }}
        className="col-12"
      >
        <fieldset className="text-center">
          <legend>Busca tu bebida por categoria o ingrediente</legend>
        </fieldset>
        { error ? <div className="alert alert-warning text-center">Todos los campos son obligatorios</div> : null}
        <div className="row mt-4">
          <div className="col-md-4">
            <input
              name="nombre"
              className="form-control"
              type="text"
              placeholder="Buscar por ingrediente"
              onChange={obtenerDatosReceta}
              autoComplete="off"
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
