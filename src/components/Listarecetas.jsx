import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
import { RecetasContext } from '../context/RecetasContext';
import { Receta } from './Receta';

const Listarecetas = () => {

    const { recetas } = useContext(RecetasContext);
    return (
      <div className="row mt-5">
        {recetas ? (recetas.map((receta) => (
          <Receta key={receta.idDrink} receta={receta}/>
        ))) : null }
      </div>
    );
}

export default Listarecetas
