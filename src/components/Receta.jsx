import React from 'react'

export const Receta = ({receta}) => {
    return (
      <div className="col-md-4">
        <div className="card">
          <h2 className="card-header">{receta.strDrink}</h2>
        </div>
      </div>
    );
}
