import React from 'react'
import PropTypes from 'prop-types'

const Listarecetas = ({recetas}) => {
    return (
      <div className="text-center">
        <h2>Listado</h2>
        {recetas.map((receta) => (
          <li key={receta.isDrink}>{receta.strDrink}</li>
        ))}
      </div>
    );
}

Listarecetas.propTypes = {
    recetas: PropTypes.array.isRequired
}

export default Listarecetas
