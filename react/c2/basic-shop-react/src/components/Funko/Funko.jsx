import React from 'react'

const Funko = ({isCarrito}) => {
  return (
    <div>
      {isCarrito ? <h3>Carro activo</h3> : <h3>No hay elementos carro</h3>}
    </div>
  )
}

export default Funko
