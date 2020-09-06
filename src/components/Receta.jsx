import React from 'react'

export const Receta = ({receta}) => {
    return (
      <div className="col-md-4 mb-4">
        <div className="card">
          <h2 className="card-header">{receta.strDrink}</h2>
          <img className="card-img-top" src={receta.strDrinkThumb} alt=""/>
        </div>
      </div>
    );
}
