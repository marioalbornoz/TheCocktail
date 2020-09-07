import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ModalContext } from '../context/ModalContext';

export const Receta = ({receta}) => {

    const {guardarIdrecetas} = useContext(ModalContext);
    return (
      <div className="col-md-4 mb-4">
        <div className="card">
          <h2 className="card-header">{receta.strDrink}</h2>
          <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.srtDrink}`}/>
          <div className="card-body">
          <button
            className="btn btn-block btn-primary"
            type="button"
            onClick={ ()=>{
                guardarIdrecetas(receta.idDrink)
            }}
            >Ver receta</button>
          </div>
        </div>
      </div>
    );
}
Receta.propTypes = {
    receta: PropTypes.object.isRequired
}