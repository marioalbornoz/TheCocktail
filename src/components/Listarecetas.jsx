import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
import { RecetasContext } from '../context/RecetasContext';
import { Receta } from './Receta';
import { Spinner } from './Spinner';

const Listarecetas = () => {

    
    const { recetas, cargando } = useContext(RecetasContext);

    return (
      
      <div className="row mt-5">
        {
          (cargando) ? <Spinner /> : (recetas ? (recetas.map((receta) => (
            <Receta key={receta.idDrink} receta={receta}/>
          ))) : null )
        }
        
      </div>
    );
}

export default Listarecetas
