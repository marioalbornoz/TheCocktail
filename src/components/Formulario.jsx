import React, { useContext } from 'react'
import { CategoriasContext } from '../context/CategoriasContext';

export const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);
    console.log(categorias);    

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
              autoComplete="off"
            />
          </div>
          <div className="col-md-4">
            <select name="categoria" className="form-control" id="">
                <option value="">-Selecciona una opcion</option>
            </select>
          </div>
          <div className="col-md-4">
                    <input type="submit" className="btn btn-block btn-primary" value="Buscar recetas"/>
                </div>
        </div>
      </form>
    );
}
