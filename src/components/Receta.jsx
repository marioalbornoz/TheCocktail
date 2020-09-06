import React from 'react'

export const Receta = ({receta}) => {
    return (
      <div className="col-md-4 mb-4">
        <div className="card">
          <h2 className="card-header">{receta.strDrink}</h2>
          <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.srtDrink}`}/>
          <div className="card-body">
          <button
            className="btn btn-block btn-primary"
            type="button"
            >Ver receta</button>
          </div>
        </div>
      </div>
    );
}
