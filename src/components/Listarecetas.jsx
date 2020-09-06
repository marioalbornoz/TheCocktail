import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
import { RecetasContext } from '../context/RecetasContext';
import { Receta } from './Receta';

const Listarecetas = () => {

    const { recetas } = useContext(RecetasContext);
    return (
      <div className="row mt-5">
        {/* <h1>Listado</h1> */}
        {recetas.map((receta) => (
          <Receta key={receta.idDrink} receta={receta}/>
        ))}
      </div>
    );
}

// Listarecetas.propTypes = {
//     recetas: PropTypes.array.isRequired
// }

export default Listarecetas
